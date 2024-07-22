import './bootstrap';
import '../css/app.css';
import PrimeVue from 'primevue/config';
import '@/primevue/assets/styles.scss';
import 'primevue/resources/themes/lara-light-teal/theme.css';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import DialogService from 'primevue/dialogservice';
import ConfirmationService from 'primevue/confirmationservice';
import BadgeDirective from 'primevue/badgedirective';
import Tooltip from 'primevue/tooltip';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import Dialog from 'primevue/dialog';


import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/index.esm';
import { createI18n } from 'vue-i18n';
// Import language JSON files
import en from './locales/en.json';
import ar from './locales/ar.json';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const i18n = createI18n({
    legacy: false,
    locale: 'en', // Set default locale
    fallbackLocale: 'en',
    messages: {
        en,
        ar
    }
});

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PrimeVue, { ripple: true })
            .use(ToastService)
            .use(DialogService)
            .use(ConfirmationService)
            .use(i18n)
             .directive('tooltip', Tooltip)
             .directive('badge', BadgeDirective)
             .directive('ripple', Ripple)
             .directive('styleclass', StyleClass)
             .component('Toast', Toast)
             .component('ConfirmDialog', ConfirmDialog)
             .component('ConfirmPopup', ConfirmPopup)
             .component('Dialog', Dialog)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
