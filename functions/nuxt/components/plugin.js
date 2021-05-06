import Vue from 'vue'

const components = {
  NavigationBurger: () => import('../../components/Navigation/Burger.vue' /* webpackChunkName: "components/navigation-burger" */).then(c => c.default || c),
  NavigationSideNav: () => import('../../components/Navigation/SideNav.vue' /* webpackChunkName: "components/navigation-side-nav" */).then(c => c.default || c),
  ModalsSubscribeModal: () => import('../../components/Modals/SubscribeModal.vue' /* webpackChunkName: "components/modals-subscribe-modal" */).then(c => c.default || c),
  HomeChampionship: () => import('../../components/Home/Championship.vue' /* webpackChunkName: "components/home-championship" */).then(c => c.default || c),
  HomeContact: () => import('../../components/Home/Contact.vue' /* webpackChunkName: "components/home-contact" */).then(c => c.default || c),
  HomeHeadline: () => import('../../components/Home/Headline.vue' /* webpackChunkName: "components/home-headline" */).then(c => c.default || c),
  HomeLatest: () => import('../../components/Home/Latest.vue' /* webpackChunkName: "components/home-latest" */).then(c => c.default || c),
  HomeMap: () => import('../../components/Home/Map.vue' /* webpackChunkName: "components/home-map" */).then(c => c.default || c),
  HomeSocial: () => import('../../components/Home/Social.vue' /* webpackChunkName: "components/home-social" */).then(c => c.default || c),
  HomeSubscribe: () => import('../../components/Home/Subscribe.vue' /* webpackChunkName: "components/home-subscribe" */).then(c => c.default || c),
  HomeUpcoming: () => import('../../components/Home/Upcoming.vue' /* webpackChunkName: "components/home-upcoming" */).then(c => c.default || c),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  FeaturedBody: () => import('../../components/Featured/Body.vue' /* webpackChunkName: "components/featured-body" */).then(c => c.default || c),
  FeaturedFooter: () => import('../../components/Featured/Footer.vue' /* webpackChunkName: "components/featured-footer" */).then(c => c.default || c),
  FeaturedHead: () => import('../../components/Featured/Head.vue' /* webpackChunkName: "components/featured-head" */).then(c => c.default || c),
  DashboardChampionship: () => import('../../components/Dashboard/Championship.vue' /* webpackChunkName: "components/dashboard-championship" */).then(c => c.default || c),
  DashboardDrivers: () => import('../../components/Dashboard/Drivers.vue' /* webpackChunkName: "components/dashboard-drivers" */).then(c => c.default || c),
  DashboardHeadline: () => import('../../components/Dashboard/Headline.vue' /* webpackChunkName: "components/dashboard-headline" */).then(c => c.default || c),
  DashboardWelcome: () => import('../../components/Dashboard/Welcome.vue' /* webpackChunkName: "components/dashboard-welcome" */).then(c => c.default || c),
  UICard: () => import('../../components/UI/Card.vue' /* webpackChunkName: "components/uicard" */).then(c => c.default || c),
  UIEditor: () => import('../../components/UI/Editor.vue' /* webpackChunkName: "components/uieditor" */).then(c => c.default || c),
  UILoader: () => import('../../components/UI/Loader.vue' /* webpackChunkName: "components/uiloader" */).then(c => c.default || c),
  UIMessage: () => import('../../components/UI/Message.vue' /* webpackChunkName: "components/uimessage" */).then(c => c.default || c),
  UITags: () => import('../../components/UI/Tags.vue' /* webpackChunkName: "components/uitags" */).then(c => c.default || c),
  UITimer: () => import('../../components/UI/Timer.vue' /* webpackChunkName: "components/uitimer" */).then(c => c.default || c),
  DashboardPostsFeatured: () => import('../../components/Dashboard/Posts/Featured.vue' /* webpackChunkName: "components/dashboard-posts-featured" */).then(c => c.default || c),
  DashboardPosts: () => import('../../components/Dashboard/Posts/Posts.vue' /* webpackChunkName: "components/dashboard-posts" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
