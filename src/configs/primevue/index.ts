import Aura from '@primevue/themes/aura';
import Lara from '@primevue/themes/lara'
import Nora from '@primevue/themes/nora'
import Material from '@primevue/themes/material'

import ky from "./locales/ky.json";
import ru from "./locales/ru.json";
import {definePreset} from '@primevue/themes';
import type {PrimeVueConfiguration} from "primevue";

declare var window: any;

window.locales = {
    ky,
    ru,
};

const MyPreset = definePreset(Lara, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '#3164F7',
            600: '#4572f1',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        },

        colorScheme: {
            light: {
                primary: {
                    color: '{primary.500}',
                    inverseColor: '{primary.400 }',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.500}',
                },
                highlight: {
                    background: '{indigo.950}',
                    focusBackground: '{indigo.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            },
        }
    }
});

const primeVueOptions: PrimeVueConfiguration = {
    locale: window.locales[localStorage.getItem("locale") ?? "ky"],
    theme: {
        preset: MyPreset,
        options: {
            prefix: 'pv',
            darkModeSelector: '.dark',
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    },
}

export default primeVueOptions