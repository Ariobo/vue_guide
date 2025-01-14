import UserLoginPage from '@/views/login/UserLogin.vue'

export default {
  path: '/login',
  children: [
    {
      path: 'UserLogin',
      name: 'UserLogin',
      component: UserLoginPage,
    },
  ],
}
