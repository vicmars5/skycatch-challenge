'use strict';

// Program constants
const START_COORDINATES = [33.4501001, -101.9107704];
const START_ZOOM = 4;
const MAX_ZOOM = 18;

const map = L.map('map').setView(START_COORDINATES, START_ZOOM); // setup the map

L.tileLayer('https://{s}.tiles.mapbox.com/v4/{user}.{mapId}/{z}/{x}/{y}.png?access_token={token}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: MAX_ZOOM,
    mapId: 'i81oam9h',
    user: 'skycatch-dev',
    token: 'pk.eyJ1Ijoic2t5Y2F0Y2gtZGV2IiwiYSI6Ik1PVjVYNEkifQ.j2X9OOZDz7ABqUvHk4kesw'
}).addTo(map);

var markers = L.markerClusterGroup();

places.forEach((place) => {
  markers.addLayer(L.marker([place.location.lat, place.location.lng]) // Position
      .bindPopup(`<b>${place.id}</b> ${place.name}.`)); // Popup info
});

map.addLayer(markers);
