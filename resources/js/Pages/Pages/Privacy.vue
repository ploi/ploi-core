<template>
    <div class="flex items-center justify-center w-full min-h-screen py-8 px-8">
        <Container size="medium" class="py-4 space-y-8">
            <div class="flex flex-col items-center space-y-5">
                <img class="h-14" v-if="$page.props.settings.logo" :src="$page.props.settings.logo" />
                <h1 class="font-semibold text-center text-heading">
                    Privacy Policy
                </h1>
            </div>
            <TextDivider :without-text="true"></TextDivider>
            <ul class="flex justify-between">
                <li>
                    <inertia-link :href="route('login')" class="text-medium-emphasis hover:text-high-emphasis border-b border-dotted">Back to login</inertia-link>
                </li>
            </ul>
            <TextDivider :without-text="true"></TextDivider>
            <div class="prose" v-html="content"></div>
        </Container>
    </div>
</template>

<script>
import TextDivider from '@/components/TextDivider.vue'
import FormInput from '@/components/forms/FormInput.vue'
import Button from '@/components/Button.vue'
import Container from '@/components/Container.vue'

export default {
    metaInfo: {title: 'Privacy Policy'},

    components: {
        TextDivider,
        FormInput,
        Button,
        Container,
    },

    props: {
        content: {
            type: String,
            required: false
        }
    }
}
</script>
