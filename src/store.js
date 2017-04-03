import Vue from 'vue'
import Vuex from 'vuex'

import places from './places'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    places,
    placesTable: {
      page: 0
    },
    locationsMap: {
      center: [],
    }
  },
  mutations: {
    addPlace(state, place) {
      let lastEl = state.places[state.places.length - 1]
      let id

      if(lastEl) id = lastEl.id + 1
      else id = 0

      state.places.push({
        id,
        name: place.name,
        location: {
          lat: place.lat,
          lng: place.lng
        }
      })
    },
    placesTable_goNext(state, steps) {
      state.placesTable.page += steps
    },
    placesTable_goPrev(state, steps) {
      state.placesTable.page -= steps
    }
  }
})
