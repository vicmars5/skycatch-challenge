<template lang="html">
  <div id="map">
  </div>
</template>

<script>
import 'leaflet'
import 'leaflet.markercluster'

const L = window.L;
export default {
  data() {
    return {
      map: []
    }
  },
  computed: {
    places() {
      return this.$store.state.places
    }
  },
  watch: {
    places(val, oldVal) {
      alert(`New val: ${val.length}, old val: ${oldVal.length}`)
    }
  },
  mounted() {
    const map = L.map('map').setView([37.4501001, -121.9107704], 4)
    const places = this.places

    L.tileLayer('https://{s}.tiles.mapbox.com/v4/{user}.{mapId}/{z}/{x}/{y}.png?access_token={token}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      mapId: 'i81oam9h',
      user: 'skycatch-dev',
      token: 'pk.eyJ1Ijoic2t5Y2F0Y2gtZGV2IiwiYSI6Ik1PVjVYNEkifQ.j2X9OOZDz7ABqUvHk4kesw'
    }).addTo(map)

    const markers = L.markerClusterGroup();
    places.forEach( (place) => {
      let marker = L.marker([place.location.lat, place.location.lng])
          .on('click', (el) => map.setView(el.latlng))
          .bindPopup(`<b> ${place.id} </b> ${place.name}`)
      markers.addLayer(marker)
      // .on('click', (el) => alert(el.target))
    })

    map.addLayer(markers)
    this.map = map;

    const omarker = L.marker([37.379451, -121.878584])
    .bindPopup('<b>5</b> Jameson Harbor')
    markers.addLayer(omarker)
  }
}
</script>

<style lang="sass">
@import "../../node_modules/leaflet/dist/leaflet.css"
@import "../../node_modules/leaflet.markercluster/dist/MarkerCluster.css"


#map
  width: 100%
  height: 400px
  font-weight: bold
  font-size: 13px
  text-shadow: 0 0 2px #fff
  .leaflet-shadow-pane > .leaflet-marker-shadow
    display: none
</style>
