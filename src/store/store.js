import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({ //vamos a exportas la constante STORE ya que es la fuente de datos 
    state: {
        contador: 0,
        //------------//
        nombre: 'Ernesto',
        edad: '28'

    },

    mutations: {
        sumar(state) {
            state.contador++
        },
        restar(state) {
            state.contador--
        }
    }

})



store.commit('sumar')
store.commit('restar')