<template>
    <div>
        <p>El valor del contador: {{contador}} </p>
        <button @click="Sumar">sumar</button>
        <button @click="Restar">restar</button>

        
    </div>
</template>

<script>
import {mapState} from  'vuex'
  //  import {store} from "../store/store"

    export default {
        name: 'contador',
        computed: mapState(['contador']),
       // store,

        methods:{
            Sumar(){
                this.$store.commit('sumar')
            },
            Restar(){
                this.$store.commit('restar')
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>