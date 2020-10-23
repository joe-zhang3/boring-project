import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/HelloWorld';

Vue.use(VueRouter);

export default new VueRouter({
 mode: 'history',
 routes: [
   { path: '/home', component: Home },
 ]
});
