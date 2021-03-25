<template>
    <div>
        <listado-activos></listado-activos>
            <ul>
                <li v-bind:key="usuario"  v-for="usuario in usuarios">
                             {{usuario.nombre}}
                </li>           
            </ul>    
    </div>
</template>

<script>

import { mapState } from 'vuex'
import ListadoActivos from "./ListadoActivos"


    export default {
        
        name: 'Usuarios',
        computed: mapState(['usuarios']),
        components:{
            ListadoActivos
               
        }
    }
</script>

<style lang="scss" scoped>

</style>