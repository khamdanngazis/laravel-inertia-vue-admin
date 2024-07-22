<script setup>
import { useLayout } from '@/primevue/layout/composables/layout';
import { ref, computed } from 'vue';
import { useForm , Link} from '@inertiajs/vue3';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import InputError from '@/Components/InputError.vue';


const { layoutConfig } = useLayout();
const email = ref('');
const password = ref('');
const checked = ref(false);

const logoUrl = computed(() => {
    return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
             <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <div class="text-900 text-3xl font-medium mb-3">Welcome!</div>
                        <span class="text-600 font-medium">Sign in to continue</span>
                    </div>

                    <div>
                        <form @submit.prevent="submit">
                            <label for="email" class="block text-900 text-xl font-medium mb-2">Email</label>
                            <InputText id="email"
                                v-model="form.email"
                                type="email"
                                required
                                autofocus
                                autocomplete="username" 
                                placeholder="Email address" 
                                class="w-full md:w-30rem mb-5" 
                                style="padding: 1rem" 
                             />
                            <InputError class="mt-2" :message="form.errors.email" />
                            <label for="password" class="block text-900 font-medium text-xl mb-2">Password</label>
                            <Password 
                                id="password"
                                v-model="form.password"
                                required
                                :toggleMask="true" 
                                class="w-full mb-3" 
                                inputClass="w-full"
                                :inputStyle="{ padding: '1rem' }">
                            </Password>
                            <InputError class="mt-2" :message="form.errors.password" />
                            <div class="flex align-items-center justify-content-between mb-5 gap-5">
                                <div class="flex align-items-center">
                                    <Checkbox v-model="checked" id="rememberme1" binary class="mr-2"></Checkbox>
                                    <label for="rememberme1">Remember me</label>
                                </div>
                                <Link :href="route('password.request')" class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">Forgot password?</Link>
                            </div>
                            <Button type="submit" label="Sign In" class="w-full p-3 text-xl primary" :disabled="form.processing"></Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>
