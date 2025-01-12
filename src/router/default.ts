import Default from "@/layout/Default.vue";

const routes = [
    {
        path: '/',
        name: 'DefaultLayout',
        component: Default,
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('@/views/Index.vue')
            },
            {
                path: '/presale',
                name: 'presale',
                component: () => import('@/views/Presale.vue')
            },
            {
                path: '/bridge',
                name: 'bridge',
                component: () => import('@/views/Bridge.vue')
            },
            {
                path: '/dex',
                name: 'dex',
                component: () => import('@/views/Dex.vue')
            }
        ]
    }
]

export default routes