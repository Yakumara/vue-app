import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/Auth/login'
import Registration from '@/components/Auth/registration'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Главная',
      component: Home
    },
    {
      path: '/login',
      name: 'Войти',
      component: Login
    },
    {
      path: '/registration',
      name: 'Регистрация',
      component: Registration
    }
  ]
})
