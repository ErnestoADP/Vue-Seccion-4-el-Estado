import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

import { store } from "./store/store"



new Vue({
    /**TODOS LOS COMPONENTES HIJOS DE ESTA INTANCIA TIENEN ACCESO A ESTAS PROPIEDADES */
    store,
    render: h => h(App),
}).$mount('#app')