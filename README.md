# skycatch-challenge

Hice el proyecto a partir de la plantilla "webpack-simple" del generador de Vue. Utilice Vuex para el store de la aplicación y escribí un plugin para guardar este con LocalStorage.

El proyecto tiene tres componentes principales:
  - __PlacesTable__. Muestra la lista de lugares en una tabla paginada por grupos de 10.
  - __PlacesForm__. Formulario para modificar o agregar nuevos lugares al store.
  - __LocationsMap__. Componente que muestra y controla el mapa con los marcadores de los lugares.

Integrar Leaflet con Vue, fue un poco complicado, esto debido a que tiene un objeto propio que se encarga de administrar sus metodos. Dificultó mantener la reactividad del componente ya que tuve escribir metodos que se encargaran de modificarlo cuando el estado cambiara.

Objetivos cumplidos:
  - Mostrar una lista de sitios donde el usuario pudiera ver todos los sitios ordenados alfabeticamente.
  - La interfaz de usuario debe mostrar la latitud y longitud del sitio.
  - Centrar un sitio cuando su nombre se presionado en la lista.
  - Almacenar la lista de lugares
  - Añadir una interfaz en la que se pueda editar el nombre de un sitio, y guardar los cambios en LocalStorage.

Realizar este proyecto fue muy entretenido, e interesante. Durante su elaboración aprendí muchas cosas como hacer plugins para el store de Vuex, dibujar y gestionar mapas en el navegador.
Practique y reforcé mis conocimientos en Vue, especialmente en el patrón que utiliza Vuex (basado en Flux). Probé varias librerías para usar Vue con Leaflet. Aunque finalmente decidí no integrarlas me mostraron otra forma de solucionar el mismo problema.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
