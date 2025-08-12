<template>
    <div v-if="! secret.string">
        <form @submit.prevent="enable2FA">
            <Button :loading="sending">
                {{ __('Enable two-factor authentication') }}
            </Button>
        </form>
    </div>
    <div v-else-if="! enabled">
        <p>{{ __('Please scan the QR-code with your authentication app to confirm. ') }}</p>
        <div v-html="secret.qr_code"></div>

        <form @submit.prevent="confirm2FA" class="space-y-4">
            <FormInput :label="__('Enter the confirmation code')" :autofocus="true" :errors="$page.props.errors.code" required v-model="form.code">
            </FormInput>
            <Button :loading="sending">
                {{ __('Confirm code') }}
            </Button>
        </form>
    </div>
    <div v-else class="space-y-4">
        <div v-if="recoveryCodes.length !== 0" class="space-y-4">
            <div>
                <strong class="">{{ __('Recovery codes') }}</strong>
                <p>{{ __('Please store your recovery codes safely. When you lose access to both your Authenticator app and recovery codes, you might become locked out of your account forever.') }}</p>
                <strong class="block mt-2">{{ __('Your recovery codes will only be displayed once.') }}</strong>
            </div>
            <ul class="bg-gray-50 rounded-md font-mono px-4 py-3">
                <li v-for="recoveryCode in recoveryCodes" :key="recoveryCode.code" v-text="recoveryCode.code"></li>
            </ul>
        </div>
        <div class="mt-2 flex gap-x-4">
            <form @submit.prevent="regenerateRecoveryCodes">
                <Button :loading="sending">
                    {{ __('Regenerate recovery codes') }}
                </Button>
            </form>
            <form @submit.prevent="disable2FA">
                <Button variant="danger" :loading="sending">
                    {{ __('Disable two factor authentication') }}
                </Button>
            </form>
        </div>
    </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import FormInput from "@/components/forms/FormInput.vue";

export default {
    components: {FormInput, Input, Button},

    props: {
        secret: Object,
        recoveryCodes: Array,
        enabled: Boolean
    },

    data() {
        return {
            sending: false,

            form: {
                code: '',
            },
        }
    },

    methods: {
        enable2FA() {
            this.$inertia.put(this.route('profile.security.two-factor-authentication.create'));
        },

        confirm2FA() {
            this.$inertia.patch(this.route('profile.security.two-factor-authentication.confirm'), this.form, {
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
            });
        },

        regenerateRecoveryCodes() {
            this.$inertia.patch(this.route('profile.security.two-factor-authentication.regenerate-recovery-codes'), {}, {
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
            });
        },

        disable2FA() {
            this.$inertia.delete(this.route('profile.security.two-factor-authentication.destroy'), {}, {
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
            });
        }
    }
}
</script>
