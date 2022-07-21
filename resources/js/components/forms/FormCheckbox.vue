<template>
    <FormGroup class="">
        <div class="flex flex-row items-center">
            <input :id="id"
                   :class="[
                   defaultClasses,
                   disabled || loading ? 'opacity-50' : '',
                   loading ? 'cursor-wait' : '',
                   ]"
                   type="checkbox"
                   :required="required"
                   :value="value"
                   @input="updateValue($event.target.value)"
                   :disabled="loading || disabled"
                   :autofocus="autofocus"
                   :placeholder="placeholder" />
            <ErrorText v-if="errors">{{ errors[0] }}</ErrorText>
            <HelperText v-if="helperText && !errors">{{ helperText }}</HelperText>

            <Label :errors="errors" :forId="id" class="ml-2">{{ label }}</Label>
        </div>
    </FormGroup>
</template>

<script>
import FormGroup from '@/components/FormGroup'
import Label from '@/components/Label'
import ErrorText from '@/components/ErrorText'
import HelperText from '@/components/HelperText'
import IconClipboard from '@/components/icons/IconClipboard'
import IconKey from '@/components/icons/IconKey'

const defaultClasses = ''

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
    },

    computed: {},
}
</script>
