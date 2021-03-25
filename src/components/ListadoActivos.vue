<template>
    <div>
        <p>
            Listado de personas activas: {{listadoactivos}}
        </p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

    export default {
        name:'ListadoActivos',
        computed:mapGetters(['listadoactivos'])
    }
</script>

<style lang="scss" scoped>

</style>