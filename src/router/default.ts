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
                path: 'presale',
                name: 'presale',
                component: () => import('@/views/Presale.vue')
            },
            {
                path: 'bridge',
                name: 'bridge',
                component: () => import('@/views/Bridge.vue')
            },
            {
                path: 'dex',
                name: 'dex',
                component: () => import('@/views/Dex.vue')
            },
            {
                path: 'solid-ramp',
                name: 'solid-ramp',
                component: () => import('@/views/SolidRamp.vue')
            },
            {
                path: 'solid-scan',
                name: 'solid-scan',
                component: () => import('@/views/SolidScan.vue')
            },
            {
                path: 'solid-trust',
                name: 'solid-trust',
                component: () => import('@/views/SolidTrust.vue')
            },
            {
                path: 'solidton-wallet',
                name: 'solidton-wallet',
                component: () => import('@/views/SolidtonWallet.vue')
            },
            {
                path: 'example',
                name: 'example',
                component: () => import('@/views/Example.vue')
            },
            {
                path: 'buy',
                name: 'buy',
                component: () => import('@/views/Buy.vue')
            },
            {
                path: 'team',
                name: 'team',
                component: () => import('@/views/Team.vue')
            },
        ]
    }
]

export default routes