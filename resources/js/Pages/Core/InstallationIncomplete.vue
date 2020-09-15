<template>
    <div class="flex items-center justify-center w-full min-h-screen">
        <Container size="small">
            <div class="space-y-4">
                <h1 class="font-semibold text-center text-title">Installation incomplete</h1>

                <p>It seems your installation is incomplete, we seem to miss some important credentials.</p>

                <p>Please go over the installation process again so all credentials can be filled in.</p>

                <p>You can start the Ploi Core installation by running <code>php artisan core:install</code></p>

                <a class="block text-primary" target="_blank" href="https://docs.ploi-core.io">View Ploi Core Documentation</a>
            </div>
        </Container>
    </div>
</template>

<script>
    import TextDivider from '@/components/TextDivider'
    import FormInput from '@/components/forms/FormInput'
    import Button from '@/components/Button'
    import Container from '@/components/Container'

    export default {
        metaInfo: { title: 'Installation incomplete' },

        components: {
            TextDivider,
            FormInput,
            Button,
            Container,
        },
    }
</script>
