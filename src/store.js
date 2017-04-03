import Vue from 'vue'
import Vuex from 'vuex'

import localStorage from './localStorage'

Vue.use(Vuex)

export const store = new Vuex.Store({
  plugins: [localStorage],
  state: {
    places: [],
    placesTable: {
      page: 0
    },
    locationsMap: {
      center: null,
    },
    placesForm: {
      place: null
    }
  },
  mutations: {
    places(state, places) {
      state.places = places
    },
    addPlace(state, place) {
      let lastEl = state.places[state.places.length - 1]
      let id

      if(lastEl) id = lastEl.id + 1
      else id = 0

      state.places.push({
        id,
        name: place.name,
        location: place.location
      })
    },
    updatePlace(state, place) {
      const index = state.places.findIndex(el => el.id === place.id)
      state.places[index] = place
      console.log('Update ' + place.id);
    },
    placesForm_setPlace(state, place) {
      state.placesForm.place = place
    },
    placesTable_goNext(state, steps) {
      state.placesTable.page += steps
    },
    placesTable_goPrev(state, steps) {
      state.placesTable.page -= steps
    },
    locationsMap_center(state, location) {
      state.locationsMap.center = location
    }
  }
})
