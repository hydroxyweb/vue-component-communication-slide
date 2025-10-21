import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: '',
          component: () => import('../slides/00-Start.vue'),
          meta: {
              slide: true,
          }
      },
      {
          path: '/slide/1',
          component: () => import('../slides/01-Component-Model.vue'),
          meta: {
              slide: true,
          }
      },
      {
          path: '/slide/2',
          component: () => import('../slides/02-Parent-Child.vue'),
          meta: {
              slide: true,
          }
      },
      {
          path: '/slide/3',
          component: () => import('../slides/03-Emit.vue'),
          meta: {
              slide: true,
          }
      },
      {
          path: '/slide/4',
          component: () => import('../slides/04-Parent-Child-Two-way.vue'),
          meta: {
              slide: true,
          }
      },
      {
          path: '/slide/5',
          component: () => import('../slides/05-Slots.vue'),
          meta: {
              slide: true,
          }
      },
      {
          path: '/slide/6',
          component: () => import('../slides/06-Expose.vue'),
          meta: {
              slide: true,
          }
      },
      {
          path: '/slide/7',
          component: () => import('../slides/07-Attr.vue'),
          meta: {
              slide: true,
          }
      },
      {
          path: '/slide/8',
          component: () => import('../slides/08-Problems.vue'),
          meta: {
              slide: true,
          }
      },
      {
          path: '/slide/9',
          component: () => import('../slides/09-Store.vue'),
          meta: {
              slide: true,
          }
      },
      {
          path: '/slide/10',
          component: () => import('../slides/10-Provide-Inject.vue'),
          meta: {
              slide: true,
          }
      },
      {
          path: '/slide/11',
          component: () => import('../slides/11-Provide-Inject-Hardcore.vue'),
          meta: {
              slide: true,
          }
      },
      {
          path: '/slide/12',
          component: () => import('../slides/12-Summary.vue'),
          meta: {
              slide: true,
          }
      },
      {
          path: '/slide/13',
          component: () => import('../slides/13-QA.vue'),
          meta: {
              slide: true,
          }
      },
      {
          path: '/slide/14',
          component: () => import('../slides/14-Thank-You.vue'),
          meta: {
              slide: true,
          }
      },
  ],
})

export default router
