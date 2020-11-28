<template>
    <div class="flex items-center justify-center w-full min-h-screen">
        <Container size="small">
            <form class="space-y-4" @submit.prevent="submit">
                <div class="flex flex-col items-center space-y-5">
                    <img class="h-14" v-if="$page.props.settings.logo" :src="$page.props.settings.logo" />
                    <h1 class="font-semibold text-center text-title">
                        {{ __('Reset password') }}
                    </h1>
                </div>

                <FormInput :label="__('Email')" :errors="$page.props.errors.email" v-model="form.email" id="email" type="email" required/>
                <FormInput :label="__('Password')" :errors="$page.props.errors.password" v-model="form.password" id="password" type="password" required/>
                <FormInput :label="__('Confirm password')" :errors="$page.props.errors.password_confirmation" v-model="form.password_confirmation" id="password_confirmation" type="password" required/>

                <Button variant="primary" :disabled="sending" block>{{ __('Reset') }}</Button>

                <TextDivider>{{ __('Or') }}</TextDivider>

                <div class="space-y-3">
                    <Button as="inertia-link" :href="route('login')" variant="secondary" block>{{ __('Login') }}</Button>
                </div>
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
                title: `${this.__('Reset password')}`,
            }
        },

        components: {
            TextDivider,
            FormInput,
            Button,
            Container,
        },

        props: {
            token: String,
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
                this.$inertia.post(this.route('password.update'), {
                    email: this.form.email,
                    token: this.token,
                    password: this.form.password,
                    password_confirmation: this.form.password_confirmation,
                }, {
                    onStart: () => this.sending = true,
                    onFinish: () => this.sending = false,
                });
            },
        },
    }
</script>
