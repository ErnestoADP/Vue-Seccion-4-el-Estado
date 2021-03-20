<template>
    <div>
        <p>El valor del contador: {{this.$store.state.contador}} </p>
        <button @click="Sumar">sumar</button>
        <button @click="Restar">restar</button>

        
    </div>
</template>

<script>
    import {store} from "../store/store"

    export default {
        name:'contador',
        store,

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