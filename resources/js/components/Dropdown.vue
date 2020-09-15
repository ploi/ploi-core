<template>
    <div v-click-outside="close" ref="dropdown" class="relative">
        <slot v-bind="{ isOpen, open, close, toggle, position }"></slot>
    </div>
</template>

<script>
export default {
    data: () => ({
        isOpen: false,
        position: 'top',
    }),
    methods: {
        open() {
            this.isOpen = true
            this.calculatePosition()
        },
        close() {
            this.isOpen = false
            this.calculatePosition()
        },
        toggle() {
            this.isOpen = !this.isOpen
            this.calculatePosition()
        },
        outsideClickListener(event) {
            if (this.$refs.dropdown !== event.target.closest(this.$refs.dropdown.tagName)) {
                this.close()
            }
        },
        calculatePosition() {
            const dropdownPositionTop = this.$refs.dropdown.getBoundingClientRect().top
            const viewportHeight = window.innerHeight
            if (dropdownPositionTop > viewportHeight * 0.75) {
                this.position = 'bottom'
                return
            }
            this.position = 'top'
        },
    },
    mounted() {
        window.addEventListener('click', this.outsideClickListener)
    },
    beforeDestroy() {
        window.removeEventListener('click', this.outsideClickListener)
    },
}
</script>
