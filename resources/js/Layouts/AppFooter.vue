<script setup>
import { useLayout } from '@/primevue/layout/composables/layout';
import { computed } from 'vue';

const { layoutConfig } = useLayout();

var baseUrl = window.location.origin
const logoUrl = computed(() => {
    return baseUrl+`/layout/images/gazzedestek-logo-dark.jpg`;
});
</script>

<template>
    <div class="layout-footer">
        <img :src="logoUrl" alt="Logo" height="20" class="mr-2" />
    </div>
</template>
<style lang="scss" scoped></style>
