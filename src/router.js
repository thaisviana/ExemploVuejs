import Vue from 'vue';
import VueRouter from 'vue-router';
import Todos from './components/Todos'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'ok',
            component: Todos
        },
      
    ]
});