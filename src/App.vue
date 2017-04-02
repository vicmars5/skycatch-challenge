<template>
  <div id="app" class="mdl-layout">
    <div class="mdl-layout__content">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--6-col">

        </div>
        <div class="mdl-cell mdl-cell--6-col">
          <locations-map></locations-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocationsMap from './components/LocationsMap.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    LocationsMap
  }
}
</script>

<style lang="scss">
@import "../node_modules/material-design-lite/material.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
