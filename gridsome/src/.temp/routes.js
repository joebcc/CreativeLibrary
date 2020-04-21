export default [
  {
    path: "/creative/hp-father-daughter/",
    component: () => import(/* webpackChunkName: "page--src--templates--creative-vue" */ "/Users/joe.oliveira/Desktop/experiments/A6Creative/src/templates/Creative.vue")
  },
  {
    path: "/creative/hp-saving-nature/",
    component: () => import(/* webpackChunkName: "page--src--templates--creative-vue" */ "/Users/joe.oliveira/Desktop/experiments/A6Creative/src/templates/Creative.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/joe.oliveira/Desktop/experiments/A6Creative/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/joe.oliveira/Desktop/experiments/A6Creative/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/joe.oliveira/Desktop/experiments/A6Creative/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/joe.oliveira/Desktop/experiments/A6Creative/node_modules/gridsome/app/pages/404.vue")
  }
]

