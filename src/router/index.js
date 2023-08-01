import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('@/page/index'),
        children: [
            {
                path: 'index',
                component: () => import('@/page/index/children/homepage'),
            },
            {
                path: 'product',
                component: () => import('@/page/index/children/product'),
                children: [
                    {
                        path: 'list',
                        component: () => import('@/page/index/children/product/list'),
                    },
                    {
                        path: 'category',
                        component: () => import('@/page/index/children/product/category'),
                    }
                ]
            },
            {
                path: 'order',
                component: () => import('@/page/index/children/order'),
                children: [
                    {
                        path: 'list',
                        component: () => import('@/page/index/children/order/list'),
                    },
                    {
                        path: 'collect',
                        component: () => import('@/page/index/children/order/collect'),
                    }
                ]
            },
            {
                path: 'advert',
                component: () => import('@/page/index/children/advert'),
                children: [
                    {
                        path: 'list',
                        component: () => import('@/page/index/children/advert/list'),
                    },
                ]
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/page/login')
    }
]

const router = new VueRouter({
    routes,
});
export default router;;