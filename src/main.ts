import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import primeVueOptions from "@/configs/primevue"
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'
import ConfirmationService from 'primevue/confirmationservice'

const app = createApp(App)

app.use(PrimeVue, primeVueOptions)
    .use(ToastService)
    .use(ConfirmationService)
    .directive('tooltip', Tooltip)


app.use(createPinia())
app.use(router)

app.mount('#app')
