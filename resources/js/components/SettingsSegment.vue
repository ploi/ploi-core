<template>
    <section class="px-8 pb-8 space-y-6 border rounded border-low-emphasis">
        <header class="-mt-4">
            <h2 class="inline-flex px-4 -mx-4 font-medium bg-surface-1 text-title">
                <slot name="title"></slot>
            </h2>
            <p class="mt-1 text-small text-medium-emphasis">
                <slot name="subtitle"></slot>
            </p>
        </header>
        <div class="space-y-4">
            <slot name="form"></slot>
            <slot name="content"></slot>
        </div>
    </section>
</template>
