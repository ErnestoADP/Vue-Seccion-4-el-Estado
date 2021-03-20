<template>
  <div id="app">
      <h1>ejemplo de vuex basico</h1>

    <contador></contador>
   <leerStore></leerStore>

  </div>
</template>

<script>
import Contador from './components/contador'
import LeerStore from './components/leerStore'



export default {
  name: 'App',
  components: {
    Contador,
    LeerStore,
    


  
  }
}







</script>

<style>

</style>
