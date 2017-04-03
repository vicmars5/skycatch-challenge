import defPlaces from './places' // Default places

export default store => {
  const str = localStorage.getItem('places');
  let places
  if (str) places = JSON.parse(str)
  else {
    places = defPlaces
    localStorage.setItem('places', JSON.stringify(places))
  }

  store.commit('places', places)

  store.subscribe((mutation, state) => {

    if (mutation.type === 'updatePlace' || mutation.type === 'addPlace') {
      localStorage.setItem('places', JSON.stringify(state.places))
    }
  })
}
