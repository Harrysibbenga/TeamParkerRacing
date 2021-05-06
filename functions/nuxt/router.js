import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8ecf0130 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _e1ce19f2 = () => interopDefault(import('../pages/admin/championships.vue' /* webpackChunkName: "pages/admin/championships" */))
const _5cdcdba4 = () => interopDefault(import('../pages/admin/drivers.vue' /* webpackChunkName: "pages/admin/drivers" */))
const _9789f56a = () => interopDefault(import('../pages/admin/headline.vue' /* webpackChunkName: "pages/admin/headline" */))
const _57e1c26c = () => interopDefault(import('../pages/admin/posts.vue' /* webpackChunkName: "pages/admin/posts" */))
const _2d60ffbe = () => interopDefault(import('../pages/admin/posts/featured.vue' /* webpackChunkName: "pages/admin/posts/featured" */))
const _5d2cb1c6 = () => interopDefault(import('../pages/admin/posts/news.vue' /* webpackChunkName: "pages/admin/posts/news" */))
const _50d0ce82 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _6980eeca = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _15307e57 = () => interopDefault(import('../pages/championship/_slug.vue' /* webpackChunkName: "pages/championship/_slug" */))
const _19a1056c = () => interopDefault(import('../pages/feature/_slug.vue' /* webpackChunkName: "pages/feature/_slug" */))
const _a161f3dc = () => interopDefault(import('../pages/post/_slug.vue' /* webpackChunkName: "pages/post/_slug" */))
const _f1ada92a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _8ecf0130,
    name: "admin",
    children: [{
      path: "championships",
      component: _e1ce19f2,
      name: "admin-championships"
    }, {
      path: "drivers",
      component: _5cdcdba4,
      name: "admin-drivers"
    }, {
      path: "headline",
      component: _9789f56a,
      name: "admin-headline"
    }, {
      path: "posts",
      component: _57e1c26c,
      name: "admin-posts",
      children: [{
        path: "featured",
        component: _2d60ffbe,
        name: "admin-posts-featured"
      }, {
        path: "news",
        component: _5d2cb1c6,
        name: "admin-posts-news"
      }]
    }]
  }, {
    path: "/login",
    component: _50d0ce82,
    name: "login"
  }, {
    path: "/news",
    component: _6980eeca,
    name: "news"
  }, {
    path: "/championship/:slug?",
    component: _15307e57,
    name: "championship-slug"
  }, {
    path: "/feature/:slug?",
    component: _19a1056c,
    name: "feature-slug"
  }, {
    path: "/post/:slug?",
    component: _a161f3dc,
    name: "post-slug"
  }, {
    path: "/",
    component: _f1ada92a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
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
