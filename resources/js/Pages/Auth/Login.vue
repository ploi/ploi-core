<template>
    <div class="flex items-center justify-center w-full min-h-screen">
        <Container size="small">
            <form class="space-y-4" @submit.prevent="submit">
                <div class="flex flex-col items-center space-y-5">
                    <img class="h-14" v-if="$page.props.settings.logo" :src="$page.props.settings.logo" />
                    <h1 class="font-semibold text-center text-title">
                        Login to {{ $page.props.settings.name }}
                    </h1>
                </div>

                <FormInput :label="__('Email')" :errors="$page.props.errors.email" v-model="form.email" id="email"
                           type="email" required/>

                <FormInput :label="__('Password')" v-model="form.password" id="password" type="password" required/>

                <Button variant="primary" :disabled="sending" block>{{ __('Login') }}</Button>

                <Button as="inertia-link" :disabled="sending" :href="route('password.request')" variant="secondary"
                        block>{{ __('Reset password') }}
                </Button>

                <TextDivider v-if="$page.props.settings.allow_registration">{{ __('Or') }}</TextDivider>

                <div class="space-y-3">
                    <Button as="inertia-link" :href="route('register')" variant="secondary" :disabled="sending"
                            v-if="$page.props.settings.allow_registration" block>Register
                    </Button>
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

export default {
    metaInfo: {title: 'Login'},

    components: {
        TextDivider,
        FormInput,
        Button,
        Container,
    },

    props: {
        errors: Object,
    },
    data() {
        return {
            sending: false,
            form: {
                email: null,
                password: null,
                remember: null,
            },
        }
    },
    methods: {
        submit() {
            this.$inertia.post(this.route('login'), {
                email: this.form.email,
                password: this.form.password,
                remember: this.form.remember,
            }, {
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
            })
        },
    },
}
</script>
