<template lang="html">
  <div class="places-table-container">
    <table class="table mdl-data-table mdl-js-data-table">
      <thead><tr>
        <th> Id </th>
        <th> Name </th>
      </tr></thead>
      <tbody>
        <tr v-for="place in places">
          <td> {{ place.id }} </td>
          <td v-on:click="centerPlace(place)"> {{ place.name }} </td>
        </tr>
      </tbody>
    </table>
    <div class="table-nav">
      <button v-if="isPrev" v-on:click="goPrev" type="button" class="mdl-button left">&lt;--</button>
      <button v-if="isNext" v-on:click="goNext" type="button" class="mdl-button right">--&gt;</button>
    </div>
  </div>
</template>

<script>
const pageLen = 5
export default {
  computed: {
    places() {
      const places = this.$store.state.places.slice()
      const page = this.$store.state.placesTable.page

      places.sort((a, b) => {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0
      })
      console.log(`page: ${page}, until: ${page + pageLen}`);
      return places.slice(page, page + pageLen)
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
      console.log(`Lat: ${place.location.lat}`);
    }
  }
}
</script>

<style lang="sass" scoped>
.places-table-container
  .table-nav
    width: 100%
    .left
      float: left
    .right
      float: right
</style>
