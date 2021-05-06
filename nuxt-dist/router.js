import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _08db4f6a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _41c1f13d = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _90147d4e = () => interopDefault(import('../pages/mentions-legales/index.vue' /* webpackChunkName: "pages/mentions-legales/index" */))
const _04cbe47b = () => interopDefault(import('../pages/references.vue' /* webpackChunkName: "pages/references" */))
const _28932a2f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _08db4f6a,
    name: "about"
  }, {
    path: "/contact",
    component: _41c1f13d,
    name: "contact"
  }, {
    path: "/mentions-legales",
    component: _90147d4e,
    name: "mentions-legales"
  }, {
    path: "/references",
    component: _04cbe47b,
    name: "references"
  }, {
    path: "/",
    component: _28932a2f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
