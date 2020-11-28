<template>
    <FormGroup class="relative max-w-lg">
        <Label :errors="errors" :forId="id">{{ label }}</Label>

        <input :id="id"
               ref="file"
               :class="[
                   defaultClasses,
                   disabled || loading ? 'opacity-50' : '',
                   loading ? 'cursor-wait' : '',
                   ]"
               type="file"
               :accept="accept"
               @change="change"
               class="hidden" />

        <div v-if="!value" class="p-2">
            <Button type="button" class="px-4 py-1 bg-gray-500 hover:bg-gray-700 rounded-sm text-xs font-medium text-white" @click="browse">
                Browse
            </Button>
        </div>
        <div v-else class="flex items-center justify-between p-2">
            <div class="flex-1 pr-1">{{ value.name }} <span class="text-gray-500 text-xs">({{ filesize(value.size) }})</span></div>
            <Button variant="danger" type="button" class="px-4 py-1 bg-gray-500 hover:bg-gray-700 rounded-sm text-xs font-medium text-white" @click="remove">
                Remove
            </Button>
        </div>
        <ErrorText v-if="errors">{{ errors[0] }}</ErrorText>
        <HelperText v-if="helperText && !errors">{{ helperText }}</HelperText>

    </FormGroup>
</template>

<script>
import FormGroup from '@/components/FormGroup'
import Label from '@/components/Label'
import Button from '@/components/Button'
import ErrorText from '@/components/ErrorText'
import HelperText from '@/components/HelperText'
import IconClipboard from '@/components/icons/IconClipboard'
import IconKey from '@/components/icons/IconKey'

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
        value: File,
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
        accept: String,
    },

    components: {
        FormGroup,
        Label,
        ErrorText,
        HelperText,
        IconClipboard,
        IconKey,
        Button
    },

    data() {
        return {
            defaultClasses,
        }
    },

    watch: {
        value(value) {
            if (!value) {
                this.$refs.file.value = ''
            }
        },
    },
    methods: {
        filesize(size) {
            var i = Math.floor(Math.log(size) / Math.log(1024))
            return (size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
        },
        browse() {
            this.$refs.file.click()
        },
        change(e) {
            this.$emit('input', e.target.files[0])
        },
        remove() {
            this.$emit('input', null)
        },
    },

}
</script>
