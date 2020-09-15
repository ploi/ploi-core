<template>
    <div class="fixed inset-0 z-50 flex flex-col items-end w-full h-screen p-6 pointer-events-none">
        <Transition
            enter-active-class="transition ease-out transform duration-slow"
            enter-class="scale-95 translate-x-full"
            enter-to-class="scale-100 translate-x-0"
            leave-active-class="transition ease-out transform duration-slow"
            leave-class="scale-95 translate-x-0"
            leave-to-class="scale-95 translate-x-full"
        >
            <slot></slot>
        </Transition>
    </div>
</template>
