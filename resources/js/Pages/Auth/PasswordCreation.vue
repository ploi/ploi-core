<template>
    <div class="flex items-center justify-center w-full min-h-screen">
        <Container size="small">
            <form class="space-y-4" @submit.prevent="submit">
                <h1 class="font-semibold text-center text-title">{{ __('Create password') }}</h1>

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
                title: `${this.__('Create password')}`,
            }
        },

        components: {
            TextDivider,
            FormInput,
            Button,
            Container,
        },

        props: {
            email: String,
        },

        data() {
            return {
                sending: false,
                form: {
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

                this.$inertia.post(this.route('password-creation.start', {
                    email: this.email
                }), {
                    password: this.form.password,
                    password_confirmation: this.form.password_confirmation,
                }).then(() => {
                    this.sending = false
                })
            },
        },
    }
</script>
