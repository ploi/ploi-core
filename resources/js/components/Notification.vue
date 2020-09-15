<template>
    <li
        class="flex flex-row items-start w-full max-w-sm px-5 py-3 space-x-4 rounded shadow-2xl pointer-events-auto bg-overlay bf-blur"
    >
        <slot name="prefix"></slot>
        <div class="mr-auto">
            <p class="font-medium text-body">
                <slot name="title"></slot>
            </p>
            <p class="text-small text-medium-emphasis">
                <slot name="subtitle"></slot>
            </p>
        </div>
    </li>
</template>
