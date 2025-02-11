import { createRouter, createWebHistory } from 'vue-router'
import loginRoutes from '@/router/modules/login.routes'
import guideRoutes from '@/router/modules/guide.routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/guide',
    },
    loginRoutes,
    guideRoutes,
  ],
})

// beforeEach
router.beforeEach((to, from, next) => {
  if (to.meta.onlyLocal && import.meta.env.VITE_ENV !== 'local') {
    next('/404')
    return
  }

  next()
})

export default router
