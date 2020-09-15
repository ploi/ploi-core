<template>
    <aside
        class="relative w-full h-full max-w-lg p-8 rounded shadow-2xl pointer-events-auto bg-overlay bf-blur"
        v-click-outside="() => $emit('close')"
    >
        <button
            @click="$emit('close')"
            class="absolute top-0 right-0 flex items-center justify-center w-12 h-12"
        >
            <IconClose class="w-8 h-8 text-low-emphasis" />
        </button>

        <Form @submit="$emit('submit')">
            <div>
                <h2 class="font-medium text-title">
                    <slot name="title"></slot>
                </h2>
                <p class="text-medium-emphasis">
                    <slot name="subtitle"></slot>
                </p>
            </div>

            <slot name="form"></slot>

            <FormActions>
                <slot name="form-actions"></slot>
            </FormActions>
        </Form>
    </aside>
</template>

<script>
    import IconClose from '@/components/icons/IconClose'
    import FormActions from '@/components/FormActions'
    import Form from '@/components/Form'

    export default {
        components: {
            IconClose,
            FormActions,
            Form
        },
    }
</script>
