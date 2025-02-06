<script setup lang="ts">
import coin from "@/assets/animations/coin.json";
import {Vue3Lottie} from "vue3-lottie";

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  logo: {
    type: Object,
    default: () => null
  }
})
</script>

<template>
  <section class="mb-10 md:mb-4">
    <div class="container">
      <div class="flex items-center lg:px-0 md:flex-col">
        <div class="w-[55%] md:w-full md:px-0 pr-4">
          <h2 v-scroll-reveal class="text-[36px] text-color-gradient font-semibold pt-2 mb-8 pr-16 leading-[3.3rem]
          md:px-0 lg:px-0 lg:text-[30px]
          sm:text-[20px] xs:text-[20px] md:leading-snug sm:mb-6 sm:pt-0">
            {{ title }}
          </h2>
          <p class="text-white py-1 sm:text-sm" v-html="description"></p>
        </div>
        <div class="w-[45%] md:w-full md:px-0 pl-6">
          <Vue3Lottie v-if="logo" loop :animation-data="logo" height="100%" width="100%"/>
        </div>
      </div>
    </div>
  </section>
</template>


