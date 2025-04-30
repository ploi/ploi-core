<template>
    <Head><title>{{ __('Register') }}</title></Head>
    <div class="flex items-center justify-center w-full min-h-screen">
        <Container size="small">
            <form class="space-y-4" @submit.prevent="submit">
                <div class="flex flex-col items-center space-y-5">
                    <img class="h-14" v-if="$page.props.settings.logo" :src="$page.props.settings.logo" />
                    <h1 class="font-semibold text-center text-title">
                        {{ __('Register') }}
                    </h1>
                </div>

                <FormInput :label="__('Name')" :errors="$page.props.errors.name" v-model="form.name" id="name" type="text" required />
                <FormInput :label="__('Email')" :errors="$page.props.errors.email" v-model="form.email" id="email" type="email" required />
                <FormInput :label="__('Password')" :errors="$page.props.errors.password" v-model="form.password" id="password" type="password" required />
                <FormInput :label="__('Confirm password')" :errors="$page.props.errors.password_confirmation" v-model="form.password_confirmation" id="password_confirmation" type="password" required />

                <div v-if="$page.props.settings.accept_terms_required">
                    <input id="terms_required" class="form-checkbox" type="checkbox"
                           v-model="form.terms">
                    <label for="terms_required" class="ml-2 text-sm">
                        {{ __('Accept terms of service') }}
                    </label>
                    <ErrorText v-if="$page.props.errors.terms">{{ $page.props.errors.terms[0] }}</ErrorText>
                </div>

                <Button variant="primary" :disabled="sending" block>{{ __('Register') }}</Button>

                <TextDivider>{{ __('Or') }}</TextDivider>

                <div class="space-y-3">
                    <Button as="inertia-link" :href="route('login')" variant="secondary" block>{{ __('Login') }}</Button>
                </div>

                <TextDivider v-if="$page.props.settings.has_terms" :without-text="true"></TextDivider>

                <div class="flex justify-between"
                     v-if="$page.props.settings.has_terms || $page.props.settings.has_privacy">
                    <div v-if="$page.props.settings.has_terms">
                        <inertia-link :href="route('page.show', 'terms-of-service')"
                                      class="text-small text-medium-emphasis hover:text-high-emphasis border-b border-dotted">
                            {{ __('Terms Of Service') }}
                        </inertia-link>
                    </div>
                    <div v-if="$page.props.settings.has_privacy">
                        <inertia-link :href="route('page.show', 'privacy-policy')"
                                      class="text-small text-medium-emphasis hover:text-high-emphasis border-b border-dotted">
                            {{ __('Privacy Policy') }}
                        </inertia-link>
                    </div>
                </div>
            </form>
        </Container>
    </div>
</template>

<script>
import TextDivider from '@/components/TextDivider.vue'
import FormInput from '@/components/forms/FormInput.vue'
import ErrorText from '@/components/ErrorText.vue'
import Button from '@/components/Button.vue'
import Container from '@/components/Container.vue'
import {useNotification} from '@/hooks/notification'

export default {
    components: {
        TextDivider,
        FormInput,
        Button,
        Container,
        ErrorText,
    },

    data() {
        return {
            sending: false,
            form: {
                terms: false,
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
            this.$inertia.post(this.route('register'), this.form, {
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
            });
        },
    },
}
</script>
