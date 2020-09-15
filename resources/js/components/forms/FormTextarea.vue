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
    </FormGroup>
</template>

<script>
    import FormGroup from '@/components/FormGroup'
    import Label from '@/components/Label'
    import ErrorText from '@/components/ErrorText'

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
            }
        },

        components: {
            FormGroup,
            Label,
            ErrorText,
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
