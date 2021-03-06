import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({ //vamos a exportas la constante STORE ya que es la fuente de datos 
        state: {
            contador: 0,
            //------------//
            nombre: 'Ernesto',
            edad: '28',
            //------------------------//
            usuarios: [

                { nombre: 'Daniela', edad: 29, activo: false },
                { nombre: 'Helena', edad: 1, activo: false },
                { nombre: 'Angelica', edad: 25, activo: true },
                { nombre: 'Homero', edad: 27, activo: false },
                { nombre: 'Eduardo', edad: 55, activo: true }
            ],

            userx: null,

        },
        mutations: {
            sumar(state) { state.contador++ },

            restar(state) { state.contador-- },

            tenerusuarios(state) {
                axios.get('https://jsonplaceholder.typicode.com/users')
                    .then(r => { state.userx = r.data })
            }
        },

        actions: {
            getusuarios(context) {
                context.commit('tenerusuarios')
            }
        },





        getters: {
            listadoactivos: (state) => {
                return state.usuarios.filter(usuarios => usuarios.activo).length
            }
        },

    })
    //store.commit('sumar')
    //store.commit('restar')