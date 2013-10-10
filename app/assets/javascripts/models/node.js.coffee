attr = DS.attr

@Wheelmap.Node = DS.Model.extend
  osm_id: attr()
  lat: attr()
  lon: attr()
  name: attr()
  icon: attr()
  wheelchair: attr()
  category: attr()
  address: attr()
  breadcrumbs: attr()
  accesibility: attr()
  type: attr()

  location: (()->
    new L.LatLng(@get('lat'), @get('lon'))
  ).property('lat', 'lon')

  statusText: (()->
    I18n.t('wheelchairstatus.' + @get('wheelchair'));
  ).property('wheelchair')

  statusDescription: (()->
    I18n.t('wheelmap.what_is.' + @get('accesibility'));
  ).property('accesibility')

  headline: (()->
    @get('name') || I18n.t("poi.name." + @get('category') + "." + @get('type'))
  ).property('name', 'type','category')

  show_path: (()->
    '/nodes/' + @get('osm_id')
  ).property('osm_id')

  edit_path: (()->
    '/nodes/' + @get('osm_id') + '/edit'
  ).property('osm_id')

  update_path:(()->
    '/nodes/' + @get('osm_id') + '/update_wheelchair.js'
  ).property('osm_id')

@Wheelmap.NodeAdapter = DS.RESTAdapter.extend()