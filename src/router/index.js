import Vue from 'vue';
import Router from 'vue-router';
import EditNote from '../components/EditNote';
import Notes from '../components/Notes';
Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/edit-notes',
            name: 'edit-note',
            component: EditNote
        },
        {
            path: '/',
            name: 'all',
            component: Notes
        }
    ]
    });