<template>
    <div>
        <h1>Actions con Vuex</h1>
        <p>Las Mutaciones las emplearemos para acciones simples de modificacion del estado</p>
        <p>Las Actiones las emplearemos para cuando tengamos que realizar modificacciones asyncronas</p>

        <ul>
            <li v-for="user in userx" v-bind:key="user.id">
              <p>nombre: {{user.name}}</p>   
             <p>nombre de usuario: {{user.username}}</p> 
            </li>
        </ul>

    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'


    export default {
        name: 'Home',
        computed: {
            ...mapState(['userx'])
        },
        methods:{
            ...mapActions(['getusuarios'])
        },

        mounted(){
            this.getusuarios()
        },

    }
</script>

<style lang="scss" scoped>

</style>