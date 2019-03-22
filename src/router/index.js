import Vue from 'vue'
import Router from 'vue-router'

import login from '../views/Login/login.vue'
import cadastro from '../views/Cadastro/cadastro.vue'
import mainPage from '../views/Main-Page/main-page.vue'
import forgotPassword from '../views/Forgot-Password/forgot-password.vue'
import loginGym from '../views/Login/login-gym.vue'
import cadastroGym from '../views/Cadastro/cadastro-gym.vue'

Vue.use(Router)

export const constantRouterMap = [
    { path: '/', name: 'login', component: login },
    { path: '/cadastro', name: 'cadastro', component: cadastro},
    { path: '/main-page', name: 'mainPage', component: mainPage},
    { path: '/forgot-password', name: 'forgot-password', component: forgotPassword},
    { path: '/login-gym', name: 'login-gym', component: loginGym},
    { path: '/cadastro-gym', name: 'cadastro-gym', component: cadastroGym},
]

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})