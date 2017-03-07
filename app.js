var map = L.map('map').setView([33.4501001, -101.9107704], 4); // setup the map
L.tileLayer('https://{s}.tiles.mapbox.com/v4/{user}.{mapId}/{z}/{x}/{y}.png?access_token={token}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    mapId: 'i81oam9h',
    user: 'skycatch-dev',
    token: 'pk.eyJ1Ijoic2t5Y2F0Y2gtZGV2IiwiYSI6Ik1PVjVYNEkifQ.j2X9OOZDz7ABqUvHk4kesw'
}).addTo(map);

var markers = L.markerClusterGroup();

markers.addLayer(L.marker([37.4501001, -121.9107704]).bindPopup('Keira River'));
markers.addLayer(L.marker([28.3208337, -81.553712]).bindPopup('Willow Creek'));

map.addLayer(markers);
