import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    { path: '/fristPage',
      component: () => import('./views/fristPage.vue'),
      children: [
        { path: 'nowPlaying', component: () => import('./components/nowPlaying.vue') },
        { path: 'upComing', component: () => import('./components/upcoming.vue') },
        {path: '', redirect: '/fristPage/nowPlaying'}
      ]
    },
    {path: '/movie', component: () => import('./views/movie.vue') },
    {path: '/myPage', component: () => import('./views/myPage.vue') },
    {path: '/fristPage/:id', name: 'detail', component: () => import('./components/detail.vue') }

  ] })
