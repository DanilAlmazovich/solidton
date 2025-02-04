import {createRouter, createWebHistory} from 'vue-router'
import defaultRoutes from '@/router/default'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...defaultRoutes,
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0, behavior: 'smooth'}
        }
    }
})

export default router
