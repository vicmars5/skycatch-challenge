<template lang="html">
  <div id="map">
    <h1> Hello </h1>
  </div>
</template>

<script>
import L from 'leaflet'

export default {
  data() {
    return {
      map: null,
    }
  },
  mounted() {
    this.map = L.map('map').setView([51.505, -0.09], 13)

    L.tileLayer('https://{s}.tiles.mapbox.com/v4/{user}.{mapId}/{z}/{x}/{y}.png?access_token={token}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      mapId: 'i81oam9h',
      user: 'skycatch-dev',
      token: 'pk.eyJ1Ijoic2t5Y2F0Y2gtZGV2IiwiYSI6Ik1PVjVYNEkifQ.j2X9OOZDz7ABqUvHk4kesw'
    }).addTo(this.map)
  }
}
</script>

<style lang="sass">
@import "../../node_modules/leaflet/dist/leaflet.css"
#map
  width: 600px
  height: 400px
</style>
