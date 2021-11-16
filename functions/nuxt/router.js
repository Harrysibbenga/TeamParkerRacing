import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2cd6d4ae = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _2b1d95cd = () => interopDefault(import('../pages/admin/championships.vue' /* webpackChunkName: "pages/admin/championships" */))
const _12a6ea2c = () => interopDefault(import('../pages/admin/drivers.vue' /* webpackChunkName: "pages/admin/drivers" */))
const _54613ec5 = () => interopDefault(import('../pages/admin/headline.vue' /* webpackChunkName: "pages/admin/headline" */))
const _15670ec3 = () => interopDefault(import('../pages/admin/media.vue' /* webpackChunkName: "pages/admin/media" */))
const _22903706 = () => interopDefault(import('../pages/admin/media/index.vue' /* webpackChunkName: "pages/admin/media/index" */))
const _b3a97e58 = () => interopDefault(import('../pages/admin/media/videos.vue' /* webpackChunkName: "pages/admin/media/videos" */))
const _0e408b32 = () => interopDefault(import('../pages/admin/posts.vue' /* webpackChunkName: "pages/admin/posts" */))
const _644193ca = () => interopDefault(import('../pages/admin/posts/featured.vue' /* webpackChunkName: "pages/admin/posts/featured" */))
const _e6ab1680 = () => interopDefault(import('../pages/admin/posts/news.vue' /* webpackChunkName: "pages/admin/posts/news" */))
const _01934f0a = () => interopDefault(import('../pages/admin/tags.vue' /* webpackChunkName: "pages/admin/tags" */))
const _75e1b870 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2dc04e78 = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _5c496ad1 = () => interopDefault(import('../pages/championship/_slug.vue' /* webpackChunkName: "pages/championship/_slug" */))
const _e601a6e0 = () => interopDefault(import('../pages/feature/_slug.vue' /* webpackChunkName: "pages/feature/_slug" */))
const _959de6e8 = () => interopDefault(import('../pages/post/_slug.vue' /* webpackChunkName: "pages/post/_slug" */))
const _0930fe9e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2cd6d4ae,
    name: "admin",
    children: [{
      path: "championships",
      component: _2b1d95cd,
      name: "admin-championships"
    }, {
      path: "drivers",
      component: _12a6ea2c,
      name: "admin-drivers"
    }, {
      path: "headline",
      component: _54613ec5,
      name: "admin-headline"
    }, {
      path: "media",
      component: _15670ec3,
      children: [{
        path: "",
        component: _22903706,
        name: "admin-media"
      }, {
        path: "videos",
        component: _b3a97e58,
        name: "admin-media-videos"
      }]
    }, {
      path: "posts",
      component: _0e408b32,
      name: "admin-posts",
      children: [{
        path: "featured",
        component: _644193ca,
        name: "admin-posts-featured"
      }, {
        path: "news",
        component: _e6ab1680,
        name: "admin-posts-news"
      }]
    }, {
      path: "tags",
      component: _01934f0a,
      name: "admin-tags"
    }]
  }, {
    path: "/login",
    component: _75e1b870,
    name: "login"
  }, {
    path: "/news",
    component: _2dc04e78,
    name: "news"
  }, {
    path: "/championship/:slug?",
    component: _5c496ad1,
    name: "championship-slug"
  }, {
    path: "/feature/:slug?",
    component: _e601a6e0,
    name: "feature-slug"
  }, {
    path: "/post/:slug?",
    component: _959de6e8,
    name: "post-slug"
  }, {
    path: "/",
    component: _0930fe9e,
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
