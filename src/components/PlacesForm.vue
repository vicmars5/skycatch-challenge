<template lang="html">
  <div class="">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" pattern="^[a-zA-Z0-9]{4,20}$" type="text" v-model="name">
      <label class="mdl-textfield__label" for="sample3">Name</label>
    </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="text" pattern="(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$" v-model="lat">
      <label class="mdl-textfield__label">Latitud</label>
    </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="text" pattern="^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$" v-model="lng">
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
  methods: {
    submit() {
      // Name Regex
      const nameRgx = /^[a-zA-Z0-9]{4,20}$/
      // Regex from https://goo.gl/wporIj
      // Latitude Regex
      const latRgx = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/
      // Longitude Regex
      const lngRgx = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/

      if(nameRgx.test(this.name) && latRgx.test(this.lat) && lngRgx.test(this.lng)) {
        this.$store.commit('addPlace', {
          name: this.name,
          lat: Number(this.lat),
          lng: Number(this.lng)
        })
        alert('Committed')
      } else {
        alert('Invalid syntax')
      }
    }
  }
}
</script>
