import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _41c1f13d = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _90147d4e = () => interopDefault(import('../pages/mentions-legales/index.vue' /* webpackChunkName: "pages/mentions-legales/index" */))
const _04cbe47b = () => interopDefault(import('../pages/references.vue' /* webpackChunkName: "pages/references" */))
const _28932a2f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
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

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
