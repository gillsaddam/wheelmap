require 'pg'
require 'builder'

$fields = [ 'shop', 'office', 'aerialway', 'aeroway', 'amenity', 'tourism', 'historic', 'sport', 'leisure', 'public_transport' ]

# encoding: UTF-8
namespace :make_osc do
  desc 'Make OSC files.'
  task :full => :environment do
    $conn = PGconn.open(:dbname => 'osm', :user => 'osm', :password => 'osm')
    FILE_HANDLE = File.new(SHAPE_FILE, "wb")
    xml = Builder::XmlMarkup.new(:target=>FILE_HANDLE, :indent => 2 )
    xml.instruct! :xml, :encoding => "UTF-8"
    xml.osmChange do |osc|
        osc.create do |cre|
            $conn.transaction do
                $conn.exec('declare mycursor cursor for select osm_id, tags, ' + $fields.join(',') + ',st_x(way) as x,st_y(way) as y from pseudo_nodes')
                begin
                    res = $conn.exec('fetch forward 1000 from mycursor')
                    break if (res.cmd_tuples() == 0)
                    res.each do |row|
                       write_node(cre, row, true) 
                    end
                end while true
            end
        end
    end
    FILE_HANDLE.close
  end

  task :diff => :environment do
    $conn = PGconn.open(:dbname => 'osm', :user => 'osm', :password => 'osm')
    FILE_HANDLE = File.new(SHAPE_FILE, "wb")
    xml = Builder::XmlMarkup.new(:target=>FILE_HANDLE, :indent => 2 )
    xml.instruct! :xml, :encoding => "UTF-8"
    xml.osmChange do |osc|
        $conn.transaction do

            # "delete" section in the osmChange document - select all pseudo_nodes
            # that have a delete flag set, output them, and delete them from the
            # table.
            osc.delete do |del|
                begin
                    # read max 1000 objects at a time
                    res = $conn.exec('select osm_id, tags, ' + $fields.join(',') + ',st_x(way) as x,st_y(way) as y from pseudo_nodes where deleted=true and dirty=false limit 1000')
                    rows=0
                    ids = Array.new()
                    res.each do |row|
                        write_node(del, row, false)
                        ids.push(row["osm_id"])
                        rows = rows + 1
                    end
                    res.clear()
                    # delete records
                    if (rows > 0) 
                        res = $conn.exec('delete from pseudo_nodes where osm_id in(' + ids.join(',') + ')')
                        res.clear()
                    end
                end while rows>0
            end

            # "modify" section in the osmChange document - select all pseudo_nodes
            # with dirty flag set, output them, and clear the dirty flag.
            osc.modify do |mod|
                begin
                    # read max 1000 objects at a time
                    res = $conn.exec('select osm_id, tags, ' + $fields.join(',') + ',st_x(way) as x,st_y(way) as y from pseudo_nodes where dirty=true and deleted=true limit 1000')
                    rows=0
                    ids = Array.new()
                    res.each do |row|
                        write_node(mod, row, true)
                        ids.push(row["osm_id"])
                        rows = rows + 1
                    end
                    res.clear()
                    # clear dirty flag
                    if (rows > 0) 
                        res = $conn.exec('update pseudo_nodes set dirty=false,deleted=false where osm_id in(' + ids.join(',') + ')')
                        res.clear()
                    end
                end while rows>0
            end

            # "create" section in the osmChange document - select all pseudo_nodes
            # with dirty flag set, output them, and clear the dirty flag.
            osc.create do |mod|
                begin
                    # read max 1000 objects at a time
                    res = $conn.exec('select osm_id, tags, ' + $fields.join(',') + ',st_x(way) as x,st_y(way) as y from pseudo_nodes where dirty=true and deleted=false limit 1000')
                    rows=0
                    ids = Array.new()
                    res.each do |row|
                        write_node(mod, row, true)
                        ids.push(row["osm_id"])
                        rows = rows + 1
                    end
                    res.clear()
                    # clear dirty flag
                    if (rows > 0) 
                        res = $conn.exec('update pseudo_nodes set dirty=false where osm_id in(' + ids.join(',') + ')')
                        res.clear()
                    end
                end while rows>0
            end
        end
    end
    FILE_HANDLE.close
  end

end

# writes the XML representation of one node.
def write_node(xml_parent, row, include_tags)
    # Some nodes have no recorder lat/long and this will break any import attempts.
    # The only reasonable choice is to ignore them, unfortunately.
    return if (row["y"] == nil || row["x"] == nil)

    if (include_tags)
        xml_parent.node(
          :id => row["osm_id"], 
          :user => "dummy", :uid => 0, 
          :timestamp => "2012-01-01T00:00:00Z", 
          :version => "1", 
          :lat => row["y"], :lon => row["x"]) do |node|
            $fields.each do |key|
                next if row[key] == nil
                node.tag(:k => key, :v => row[key])
            end
            if (row['tags'])
                tags = row['tags'].from_hstore
                tags.each do |key,value|
                    if (key != 'way_area')
                        node.tag(:k => key, :v => value)
                    end
                end
            end
        end
    else
        xml_parent.node(
          :id => row["osm_id"], 
          :user => "dummy", :uid => 0, 
          :timestamp => "2012-01-01T00:00:00Z", 
          :version => "1", 
          :lat => row["y"], :lon => row["x"])
    end
end



# We need to add some capabilities to strings.
class String

  # If the value os a column is already a String and it calls to_hstore, it
  # just returns self. Validation occurs afterwards.
  def to_hstore
    self
  end

  # Validates the hstore format. Valid formats are:
  # * An empty string
  # * A string like %("foo"=>"bar"). I'll call it a "double quoted hstore format".
  # * A string like %(foo=>bar). Postgres doesn't emit this but it does accept it as input, we should accept any input Postgres does

  def valid_hstore?
    pair = hstore_pair
    !!match(/^\s*(#{pair}\s*(,\s*#{pair})*)?\s*$/)
  end

  # Creates a hash from a valid double quoted hstore format, 'cause this is the format
  # that postgresql spits out.
  def from_hstore
    token_pairs = (scan(hstore_pair)).map { |k,v| [k,v =~ /^NULL$/i ? nil : v] }
    token_pairs = token_pairs.map { |k,v|
      [k,v].map { |t|
        case t
        when nil then t
        when /^"(.*)"$/ then $1.gsub(/\\(.)/, '\1')
        else t.gsub(/\\(.)/, '\1')
        end
      }
    }
    Hash[ token_pairs ]
  end

  private

  def hstore_pair
    quoted_string = /"[^"\\]*(?:\\.[^"\\]*)*"/
    unquoted_string = /[^\s=,][^\s=,\\]*(?:\\.[^\s=,\\]*|=[^,>])*/
    string = /(#{quoted_string}|#{unquoted_string})/
    /#{string}\s*=>\s*#{string}/
  end
end
