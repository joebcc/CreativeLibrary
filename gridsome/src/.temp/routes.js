export default [
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/joe.oliveira/Sites/a6creative-craft.dev.cc/gridsome/node_modules/gridsome/app/pages/404.vue")
  },
  {
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--templates--creative-archive-vue" */ "/Users/joe.oliveira/Sites/a6creative-craft.dev.cc/gridsome/src/templates/CreativeArchive.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/joe.oliveira/Sites/a6creative-craft.dev.cc/gridsome/node_modules/gridsome/app/pages/404.vue")
  }
]

