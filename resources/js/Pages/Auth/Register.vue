<template>
    <div class="flex items-center justify-center w-full min-h-screen">
        <Container size="small">
            <form class="space-y-4" @submit.prevent="submit">
                <h1 class="font-semibold text-center text-title">{{ __('Register') }}</h1>

                <FormInput :label="__('Name')" :errors="$page.errors.name" v-model="form.name" id="name" type="text" required/>
                <FormInput :label="__('Email')" :errors="$page.errors.email" v-model="form.email" id="email" type="email" required/>
                <FormInput :label="__('Password')" :errors="$page.errors.password" v-model="form.password" id="password" type="password" required/>
                <FormInput :label="__('Confirm password')" :errors="$page.errors.password_confirmation" v-model="form.password_confirmation" id="password_confirmation" type="password" required/>

                <Button variant="primary" :disabled="sending" block>{{ __('Start') }}</Button>
            </form>
        </Container>
    </div>
</template>

<script>
    import TextDivider from '@/components/TextDivider'
    import FormInput from '@/components/forms/FormInput'
    import Button from '@/components/Button'
    import Container from '@/components/Container'
    import {useNotification} from '@/hooks/notification'

    export default {
        metaInfo() {
            return {
                title: `${this.__('Register')}`,
            }
        },

        components: {
            TextDivider,
            FormInput,
            Button,
            Container,
        },

        data() {
            return {
                sending: false,
                form: {
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null,
                },
            }
        },

        methods: {
            useNotification,

            submit() {
                this.sending = true

                this.$inertia.post(this.route('register'), this.form).then(() => {
                    this.sending = false
                })
            },
        },
    }
</script>
