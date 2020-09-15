<template>
    <div class="p-6 rounded shadow bg-surface-3">
        <div class="flex space-x-4">
            <div>
                <slot name="prefix"></slot>
            </div>
            <div>
                <h3 class="font-semibold text-body">
                    <slot name="title"></slot>
                </h3>
                <p class="text-medium-emphasis text-small">
                    <slot name="subtitle"></slot>
                </p>
            </div>
        </div>
    </div>
</template>
