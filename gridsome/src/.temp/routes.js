export default [
  {
    path: "/creative/rockwell-728x90/",
    component: () => import(/* webpackChunkName: "page--src--templates--creative-single-vue" */ "/Users/joe.oliveira/Sites/a6creative-craft.dev.cc/gridsome/src/templates/CreativeSingle.vue")
  },
  {
    path: "/creative/rockwell-300x250/",
    component: () => import(/* webpackChunkName: "page--src--templates--creative-single-vue" */ "/Users/joe.oliveira/Sites/a6creative-craft.dev.cc/gridsome/src/templates/CreativeSingle.vue")
  },
  {
    path: "/creative/rockwell-160x600/",
    component: () => import(/* webpackChunkName: "page--src--templates--creative-single-vue" */ "/Users/joe.oliveira/Sites/a6creative-craft.dev.cc/gridsome/src/templates/CreativeSingle.vue")
  },
  {
    path: "/creative/hp-father-daughter/",
    component: () => import(/* webpackChunkName: "page--src--templates--creative-single-vue" */ "/Users/joe.oliveira/Sites/a6creative-craft.dev.cc/gridsome/src/templates/CreativeSingle.vue")
  },
  {
    path: "/creative/hp-saving-nature/",
    component: () => import(/* webpackChunkName: "page--src--templates--creative-single-vue" */ "/Users/joe.oliveira/Sites/a6creative-craft.dev.cc/gridsome/src/templates/CreativeSingle.vue")
  },
  {
    path: "/creative/ct-iw-300x250-1/",
    component: () => import(/* webpackChunkName: "page--src--templates--creative-single-vue" */ "/Users/joe.oliveira/Sites/a6creative-craft.dev.cc/gridsome/src/templates/CreativeSingle.vue")
  },
  {
    path: "/creative/ct-iw-750x200/",
    component: () => import(/* webpackChunkName: "page--src--templates--creative-single-vue" */ "/Users/joe.oliveira/Sites/a6creative-craft.dev.cc/gridsome/src/templates/CreativeSingle.vue")
  },
  {
    path: "/creative/ct-iw-300x250/",
    component: () => import(/* webpackChunkName: "page--src--templates--creative-single-vue" */ "/Users/joe.oliveira/Sites/a6creative-craft.dev.cc/gridsome/src/templates/CreativeSingle.vue")
  },
  {
    path: "/creative/",
    component: () => import(/* webpackChunkName: "page--src--templates--creative-archive-vue" */ "/Users/joe.oliveira/Sites/a6creative-craft.dev.cc/gridsome/src/templates/CreativeArchive.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/joe.oliveira/Sites/a6creative-craft.dev.cc/gridsome/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/joe.oliveira/Sites/a6creative-craft.dev.cc/gridsome/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/joe.oliveira/Sites/a6creative-craft.dev.cc/gridsome/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/joe.oliveira/Sites/a6creative-craft.dev.cc/gridsome/node_modules/gridsome/app/pages/404.vue")
  }
]

