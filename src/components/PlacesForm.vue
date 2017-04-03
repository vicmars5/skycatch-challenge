<template lang="html">
  <div class="">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" pattern="^[a-zA-Z0-9\s]{4,20}$" type="text" v-model="name">
      <label class="mdl-textfield__label" for="sample3">Name</label>
    </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="text" pattern="(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,10})?))$" v-model="lat">
      <label class="mdl-textfield__label">Latitud</label>
    </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="text" pattern="^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,10})?))$" v-model="lng">
      <label class="mdl-textfield__label">Longitud</label>
    </div>
    <div class="">
      <button class="mdl-button mdl-js-button mdl-button--primary" v-on:click="submit">
        Agregar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      lat: '',
      lng: ''
    }
  },
  computed: {
    place() {
      return this.$store.state.placesForm.place
    }
  },
  watch: {
    place(place) {
      if (place) {
        this.name = place.name
        this.lat = place.location.lat
        this.lng = place.location.lng
      } else {
        this.clear()
      }
    }
  },
  methods: {
    submit() {
      // Name Regex
      const nameRgx = /^[a-zA-Z0-9\s]{4,20}$/
      // Regex from https://goo.gl/wporIj
      // Latitude Regex
      const latRgx = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,10})?))$/
      // Longitude Regex
      const lngRgx = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,10})?))$/


      if(nameRgx.test(this.name) && latRgx.test(this.lat) && lngRgx.test(this.lng)) {
        let place
        if (this.place) {
          place = this.place
          place.name = this.name
          place.location.lat = this.lat
          place.location.lng = this.lng
          this.$store.commit('updatePlace', place)
        } else {
          place = {
            name: this.name,
            location: {
              lat: Number(this.lat),
              lng: Number(this.lng),
              zoom: 14
            }
          }
          this.$store.commit('addPlace', place)
          this.clear()
        }
        console.log('Places form befor set center');
        this.$store.commit('locationsMap_center', place.location)
        this.$store.commit('placesForm_setPlace', null)
      } else {
        alert('Invalid syntax')
      }
    },
    clear() {
      this.name = ''
      this.lat = ''
      this.lng = ''
    }
  }
}
</script>
