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
        path: '/category',
        component: Category,
        name: 'category',
    },
    {
        path: '/shopCar',
        component: ShopCar,
        name: 'shopCar',
        meta: {
            isLogin: false
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
    if(to.meta.isLogin) {
        // 如果是要去需要登录权限的页面，则跳转到登录页面
        return next('/login')
    }
    next();
});


export default router
