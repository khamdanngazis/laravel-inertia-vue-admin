<script setup>
import { ref } from 'vue';
import { useForm , Link} from '@inertiajs/vue3';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import InputError from '@/Components/InputError.vue';


defineProps({
    status: String,
});

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});
const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
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
                        <span class="text-600 font-medium">Register to continue</span>
                    </div>
                    <div>
                        <form @submit.prevent="submit">
                            <label for="name" class="block text-900 text-xl font-medium mb-2">Name</label>
                            <InputText id="name"
                                v-model="form.name"
                                type="text"
                                required
                                autofocus
                                autocomplete="name" 
                                placeholder="Name" 
                                class="w-full mb-5" 
                                inputClass="w-full"
                                style="padding: 1rem" 
                             />
                            <InputError class="mt-2" :message="form.errors.name" />
                            <label for="email" class="block text-900 text-xl font-medium mb-2">Email</label>
                            <InputText id="email"
                                v-model="form.email"
                                type="email"
                                required
                                autofocus
                                autocomplete="username" 
                                placeholder="Email address" 
                                class="w-full mb-5" 
                                inputClass="w-full"
                                style="padding: 1rem" 
                             />
                            <InputError class="mt-2" :message="form.errors.email" />
                            <label for="password" class="block text-900 font-medium text-xl mb-2">Password</label>
                            <Password 
                                id="password"
                                v-model="form.password"
                                required
                                :toggleMask="true" 
                                class="w-full mb-5" 
                                inputClass="w-full"
                                :inputStyle="{ padding: '1rem' }">
                            </Password>
                            <InputError class="mt-2" :message="form.errors.password" />
                            <label for="password_confirmation" class="block text-900 font-medium text-xl mb-2">Confirm Password</label>
                            <Password 
                                id="password"
                                v-model="form.password_confirmation"
                                required
                                :toggleMask="true" 
                                class="w-full mb-5" 
                                inputClass="w-full"
                                :inputStyle="{ padding: '1rem' }">
                            </Password>
                            <InputError class="mt-2" :message="form.errors.password_confirmation" />
              
                            <Button type="submit" label="Register" class="w-full p-3 text-xl primary" :disabled="form.processing"></Button>
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
