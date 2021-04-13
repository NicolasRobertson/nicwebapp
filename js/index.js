var mymap = L.map('mymapid').setView([45.586111,-95.913889], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9iZTE2MDYiLCJhIjoiY2tuNmtjZ3Z4MGVycjJubjEyczBhZzR0ZSJ9.J6yOKiB__265dNCxEQN-yQ', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1Ijoicm9iZTE2MDYiLCJhIjoiY2tuNmtjZ3Z4MGVycjJubjEyczBhZzR0ZSJ9.J6yOKiB__265dNCxEQN-yQ'
}).addTo(mymap);

var cities=[
  {"type":"Feature","properties":{"name":"Rochester MN","show_on_map":true,"popupContent":"Rochester MN"},"geometry":{"type":"Point","coordinates":[-92.4802,44.0121]}},
  {"type":"Feature","properties":{"name":"Worthington MN","show_on_map":true,"popupContent":"Worthington MN"},"geometry":{"type":"Point","coordinates":[-95.59604,43.623255]}},
  {"type":"Feature","properties":{"name":"Grand Marais MN","show_on_map":true,"popupContent":"Grand Marais MN"},"geometry":{"type":"Point","coordinates":[-90.3343,47.7504]}},
  {"type":"Feature","properties":{"name":"Fargo ND","show_on_map":true,"popupContent":"Fargo ND"},"geometry":{"type":"Point","coordinates":[-96.7898,46.8772]}},
  {"type":"Feature","properties":{"name":"Roseau MN","show_on_map":true,"popupContent":"Roseau MN"},"geometry":{"type":"Point","coordinates":[-95.7628,48.8461]}},
  {"type":"Feature","properties":{"name":"Saint Paul MN","show_on_map":true,"popupContent":"Saint Paul MN"},"geometry":{"type":"Point","coordinates":[-93.17459,44.913815]}},
  {"type":"Feature","properties":{"name":"Duluth MN","show_on_map":true,"popupContent":"Duluth MN"},"geometry":{"type":"Point","coordinates":[-92.1005,46.7867]}},
  {"type":"Feature","properties":{"name":"Bemidji MN","show_on_map":true,"popupContent":"Bemidji MN"},"geometry":{"type":"Point","coordinates":[-94.87105,47.504496]}},
  {"type":"Feature","properties":{"name":"Morris MN","show_on_map":true,"popupContent":"Morris MN"},"geometry":{"type":"Point","coordinates":[-95.9092,45.584124]}},
  {"type":"Feature","properties":{"name":"Saint Cloud MN","show_on_map":true,"popupContent":"Saint Cloud MN"},"geometry":{"type":"Point","coordinates":[-94.1632,45.5579]}},
  {"type":"Feature","properties":{"name":"Minneapolis MN","show_on_map":true,"popupContent":"Minneapolis MN"},"geometry":{"type":"Point","coordinates":[-93.2554,44.9782]}}
];

function circleConvert(feature,latlng){
  // Turns GeoJSON points into circle markers
  return new L.CircleMarker(latlng, {radius: 5, color: '#FF0000'})
}

function onEachFeature(feature, layer) {
    // produces popups// does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
    }
}

var layerProcessing = {
  pointToLayer: circleConvert,
  onEachFeature: onEachFeature
}

var cityLayer = L.geoJSON(cities,layerProcessing).addTo(mymap);

var path = [[44.0121,-92.4802],[43.623255,-95.59604],[47.7504,-90.3343],[46.8772,-96.7898],[48.8461,-95.7628],[44.913815,-93.17459],[46.7867,-92.1005],[47.504496,-94.87105],
[45.584124,-95.9092],[45.5579,-94.1632],[44.9782,-93.2554]];

var lineStyle={
  "dashArray":[
    10,
    20
  ],
  "weight":5,
  "color":"#0000FF",
}

var fillStyle={
  "weight":5,
  "color":"#FFFFFF"
}

L.polyline(path,fillStyle).addTo(mymap);
L.polyline(path,lineStyle).addTo(mymap);
