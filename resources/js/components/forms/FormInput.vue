<template>
    <FormGroup class="relative">
        <Label :errors="errors" :forId="id" v-if="label">{{ label }}</Label>

        <button type="button" @click="copy" v-if="allowCopy" class="flex items-center right-0 absolute text-xs text-medium-emphasis">
            <IconClipboard class="mr-2" />
            {{ copyText }}
        </button>

        <button type="button" @click="generateString" v-if="allowRandomString" class="flex items-center right-0 absolute text-xs text-medium-emphasis">
            <IconKey class="mr-2" />
            {{ __('Generate') }}
        </button>

        <input :id="id"
               :class="[
                   defaultClasses,
                   disabled || loading ? 'opacity-50' : '',
                   loading ? 'cursor-wait' : '',
                   ]"
               :type="type"
               :required="required"
               :value="value"
               @input="updateValue($event.target.value)"
               :disabled="loading || disabled"
               :autofocus="autofocus"
               :placeholder="placeholder" />
        <ErrorText v-if="errors">{{ errors[0] }}</ErrorText>
        <HelperText v-if="helperText && !errors">{{ helperText }}</HelperText>

    </FormGroup>
</template>

<script>
import FormGroup from '@/components/FormGroup.vue'
import Label from '@/components/Label.vue'
import ErrorText from '@/components/ErrorText.vue'
import HelperText from '@/components/HelperText.vue'
import IconClipboard from '@/components/icons/IconClipboard.vue'
import IconKey from '@/components/icons/IconKey.vue'

const defaultClasses =
    'w-full border-medium-emphasis text-body h-10 px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary'

export default {
    props: {
        id: {
            type: String,
            required: false,
        },
        label: {
            type: String,
            required: false,
        },
        type: {
            type: String,
            default: () => 'text',
        },
        required: {
            type: Boolean,
            default: () => false,
        },
        errors: {
            type: Array,
        },
        helperText: {
            type: String
        },
        placeholder: {
            type: String,
        },
        value: {
            required: false,
            default: '',
        },
        allowCopy: {
            required: false,
            default: false,
            type: Boolean
        },
        allowRandomString: {
            required: false,
            default: false,
            type: Boolean
        },
        loading: {
            type: Boolean,
            required: false,
            default: false,
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false,
        },
        autofocus: {
            type: Boolean,
            required: false,
            default: false,
        }
    },

    components: {
        FormGroup,
        Label,
        ErrorText,
        HelperText,
        IconClipboard,
        IconKey,
    },

    data() {
        return {
            defaultClasses,
            copied: false,
        }
    },

    watch: {
        copied() {
            let vm = this;

            if (this.copied) {
                setTimeout(() => {
                    vm.copied = false;
                }, 1250);
            }
        }
    },

    methods: {
        updateValue(value) {
            this.$emit('input', value);
        },
        copy() {
            this.copied = true;

            this.$copyText(this.value);
        },
        generateString() {
            this.$emit('input', this.randomString());
        }
    },

    computed: {
        copyText() {
            if (this.copied) {
                return this.__('Copied to clipboard');
            }

            return this.__('Copy');
        }
    },
}
</script>
