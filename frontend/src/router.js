import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "about" */ './components/MainLayout.vue'),
      meta: {
        auth: true
      },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
        },
        {
          path: 'user',
          component: () => import(/* webpackChunkName: "about" */ './components/user/Layout.vue'),
          meta: {
            auth: true
          },
          children: [
            {
              path: '',
              name: 'user',
              component: () => import(/* webpackChunkName: "about" */ './views/user/Index.vue'),
              meta: {
                title: 'Usuarios'
              }
            },
            {
              path: 'create',
              name: 'create-user',
              component: () => import(/* webpackChunkName: "about" */ './views/user/Create.vue'),
              meta: {
                title: 'Crear usuarios'
              }
            },
            {
              path: ':id',
              name: 'show-user',
              props: true,
              component: () => import(/* webpackChunkName: "about" */ './views/user/Show.vue'),
              meta: {
                title: 'Mostrar usuarios'
              }
            },
            {
              path: ':id/edit',
              name: 'edit-user',
              props: true,
              component: () => import(/* webpackChunkName: "about" */ './views/user/Edit.vue'),
              meta: {
                title: 'Editar usuarios'
              }
            },
          ]
        },
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/auth/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/auth/Login.vue')
    }
  ]
})
