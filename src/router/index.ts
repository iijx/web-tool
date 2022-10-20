import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import DefaultLayout from "@/layouts/default-layout.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "/",
        component: DefaultLayout,
        redirect: "/index",
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import('@/views/index/index.vue'),
            }
        ]
    },
]


export default createRouter({
    history: createWebHashHistory(),
    routes: routes as RouteRecordRaw[],
})