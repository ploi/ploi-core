<template>
    <FormGroup>
        <Label :errors="errors" :forId="id">{{ label }}</Label>
        <select :disabled="loading || disabled" :class="[
            defaultClasses,
            disabled || loading ? 'opacity-50' : '',
            loading ? 'cursor-wait' : '',
            ]" :id="id" :required="required" :placeholder="placeholder"
                @input="updateValue($event.target.value)"
                v-model="value">
            <slot></slot>
        </select>
        <ErrorText v-if="errors">{{ errors[0] }}</ErrorText>
        <HelperText v-if="helperText && !errors">{{ helperText }}</HelperText>
    </FormGroup>
</template>

<script>
import FormGroup from '@/components/FormGroup'
import Label from '@/components/Label'
import ErrorText from '@/components/ErrorText'
import HelperText from '@/components/HelperText'

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
        helperText: {
            type: String
        },
        errors: {
            type: Array,
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
    },

    components: {
        FormGroup,
        Label,
        ErrorText,
        HelperText,
    },

    data() {
        return {
            defaultClasses,
            selected: this.value
        }
    },

    methods: {
        updateValue(value) {
            this.$emit('input', value);
        },
    },
}
</script>
