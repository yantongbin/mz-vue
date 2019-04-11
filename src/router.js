import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        { path: '/fristPage' , component: () => import('./views/fristPage.vue') },
        { path: '/movie', component : () => import('./views/movie.vue')},
        { path: '/myPage', component: () => import('./views/myPage.vue')}
 ] })