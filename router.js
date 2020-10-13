import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b3c9ec8c = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _42326366 = () => interopDefault(import('..\\pages\\matchs.vue' /* webpackChunkName: "pages/matchs" */))
const _2e54b664 = () => interopDefault(import('..\\pages\\messages.vue' /* webpackChunkName: "pages/messages" */))
const _08075b00 = () => interopDefault(import('..\\pages\\notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _df8dc958 = () => interopDefault(import('..\\pages\\profil.vue' /* webpackChunkName: "pages/profil" */))
const _94e92c2c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _b3c9ec8c,
    name: "blog"
  }, {
    path: "/matchs",
    component: _42326366,
    name: "matchs"
  }, {
    path: "/messages",
    component: _2e54b664,
    name: "messages"
  }, {
    path: "/notifications",
    component: _08075b00,
    name: "notifications"
  }, {
    path: "/profil",
    component: _df8dc958,
    name: "profil"
  }, {
    path: "/",
    component: _94e92c2c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
