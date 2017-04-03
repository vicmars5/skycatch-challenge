<template lang="html">
  <div class="places-table-container">
    <div class="table-nav">
      <div class="">
        {{ page }} / {{ allPlacesLen }}
      </div>
      <button v-if="isPrev" v-on:click="goPrev" type="button" class="mdl-button left mdl-button--primary">
        <i class="material-icons">&#xE314;</i>
        {{ prev }}
      </button>
      <button v-if="isNext" v-on:click="goNext" type="button" class="mdl-button right mdl-button--primary">
        {{ next }}
        <i class="material-icons">&#xE5CC;</i>
      </button>
    </div>
    <table class="table mdl-data-table mdl-js-data-table">
      <thead><tr>
        <th> Id </th>
        <th> Name </th>
        <th> Options</th>
      </tr></thead>
      <tbody>
        <tr v-for="place in places">
          <td> {{ place.id }} </td>
          <td v-on:click="centerPlace(place)"> {{ place.name }} </td>
          <td>
            <i class="material-icons" v-on:click="editPlace(place)">&#xE3C9;</i>
            <i class="material-icons" v-on:click="centerPlace(place)">&#xE55F;</i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const pageLen = 10
export default {
  computed: {
    page() {
      return this.$store.state.placesTable.page
    },
    allPlacesLen() {
      return this.$store.state.places.length
    },
    places() {
      const places = this.$store.state.places.slice()
      const page = this.page

      places.sort((a, b) => {
        if (a.name.toUpperCase() > b.name.toUpperCase()) return 1
        if (a.name.toUpperCase() < b.name.toUpperCase()) return -1
        return 0
      })
      console.log('places table, places()');
      return places.slice(page, page + pageLen)
    },
    next() {
      return this.page + pageLen
    },
    prev() {
      return this.page - pageLen
    },
    isNext() {
      const places = this.$store.state.places
      const page = this.$store.state.placesTable.page

      return (page + pageLen) < places.length
    },
    isPrev() {
      const page = this.$store.state.placesTable.page
      return page != 0
    }
  },
  methods: {
    goNext() {
      this.$store.commit("placesTable_goNext", pageLen)
    },
    goPrev() {
      this.$store.commit("placesTable_goPrev",  pageLen)
    },
    centerPlace(place) {
      this.$store.commit('locationsMap_center', place.location)
    },
    editPlace(place) {
      this.$store.commit('placesForm_setPlace', place)
    }
  }
}
</script>

<style lang="sass" scoped>
.places-table-container
  .table td
    cursor: pointer
    .material-icons
      font-size: 20px
  .table-nav
    width: 100%
    .left
      float: left
    .right
      float: right
</style>
