<template>
    <span class="cursor-pointer" v-on:click="copy" v-html="copyText"></span>
</template>

<script>
    export default {
        data() {
            return {
                copied: false,
            };
        },
        props: {
            label: String,
            value: String,
        },
        methods: {
            copy() {
                this.copied = true;

                this.$copyText(this.value);
            },
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
        computed: {
            copyText() {
                if (this.copied) {
                    return this.__('Copied to clipboard');
                }

                return `${this.label}`
            }
        },
    };
</script>
