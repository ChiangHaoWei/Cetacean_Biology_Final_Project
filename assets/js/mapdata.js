var simplemaps_countrymap_mapdata = {
  main_settings: {
    //General settings
    width: 'responsive', //'700' or 'responsive'
    background_color: '#FFFFFF',
    background_transparent: 'yes',
    border_color: '#ffffff',

    //State defaults
    state_description: '',
    state_color: '#88A4BC',
    state_hover_color: '#3B729F',
    state_url: '',
    border_size: '1.5',
    all_states_inactive: 'no',
    all_states_zoomable: 'no',

    //Location defaults
    location_description: 'Location description',
    location_url: '',
    location_color: '#FF0067',
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: 'square',
    location_image_source: 'frog.png',
    location_border_color: '#FFFFFF',
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: 'no',
    all_locations_hidden: 'no',

    //Label defaults
    label_color: '#d5ddec',
    label_hover_color: '#d5ddec',
    label_size: 22,
    label_font: 'Arial',
    hide_labels: 'no',
    hide_eastern_labels: 'no',

    //Zoom settings
    zoom: 'yes',
    manual_zoom: 'yes',
    back_image: 'no',
    initial_back: 'no',
    initial_zoom: '-1',
    initial_zoom_solo: 'no',
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: 'yes',
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: 'white',
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
    popup_nocss: 'no',

    //Advanced settings
    div: 'map_tw',
    auto_load: 'no',
    url_new_tab: 'no',
    images_directory: 'default',
    fade_time: 0.1,
    link_text: 'View Website',
    popups: 'detect',
    state_image_url: '',
    state_image_position: '',
    location_image_url: '',
    border_hover_size: '',
  },
  state_specific: {
    TWN1156: {
      name: 'Kaohsiung City',
    },
    TWN1158: {
      name: 'Pingtung',
    },
    TWN1160: {
      name: 'Tainan City',
    },
    TWN1161: {
      name: 'Hsinchu City',
    },
    TWN1162: {
      name: 'Hsinchu',
    },
    TWN1163: {
      name: 'Yilan',
    },
    TWN1164: {
      name: 'Keelung City',
    },
    TWN1165: {
      name: 'Miaoli',
    },
    TWN1166: {
      name: 'Taipei City',
    },
    TWN1167: {
      name: 'New Taipei City',
    },
    TWN1168: {
      name: 'Taoyuan',
    },
    TWN1169: {
      name: 'Changhua',
    },
    TWN1170: {
      name: 'Chiayi',
    },
    TWN1171: {
      name: 'Chiayi City',
    },
    TWN1172: {
      name: 'Hualien',
    },
    TWN1173: {
      name: 'Nantou',
    },
    TWN1174: {
      name: 'Taichung City',
    },
    TWN1176: {
      name: 'Yunlin',
    },
    TWN1177: {
      name: 'Taitung',
    },
    TWN3414: {
      name: 'Penghu',
    },
    TWN3415: {
      name: 'Kinmen',
    },
    TWN5128: {
      name: 'Lienchiang',
    },
  },
  locations: {
    0: {
      lat: '24.19256509334307',
      lng: '121.66340204244122',
      name: '花蓮喙鯨擱淺案件',
      description: '崇德海灘',
      size: '50',
      type: 'circle',
      color: '#8cc9f0',
      url: 'cases.html#hualien',
    },
    1: {
      lat: '22.591398599723785',
      lng: '120.28089875494193',
      name: '小虎鯨集體擱淺案件',
      description: '旗津海岸',
      type: 'circle',
      size: '50',
      color: '#efa8b0',
      url: 'cases.html#kaohsiung',
    },
    2: {
      lat: '24.987628670370224',
      lng: '121.01440481899346',
      name: '桃園擱淺故事－鏡頭下的瓶鼻海豚',
      description: '永安漁港',
      color: '#a89cc8',
      type: 'circle',
      size: '50',
      url: 'cases.html#taoyuan',
    },
  },
  labels: {},
  legend: {
    entries: [],
  },
  regions: {},
}
