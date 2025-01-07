<script setup lang="ts">
import {InputText, Button} from "primevue";
</script>

<template>
    <section class="w-full">
        <div class="container">
            <div class="py-12">
                <div class="pt-2 pb-1 px-2 mb-12">
                    <span class="text-white text-xl sm:text-base">Sign Up for Exclusive Updates!</span>
                </div>
                <div class="flex px-2 gap-8 sm:flex-col">
                    <InputText placeholder="abc@gmail.com"
                               class="input-apply"/>
                    <Button class="bg-transparent text-white px-12" label="Submit"/>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped>
    .input-apply {
        @apply rounded-full border border-solid border-gray-350 bg-transparent placeholder:text-gray-350
        text-white py-3.5 px-6 w-[23rem];
    }
</style>
