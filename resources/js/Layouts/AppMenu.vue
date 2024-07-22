<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
{
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-chart-bar', to: '/dashboard' }
        ]
    },
    {
        label: 'Data Cleaning & Preparation',
        items: [{ label: 'Predictive Analytics', icon: 'pi pi-fw pi-chart-line', to: '/' },
                { label: 'Impact Assessment', icon: 'pi pi-fw pi-database', to: '/table' },
                { label: 'Interactive Dashboards', icon: 'pi pi-fw pi-chart-pie', to: '/media' }
        ]
    },
    {
        label: 'Communication & Engagement',
        items: [{ label: 'Automated Email Response', icon: 'pi pi-fw pi-envelope', to: '/' },
                { label: 'Sentiment Analysis', icon: 'pi pi-fw pi-comments', to: '/table' },
                { label: 'Language Translation', icon: 'pi pi-fw pi-globe', to: '/media' },
                { label: 'Chatbots', icon: 'pi pi-fw pi-android', to: '/media' }
        ]
    },
    {
        label: 'Resource Management',
        items: [{ label: 'Volunteer & Staff Management', icon: 'pi pi-fw pi-users', to: '/' },
                { label: 'Supply Chain Optimization', icon: 'pi pi-fw pi-sitemap', to: '/table' },
                { label: 'Donor Management Systems', icon: 'pi pi-fw pi-id-card', to: '/media' }
        ]
    },
    {
        label: 'Fundraising',
        items: [{ label: 'Grant Writing Assistance', icon: 'pi pi-fw pi-pencil', to: '/' },
                { label: 'Donation Prediction', icon: 'pi pi-fw pi-chart-bar', to: '/table' },
                { label: 'Campaign Optimization', icon: 'pi pi-fw pi-briefcase', to: '/media' }
        ]
    },
    {
        label: 'Field Operations',
        items: [{ label: 'Crisis Response', icon: 'pi pi-fw pi-shield', to: '/' },
                { label: 'Geospatial Analysis', icon: 'pi pi-fw pi-map', to: '/table' },
                { label: 'Mobile Data Collection', icon: 'pi pi-fw pi-mobile', to: '/media' }
        ]
    },
    {
        label: 'Support & Assistance',
        items: [{ label: 'Help Center', icon: 'pi pi-fw pi-info-circle', to: '/' },
                { label: 'Tutorials & Guides', icon: 'pi pi-fw pi-book', to: '/table' },
                { label: 'Technical Support', icon: 'pi pi-fw pi-cog', to: '/media' }
        ]
    },
    {
        label: 'Settings',
        items: [{ label: 'System Setting', icon: 'pi pi-fw pi-cog', to: '/' },
                { label: 'Membership', icon: 'pi pi-fw pi-id-card', to: '/table' },
                { label: 'Bills', icon: 'pi pi-fw pi-wallet', to: '/media' }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
