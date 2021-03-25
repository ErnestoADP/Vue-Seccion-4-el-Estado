<template>
  <div id="app">
      <h1>ejemplo de vuex basico</h1>

    <contador></contador>
   <leerStore></leerStore>

   <hr>
   <hr>
   <hr>
   <hr>
   <hr>

  <h1>clase mapState</h1>

  <p>{{this.$store.state.nombre}}</p>

  <h2>otra forma de llamarlo</h2>
  
  <p>{{nombre}}</p>

  <p>{{edad}}</p>


  <hr>
  <hr>
  <hr>
  <hr>
  <hr>

  <h1>ejemplo getters vuex</h1>

  <usuarios></usuarios>


  <hr>
  <hr>
  <hr>
  <hr>
  <hr>

  </div>
</template>

<script>
import {mapState} from 'vuex'

import Contador from './components/contador'
import LeerStore from './components/leerStore'
import Usuarios from './components/Usuarios'




export default {
  name: 'App',
  components: {
    Contador,
    LeerStore,
    Usuarios,
    
  },
 /* 
  aqui encontramos una forma de llamarlo pero no es la ams recomendada 
  ---------------------------------------------------------------------------------------------------------------
 computed:{
    nombre(){
      return this.$store.state.nombre
    }

  },
 ---------------------------------------------------------------------------------------------------------------- 
  /*computed: mapState({
     /*esta es otra forma pero aun podemos llamarlo en menos lineas asi evitamos codigo redundante
     ------------------------------------------------------------------------------------------------------------
    nombre: function (state) {
      return state.nombre
    },
    edad: function (state) {
      return state.edad
    },

 esta es otroa forma pero aun podemos hacerlo mejor
 ----------------------------------------------------------------------------------------------------------------
    nombre: state => state.nombre,
    edad: state => state.edad,
  }),*/

    /**esta es la forma mas indicada */
 computed:mapState(['nombre','edad']),
 



  }
  








</script>

<style>

</style>
