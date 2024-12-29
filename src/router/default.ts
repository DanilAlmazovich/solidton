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
            }
        ]
    }
]

export default routes