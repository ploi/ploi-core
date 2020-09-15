<template>
    <div
        :aria-label="label" data-balloon-blunt data-balloon-pos="down"
        :class="['flex items-center justify-center w-2 h-2 rounded-circle relative', variantClasses[variant]]">
        <span class="flex items-center justify-center inset-0 h-2 w-2" v-if="variant === 'gray'">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-circle bg-success opacity-75"></span>
        </span>
    </div>
</template>

<script>
const variantClasses = {
    primary: 'bg-primary',
    success: 'bg-success',
    warning: 'bg-warning',
    danger: 'bg-danger',
    gray: 'bg-surface-2 border border-medium-emphasis'
}

export default {
    props: {
        variant: {
            type: String,
            default: () => 'primary',
            validator: variant => Object.keys(variantClasses).includes(variant),
        },
    },
    data() {
        return {
            variantClasses,
        }
    },

    computed: {
        label () {
            if(this.variant === 'success'){
                return this.__('Active')
            }

            if(this.variant === 'gray'){
                return this.__('Busy')
            }

            return this.__('Unknown')
        }
    }
}
</script>
