<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { useLayout } from '@/primevue/layout/composables/layout';
import Button from 'primevue/button';
import Toast from 'primevue/toast'
import SplitButton from 'primevue/splitbutton'
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const changeLanguage = (lang) => {
    locale.value = lang;
};

const buttonLabel = ref('En');
const itemsLang = [
    {
        label: 'English',
        command: () => {
            buttonLabel.value = 'En'
            changeLanguage('en')
        }
    },
    {
        label: 'Arabic',
        command: () => {
            buttonLabel.value = 'عربي'
            changeLanguage('ar')
        }
    }
];

const selectedLanguage = ref(null);

const { layoutConfig } = useLayout();

const smoothScroll = (id) => {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
};

const logoUrl = computed(() => {
    return `layout/images/gazzedestek-logo-dark.jpg`;
});

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>

<template>
    <div class="surface-0 flex justify-content-center">
        <div id="home" class="landing-wrapper overflow-hidden">
            <div class="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static mb-3">
                <a class="flex align-items-center" href="#"> <img :src="logoUrl" alt="Sakai Logo" height="50" class="mr-0 lg:mr-2" /> </a>
                <a class="cursor-pointer block lg:hidden text-700 p-ripple" v-ripple v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <div class="align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2" style="top: 120px">
                    <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
                        <li>
                            <a @click="smoothScroll('#hero')" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>{{ $t('welcome_page.home') }}</span>
                            </a>
                        </li>
                        <li>
                            <a @click="smoothScroll('#features')" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>{{ $t('welcome_page.features') }}</span>
                            </a>
                        </li>
                        <li>
                            <a @click="smoothScroll('#highlights')" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>{{ $t('welcome_page.highlights') }}</span>
                            </a>
                        </li>
                        <li>
                            <a @click="smoothScroll('#pricing')" class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple" v-ripple>
                                <span>{{ $t('welcome_page.pricing') }}</span>
                            </a>
                        </li>
                        <li class="">
                            <SplitButton class="p-button-sm p-button-rounded text-xs px-0 py-0 ml-4" severity="contrast" :label="buttonLabel" icon="pi pi-globe" @click="save" :model="itemsLang" />
                        </li>
                    </ul>
                    
                    <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                        <Link
                             :href="route('login')"
                        >
                            <Button :label="$t('welcome_page.login')" class="p-button-text p-button-rounded border-none font-light line-height-2 text-primary-500"></Button>
                        </Link>
                        <Link
                            :href="route('register')"
                        >
                            <Button :label="$t('welcome_page.register')" class="p-button-rounded border-none ml-5 font-light text-white line-height-2"></Button>
                        </Link> 
                        
                        
                                           
                    </div>
                    <Toast />
                    
                </div>
            </div>

            <div
                id="hero"
                class="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
                style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%); clip-path: ellipse(150% 87% at 93% 13%)"
            >
                <div class="mx-4 md:mx-8 mt-0 md:mt-4">
                    <h1 class="text-6xl font-bold text-gray-900 line-height-2"><span class="font-light block">{{ $t('welcome_page.saas_platform') }}</span></h1>
                    <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">{{ $t('welcome_page.welcome_message') }}</p>
                    <Button :label="$t('welcome_page.get_started')" class="p-button-rounded text-xl border-none mt-5 font-normal text-white line-height-3 px-3"></Button>
                </div>
                <div class="flex justify-content-center md:justify-content-end">
                    <img src="/demo/images/landing/screen-1.png" alt="Hero Image" class="w-9 md:w-auto" />
                </div>
            </div>

            <div id="features" class="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
                <div class="grid justify-content-center">
                    <div class="col-12 text-center mt-8 mb-4">
                        <h2 class="text-900 font-normal mb-2">{{ $t('welcome_page.marvelous_features') }}</h2>
                        <span class="text-600 text-2xl">Placerat in egestas erat...</span>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-yellow-200 mb-3" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-users text-2xl text-yellow-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">{{ $t('welcome_page.easy_to_use') }}</h5>
                                <span class="text-600">Posuere morbi leo urna molestie.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-cyan-200 mb-3" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-palette text-2xl text-cyan-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">{{ $t('welcome_page.fresh_design') }}</h5>
                                <span class="text-600">Semper risus in hendrerit.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-indigo-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-map text-2xl text-indigo-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">{{ $t('welcome_page.well_documented') }}</h5>
                                <span class="text-600">Non arcu risus quis varius quam quisque.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(145, 210, 204, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-primarygray-200 mb-3" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-id-card text-2xl text-primarygray-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">{{ $t('welcome_page.responsive_layout') }}</h5>
                                <span class="text-600">Nulla malesuada pellentesque elit.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2), rgba(160, 210, 250, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-orange-200 mb-3" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-star text-2xl text-orange-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">{{ $t('welcome_page.clean_code') }}</h5>
                                <span class="text-600">Condimentum lacinia quis vel eros.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-pink-200 mb-3" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-moon text-2xl text-pink-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">{{ $t('welcome_page.dark_mode') }}</h5>
                                <span class="text-600">Convallis tellus id interdum velit laoreet.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-teal-200 mb-3" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-shopping-cart text-2xl text-teal-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">{{ $t('welcome_page.ready_to_use') }}</h5>
                                <span class="text-600">Mauris sit amet massa vitae.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-primary-200 mb-3" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-globe text-2xl text-primary-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">{{ $t('welcome_page.modern_practices') }}</h5>
                                <span class="text-600">Elementum nibh tellus molestie nunc non.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-purple-200 mb-3" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-eye text-2xl text-purple-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">{{ $t('welcome_page.privacy') }}</h5>
                                <span class="text-600">Neque egestas congue quisque.</span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="col-12 mt-8 mb-8 p-2 md:p-8"
                        style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
                    >
                        <div class="flex flex-column justify-content-center align-items-center text-center px-3 py-3 md:py-0">
                            <h3 class="text-gray-900 mb-2">{{ $t('welcome_page.testimonial_author') }}</h3>
                            <span class="text-gray-600 text-2xl">{{ $t('welcome_page.testimonial_company') }}</span>
                            <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-4" style="max-width: 800px">
                                {{ $t('welcome_page.testimonial') }}
                            </p>
                            <img src="/demo/images/landing/peak-logo.svg" class="mt-4" alt="Company logo" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="highlights" class="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">
                <div class="text-center">
                    <h2 class="text-900 font-normal mb-2">{{ $t('welcome_page.highlights_details.title') }}</h2>
                    <span class="text-600 text-2xl">{{ $t('welcome_page.highlights_details.subtitle') }}</span>
                </div>

                <div class="grid mt-8 pb-2 md:pb-8">
                    <div class="flex justify-content-center col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0" style="border-radius: 8px">
                        <img src="/demo/images/landing/mockup.svg" class="w-11" alt="mockup mobile" />
                    </div>

                    <div class="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right">
                        <div class="flex align-items-center justify-content-center bg-purple-200 align-self-center lg:align-self-end" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                            <i class="pi pi-fw pi-mobile text-5xl text-purple-700"></i>
                        </div>
                        <h2 class="line-height-1 text-900 text-4xl font-normal">{{ $t('welcome_page.highlights_details.section1.title') }}</h2>
                        <span class="text-700 text-2xl line-height-3 ml-0 md:ml-2" style="max-width: 650px"
                            >{{ $t('welcome_page.highlights_details.section1.description') }}</span
                        >
                    </div>
                </div>

                <div class="grid my-8 pt-2 md:pt-8">
                    <div class="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start">
                        <div class="flex align-items-center justify-content-center bg-yellow-200 align-self-center lg:align-self-start" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                            <i class="pi pi-fw pi-desktop text-5xl text-yellow-700"></i>
                        </div>
                        <h2 class="line-height-1 text-900 text-4xl font-normal">{{ $t('welcome_page.highlights_details.section2.title') }}</h2>
                        <span class="text-700 text-2xl line-height-3 mr-0 md:mr-2" style="max-width: 650px"
                            >{{ $t('welcome_page.highlights_details.section2.description') }}</span
                        >
                    </div>

                    <div class="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-yellow-100 p-0" style="border-radius: 8px">
                        <img src="/demo/images/landing/mockup-desktop.svg" class="w-11" alt="mockup" />
                    </div>
                </div>
            </div>

            <div id="pricing" class="py-4 px-4 lg:px-8 my-2 md:my-4">
                <div class="text-center">
                    <h2 class="text-900 font-normal mb-2">{{ $t('welcome_page.pricing_detail.title') }}</h2>
                    <span class="text-600 text-2xl">{{ $t('welcome_page.pricing_detail.subtitle') }}</span>
                </div>

                <div class="grid justify-content-between mt-8 md:mt-0">
                    <div class="col-12 lg:col-4 p-0 md:p-3">
                        <div class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all" style="border-radius: 10px">
                            <h3 class="text-900 text-center my-5">{{ $t('welcome_page.pricing_detail.plans.free.title') }}</h3>
                            <img src="/demo/images/landing/free.svg" class="w-10 h-10 mx-auto" alt="free" />
                            <div class="my-5 text-center">
                                <span class="text-5xl font-bold mr-2 text-900">{{ $t('welcome_page.pricing_detail.plans.free.price') }}</span>
                                <span class="text-600">{{ $t('welcome_page.pricing_detail.perMonth') }}</span>
                                <Button :label="$t('welcome_page.pricing_detail.plans.free.button')" class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-primary-500 text-white"></Button>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-5 list-none p-0 flex text-900 flex-column">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">{{ $t('welcome_page.pricing_detail.plans.free.feature1') }}</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">{{ $t('welcome_page.pricing_detail.plans.free.feature2') }}</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">{{ $t('welcome_page.pricing_detail.plans.free.feature3') }}</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">{{ $t('welcome_page.pricing_detail.plans.free.feature4') }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-12 lg:col-4 p-0 md:p-3">
                        <div class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all" style="border-radius: 10px">
                            <h3 class="text-900 text-center my-5">{{ $t('welcome_page.pricing_detail.plans.startup.title') }}</h3>
                            <img src="/demo/images/landing/startup.svg" class="w-10 h-10 mx-auto" alt="startup" />
                            <div class="my-5 text-center">
                                <span class="text-5xl font-bold mr-2 text-900">{{ $t('welcome_page.pricing_detail.plans.startup.price') }}</span>
                                <span class="text-600">{{ $t('welcome_page.pricing_detail.perMonth') }}</span>
                                <Button :label="$t('welcome_page.pricing_detail.plans.startup.button')" class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-primary-500 text-white"></Button>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-5 list-none p-0 flex text-900 flex-column">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">{{ $t('welcome_page.pricing_detail.plans.startup.feature1') }}</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">{{ $t('welcome_page.pricing_detail.plans.startup.feature2') }}</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">{{ $t('welcome_page.pricing_detail.plans.startup.feature3') }}</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">{{ $t('welcome_page.pricing_detail.plans.startup.feature4') }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-12 lg:col-4 p-0 md:p-3">
                        <div class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all" style="border-radius: 10px">
                            <h3 class="text-900 text-center my-5">{{ $t('welcome_page.pricing_detail.plans.enterprise.title') }}</h3>
                            <img src="/demo/images/landing/enterprise.svg" class="w-10 h-10 mx-auto" alt="enterprise" />
                            <div class="my-5 text-center">
                                <span class="text-5xl font-bold mr-2 text-900">{{ $t('welcome_page.pricing_detail.plans.enterprise.price') }}</span>
                                <span class="text-600">{{ $t('welcome_page.pricing_detail.perMonth') }}</span>
                                <Button :label="$t('welcome_page.pricing_detail.plans.enterprise.button')" class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-primary-500 text-white"></Button>
                            </div>
                            <Divider class="w-full bg-surface-200"></Divider>
                            <ul class="my-5 list-none p-0 flex text-900 flex-column">
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">{{ $t('welcome_page.pricing_detail.plans.enterprise.feature1') }}</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">{{ $t('welcome_page.pricing_detail.plans.enterprise.feature2') }}</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">{{ $t('welcome_page.pricing_detail.plans.enterprise.feature3') }}</span>
                                </li>
                                <li class="py-2">
                                    <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                    <span class="text-xl line-height-3">{{ $t('welcome_page.pricing_detail.plans.enterprise.feature4') }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-4 px-4 mx-0 mt-8 lg:mx-8">
                <div class="grid justify-content-between">
                    <div class="col-12 md:col-2" style="margin-top: -1.5rem">
                        <a @click="smoothScroll('#home')" class="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">
                            <img :src="logoUrl" alt="footer sections" class="mr-2" />
                        </a>
                    </div>

                    <div class="col-12 md:col-10 lg:col-7">
                        <div class="grid text-center md:text-left">
                            <div class="col-12 md:col-3">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">{{ $t('welcome_page.footer.company.title') }}</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">{{ $t('welcome_page.footer.company.item1') }}</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">{{ $t('welcome_page.footer.company.item2') }}</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">{{ $t('welcome_page.footer.company.item3') }}</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">{{ $t('welcome_page.footer.company.item4') }}</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">{{ $t('welcome_page.footer.company.item5') }}</a>
                            </div>

                            <div class="col-12 md:col-3">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">{{ $t('welcome_page.footer.resources.title') }}</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">{{ $t('welcome_page.footer.resources.item1') }}</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">{{ $t('welcome_page.footer.resources.item2') }}</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">{{ $t('welcome_page.footer.resources.item3') }}</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">{{ $t('welcome_page.footer.community.title') }}</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">{{ $t('welcome_page.footer.community.item1') }}</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">{{ $t('welcome_page.footer.community.item2') }}<img src="/demo/images/landing/new-badge.svg" class="ml-2" /></a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">{{ $t('welcome_page.footer.community.item3') }}</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">{{ $t('welcome_page.footer.community.item4') }}</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">{{ $t('welcome_page.footer.legal.title') }}</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">{{ $t('welcome_page.footer.legal.item1') }}</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">{{ $t('welcome_page.footer.legal.item2') }}</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">{{ $t('welcome_page.footer.legal.item3') }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
