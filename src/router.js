import Vue from 'vue';
import VueRouter from 'vue-router';
import Todos from './components/Todos'
import Users from './components/Users'
import Photos from './components/Photos'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'ok',
            component: Todos
        },{
            path: '/users',
            name: 'users',
            component: Users
        },{
            path: '/photos',
            name: 'photos',
            component: Photos
        },
      
    ]
});