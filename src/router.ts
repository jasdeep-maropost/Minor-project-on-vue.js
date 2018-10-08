import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Auth from '@okta/okta-vue'
Vue.use(Auth, {
  issuer: '{issuer}',
  client_id: '{clientid}',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

Vue.use(Router);


let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/posts-manager',
      name: 'PostsManager',
      component: () => import(/* webpackChunkName: "posts-manager" */ './components/PostsManager.vue'),
      meta: {
        requiresAuth: true
      },
    }
  ],
});


router.beforeEach(Vue.prototype.$auth.authRedirectGuard())
export default router