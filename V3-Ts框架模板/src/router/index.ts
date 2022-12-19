import { createRouter, createWebHashHistory, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
// import Progress from './routerSetting/ProgressSetting';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/index/Index.vue'),
        meta: {
            title: '框架'
        },
    },
    {
        path: '/pointContent',
        name: 'PointContent',
        component: () => import('@/views/index/Index.vue')
    }

]

const router: Router = createRouter({
    history: createWebHashHistory(), 
    routes,
})

// Progress.init(router)


export default router
