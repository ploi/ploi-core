<template>
    <Head><title>{{ __('Login') }}</title></Head>
    <div class="flex items-center justify-center w-full min-h-screen">
        <Container size="small">
            <form class="space-y-4" @submit.prevent="submit">
                <div class="flex flex-col items-center space-y-5">
                    <img class="h-14" v-if="$page.props.settings.logo" :src="$page.props.settings.logo" />
                    <h1 class="font-semibold text-center text-title">
                        Confirm access to {{ $page.props.settings.name }}
                    </h1>
                </div>

                <FormInput :label="__('Code')" :autofocus="true" :errors="$page.props.errors.code" v-model="form.code" id="code" required />

                <Button variant="primary" :disabled="sending" block>{{ __('Confirm') }}</Button>

                <TextDivider v-if="$page.props.settings.has_terms" :without-text="true"></TextDivider>

                <div class="flex justify-between"
                     v-if="$page.props.settings.has_terms || $page.props.settings.has_privacy">
                    <div v-if="$page.props.settings.has_terms">
                        <inertia-link :href="route('page.show', 'terms-of-service')"
                                      class="text-small text-medium-emphasis hover:text-high-emphasis border-b border-dotted">
                            Terms Of Service
                        </inertia-link>
                    </div>
                    <div v-if="$page.props.settings.has_privacy">
                        <inertia-link :href="route('page.show', 'privacy-policy')"
                                      class="text-small text-medium-emphasis hover:text-high-emphasis border-b border-dotted">
                            Privacy Policy
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
import Button from '@/components/Button.vue'
import Container from '@/components/Container.vue'

export default {
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
                code: null,
            },
        }
    },

    methods: {
        submit() {
            this.$inertia.post(this.route('auth.confirm-2fa.confirm'), this.form, {
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
            })
        },
    },
}
</script>
