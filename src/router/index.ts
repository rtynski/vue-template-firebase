import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import StartPage from '@/modules/startPage/StartPage.vue';

Vue.use(VueRouter);
const urls = {
  authSignIn: '/auth/sign-in',
  authSignUp: '/auth/sign-up',
  startPage: '/',
};

const locationsName = {
  authSignIn: 'AuthSignIn',
  authSignUp: 'AuthSignUp',
  startPage: 'StartPage',
};

const routes: Array<RouteConfig> = [
  {
    path: urls.startPage,
    name: locationsName.startPage,
    component: StartPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: urls.authSignIn,
    name: locationsName.authSignIn,
    component: () => import(/* webpackChunkName: "authSignIn" */ '@/modules/account/SignIn.vue'),
    meta: {
      h100: true,
      gray400: true,
    },
  },
  {
    path: urls.authSignUp,
    name: locationsName.authSignUp,
    component: () => import(/* webpackChunkName: "authSignUp" */ '@/modules/account/SignUp.vue'),
    meta: {
      h100: true,
      gray400: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export { router, locationsName, urls };
