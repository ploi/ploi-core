<template>
    <FormGroup>
        <Label :errors="errors" :forId="id">{{ label }}</Label>

        <textarea :id="id"
                  :class="[defaultClasses]"
                  :required="required"
                  :value="value"
                  :rows="rows"
                  @input="updateValue($event.target.value)"
                  :placeholder="placeholder"></textarea>
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
        'w-full border-medium-emphasis text-body max-w-lg px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary'

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
            placeholder: {
                type: String,
            },
            value: {
                required: false,
                default: '',
            },
            rows: {
                default: 3,
                required: false,
            },
            helperText: {
                type: String
            },
        },

        components: {
            FormGroup,
            Label,
            ErrorText,
            HelperText
        },

        data() {
            return {
                defaultClasses,
            }
        },

        methods: {
            updateValue(value) {
                this.$emit('input', value);
            },
        },
    }
</script>
