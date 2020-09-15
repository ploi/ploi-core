<template>
    <FormGroup class="relative">
        <Label :errors="errors" :forId="id">{{ label }}</Label>

        <button type="button" @click="copy" v-if="allowCopy" class="flex items-center right-0 absolute text-xs text-medium-emphasis">
            <IconClipboard class="mr-2" />
            {{ copyText }}
        </button>

        <input :id="id"
               :class="[defaultClasses]"
               :type="type"
               :required="required"
               :value="value"
               @input="updateValue($event.target.value)"
               :placeholder="placeholder" />
        <ErrorText v-if="errors">{{ errors[0] }}</ErrorText>
        <HelperText v-if="helperText && !errors">{{ helperText }}</HelperText>
    </FormGroup>
</template>

<script>
import FormGroup from '@/components/FormGroup'
import Label from '@/components/Label'
import ErrorText from '@/components/ErrorText'
import HelperText from '@/components/HelperText'
import IconClipboard from '@/components/icons/IconClipboard'

const defaultClasses =
    'w-full border-medium-emphasis text-body h-10 max-w-lg px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary'

export default {
    props: {
        id: {
            type: String,
            required: false,
        },
        label: {
            type: String,
            required: true,
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
        }
    },

    components: {
        FormGroup,
        Label,
        ErrorText,
        HelperText,
        IconClipboard,
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
