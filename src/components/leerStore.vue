<template>
    <div>
            <p>
               el valor es: {{this.$store.state.contador}}
            </p>
    </div>
</template>

<script>
    import {store} from "../store/store";

    export default {
        name: 'leerStore',
        store
        
    }
</script>

<style lang="scss" scoped>

</style>