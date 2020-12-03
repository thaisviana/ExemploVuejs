import Vue from 'vue';
import VueRouter from 'vue-router';
import ListaDeUsuarios from './components/ListaDeUsuarios'
import DetalharUsuario from './components/DetalharUsuario'
import Joke from './components/Joke'


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'lista',
            component: ListaDeUsuarios
        },
        {
            path: '/users/:id',
            name: 'detalharUsuario',
            component: DetalharUsuario
        },{
            path: '/joke',
            name: 'joke',
            component: Joke
        },
    ]
});