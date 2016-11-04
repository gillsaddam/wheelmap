# encoding: UTF-8
WheelchairStatus = %w{yes limited no unknown}

Languages = {
  'ar'    => 'العربية',
  'bg'    => 'български',
  'ca'    => 'Català',
  'cn'    => '中文',
  'cs'    => 'Čeština',
  'da'    => 'Danske',
  'de'    => 'Deutsch',
  'el'    => 'Ελληνικά',
  'en'    => 'English',
  'es'    => 'Español',
  'fr'    => 'Français',
  'hi'    => 'हिन्दी',
  'hu'    => 'Magyar',
  'is'    => 'Íslenska',
  'it'    => 'Italiano',
  'ja'    => '日本',
  'ko'    => '한국어',
  'lv'    => 'Latviešu',
  'nb'    => 'Norsk Bokmål',
  'nl'    => 'Nederlands',
  'pl'    => 'Polski',
  'pt'    => 'Português',
  'pt_BR' => 'Português do Brasil',
  'ru'    => 'Русский',
  'sq_AL' => 'Shqiptar',
  'sv'    => 'Svenska',
  'sk'    => 'Slovenčina',
  'tlh'   => 'tlhIngan Hol',
  'tr'    => 'Türkçe',
  'uk'    => 'Український',
  'zh'    =>  '中文',
  'zh_TW' =>  '中文'
}

Tags = {
  :alcohol => :shop,
  :alternative => :healthcare,
  :archaeological_site => :historic,
  :arts_centre => :amenity,
  :artwork => :amenity,
  :atm => :amenity,
  :attraction => :tourism,
  :bakery => :shop,
  :bank => :amenity,
  :bar => :amenity,
  :beach => :natural,
  :beauty => :shop,
  :bed_and_breakfast => :tourism,
  :beverages => :shop,
  :bicycle => :shop,
  :bicycle_rental => :amenity,
  :biergarten => :amenity,
  :books => :shop,
  :brothel => :amenity,
  :bureau_de_change => :amenity,
  :bus_station => :amenity,
  :bus_stop => :highway,
  :butcher => :shop,
  :cafe => :amenity,
  :camp_site => :tourism,
  :car => :shop,
  :car_rental => :amenity,
  :car_repair => :shop,
  :car_sharing => :amenity,
  :caravan_site => :tourism,
  :casino => :amenity,
  :castle => :historic,
  :cave_entrance => :natural,
  :chalet => :tourism,
  :chemist => :shop,
  :cinema => :amenity,
  :clothes => :shop,
  :college => :amenity,
  :community_centre => :amenity,
  :community_center => :amenity,
  :company => :office,
  :computer => :shop,
  :confectionery => :shop,
  :convenience => :shop,
  :courthouse => :amenity,
  :deli => :shop,
  :dentist => :amenity,
  :department_store => :shop,
  :doctors => :amenity,
  :doityourself => :shop,
  :dormitory => :building,
  :drinking_water => :amenity,
  :driving_school => :amenity,
  :dry_cleaning => :shop,
  :electronics => :shop,
  :embassy => :amenity,
  :employment_agency => :office,
  :estate_agent => :office,
  :fabric => :shop,
  :fast_food => :amenity,
  :ferry_terminal => :amenity,
  :florist => :shop,
  :fuel => :amenity,
  :furniture => :shop,
  :gallery => :tourism,
  :garden_centre => :shop,
  :gift => :shop,
  :government => :office,
  :guest_house => :tourism,
  :hairdresser => :shop,
  :halt => :railway,
  :hardware => :shop,
  :hearing_aids => :shop,
  :hospital => :amenity,
  :hostel => :tourism,
  :hotel => :tourism,
  :ice_cream => :amenity,
  :insurance => :office,
  :jewelry => :shop,
  :kindergarten => :amenity,
  :kiosk => :shop,
  :laundry => :shop,
  :lawyer => :office,
  :library => :amenity,
  :mall => :shop,
  :massage => :shop,
  :medical_supply => :shop,
  :memorial => :historic,
  :motel => :tourism,
  :museum => :tourism,
  :nightclub => :amenity,
  :occupational_therapist => :healthcare,
  :optician => :shop,
  :organic => :shop,
  :outdoor => :shop,
  :parking => :amenity,
  :pet => :shop,
  :pharmacy => :amenity,
  :photo => :shop,
  :physiotherapist => :healthcare,
  :pitch => :leisure,
  :place_of_worship => :amenity,
  :platform => :railway,
  :playground => :leisure,
  :police => :amenity,
  :post_office => :amenity,
  :psychotherapist => :healthcare,
  :pub => :amenity,
  :restaurant => :amenity,
  :sauna => :leisure,
  :school => :amenity,
  :second_hand => :shop,
  :shoes => :shop,
  :social_facility => :amenity,
  :speech_therapist => :healthcare,
  :sports => :shop,
  :sports_centre => :leisure,
  :stadium => :leisure,
  :station => :railway,
  # Comment out, as these tags have same key
  # :station => :aerialway,
  :stationery => :shop,
  :stripclub => :amenity,
  :subway_entrance => :railway,
  :supermarket => :shop,
  :swimming_pool => :amenity,
  :tattoo => :shop,
  :terminal => :aeroway,
  :theatre => :amenity,
  :theme_park => :tourism,
  :toilets => :amenity,
  :townhall => :amenity,
  :toys => :shop,
  :tram_stop => :railway,
  :travel_agency => :shop,
  :university => :amenity,
  :veterinary => :amenity,
  :video => :shop,
  :viewpoint => :tourism,
  :zoo => :tourism
}