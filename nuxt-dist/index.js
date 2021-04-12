import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_cookieuniversalnuxt_81ad87d0 from 'nuxt_plugin_cookieuniversalnuxt_81ad87d0' // Source: ./cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_workbox_2b0cd4e8 from 'nuxt_plugin_workbox_2b0cd4e8' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_0cda909f from 'nuxt_plugin_metaplugin_0cda909f' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_11823613 from 'nuxt_plugin_iconplugin_11823613' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_24567c70 from 'nuxt_plugin_axios_24567c70' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_locomotiveScroll_749f05df from 'nuxt_plugin_locomotiveScroll_749f05df' // Source: ../plugins/locomotiveScroll.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Développeur Web freelance Bordeaux - Création de sites internet","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Développeur web freelance à Bordeaux et créateur de sites internet, refonte, intégration, référencement et stratégie digitale"},{"name":"keywords","content":"site Web, site Internet, Développeur web freelance bordeaux, Développeur web freelance bègles, création de sites internet, refonte de sites internet, intégration, développement web, html, css, javascript, Bordeaux, Bègles, référencement bordeaux, référencement bègles."},{"hid":"og:title","property":"og:title","content":"Développeur Web freelance - Création de sites internet"},{"hid":"og:description","property":"og:description","content":"Développeur web freelance et créateur de sites internet, refonte, intégration, référencement et stratégie digitale"},{"hid":"og:image","property":"og:image","content":"~assets\u002Fimg\u002Fpng\u002Fog_image.jpg","href":"~assets\u002Fimg\u002Fpng\u002Fog_image.jpg"},{"hid":"og:image:secure_url","property":"og:image:secure_url","content":"~assets\u002Fimg\u002Fpng\u002Fog_image.jpg","href":"~assets\u002Fimg\u002Fpng\u002Fog_image.jpg"},{"hid":"charset","charset":"utf-8"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"rouxnicolas"},{"hid":"author","name":"author","content":"Nco9r"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"rouxnicolas"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Assistant:wght@300;400;500;700;800&family=Playfair+Display:wght@900&display=swap"},{"hid":"shortcut-icon","rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.5f6a36.png"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.5f6a36.png","sizes":"512x512"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.0b46e703.json","hid":"manifest"}],"style":[],"script":[],"htmlAttrs":{"lang":"en"}},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_cookieuniversalnuxt_81ad87d0 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_81ad87d0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_2b0cd4e8 === 'function') {
    await nuxt_plugin_workbox_2b0cd4e8(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_0cda909f === 'function') {
    await nuxt_plugin_metaplugin_0cda909f(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_11823613 === 'function') {
    await nuxt_plugin_iconplugin_11823613(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_24567c70 === 'function') {
    await nuxt_plugin_axios_24567c70(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_locomotiveScroll_749f05df === 'function') {
    await nuxt_plugin_locomotiveScroll_749f05df(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
