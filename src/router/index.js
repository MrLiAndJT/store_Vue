import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../views/home/home.vue';
const Category = () => import('views/category/category.vue');
const ShopCar = () => import('views/shopCar/shopCar.vue');
const Profile = () => import('views/profile/profile.vue');
const ShopIntro = () => import('views/shopIntro/shopIntro.vue');
const Login = () => import('components/login/login.vue');
const register = () => import('components/register/register.vue');
const user = () => import('views/user/user.vue');
const setting = () => import('views/profile/setting/setting.vue');
const order = () => import('views/profile/order/order.vue');
const search = () => import('components/search/search.vue');
const address = () => import('views/profile/address/address.vue');

const routes = [
	{
		path: '/',
		redirect: '/index',
	},
    {
    	path: '/index',
    	component: Home,
    	name: 'home'
    },
    {
        path: '/search',
        component: search,
        name: 'search'
    },
    {
        path: '/category',
        component: Category,
        name: 'category',
    },
    {
        path: '/shopCar',
        component: ShopCar,
        name: 'shopCar',
        meta: {
            isLogin: true
        }
    },
    {
        path: '/profile',
        component: Profile,
        name: 'profile'
    },
    {
        path: '/shopIntro',
        component: ShopIntro,
        name: 'shopIntro'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/register',
        component: register,
        name: 'register'
    },
    {
        path: '/user',
        component: user,
        name: 'user',
    },
    {
        path: '/setting',
        component: setting,
        name: 'setting'
    },
    {
        path: '/order/:index',
        component: order,
        name: 'order',
        props: true
    },
    {
        path: '/address',
        component: address,
        name: 'address',
        meta: {
            isLogin: true
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    // to => 将要去哪个路由
    // from => 从哪个路由来的
    // next => 路由放行
    let token = window.localStorage.getItem('isLogin');     // 判断是否已经登录
    if(token == "false" && to.meta.isLogin) {
        // 如果是要去需要登录权限的页面，则跳转到登录页面
        return next('/login')
    }
    next();
});


export default router
