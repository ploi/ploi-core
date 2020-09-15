<template>
    <li>
        <div class="-mx-4">
            <div class="block p-4 transition rounded shadow-none duration-fast hover:bg-surface-2">
                <div class="flex flex-row items-center space-x-4">
                    <slot name="prefix"></slot>
                    <div class="flex-1">
                        <h2 class="font-medium text-body">
                            <slot name="title"></slot>
                        </h2>
                        <p class="text-small text-medium-emphasis">
                            <slot name="subtitle"></slot>
                        </p>
                    </div>
                    <slot name="suffix"></slot>
                </div>
            </div>
        </div>
    </li>
</template>
