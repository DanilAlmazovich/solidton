<script setup lang="ts">
import {Button} from "primevue";
import Icon from "@/components/Icon.vue";
import { Vue3Lottie } from 'vue3-lottie'
import promo from '@/assets/animations/promo.json'
</script>

<template>
  <section>
    <div class="container">
      <div class="hidden md:flex md:h-[584px] sm:h-[404px]">
<!--        <video class="w-full h-full object-contain" src="@/assets/video/promo.webm" playsinline autoplay muted loop/>-->
        <Vue3Lottie loop :animation-data="promo" height="100%" width="100%" renderer="canvas"/>
      </div>
      <div class="w-1/2 pt-[12rem] pb-[8rem] xl:pt-[8rem] lg:pt-[4rem] md:w-full md:pb-[6rem] md:pt-0">
        <h1
          class="text-[40px] font-bold text-color-gradient leading-[3.255rem] mb-12 lg:text-[30px] lg:leading-[2.5rem] sm:text-[25px]">
          Solidton: A Level 1 Breakthrough on the TON Blockchain That Will Change the World</h1>
        <p class="text-sm text-white leading-relaxed mb-6">Solidton marks a new chapter in decentralized technology. Our
          ecosystem, built on the TON blockchain,
          combines speed, scalability, and security to create a space where innovation is accessible to all.
          We are building a sustainable platform capable of processing millions of transactions with maximum
          efficiency, ensuring reliability and ease of use for everyone.</p>
        <div class="flex items-center gap-6 py-6 mb-1 sm:gap-4">
          <router-link :to="{name: 'presale'}">
            <Button class="button-gradient px-14 py-5 lg:px-8 lg:py-3 lg:text-base sm:text-sm sm:py-2"
                    label="Join Presale" rounded size="large"/>
          </router-link>
          <Button severity="secondary" label="How to buy?" rounded size="large"
                  class="px-14 py-5 lg:px-8 lg:py-3 lg:text-base sm:text-sm sm:py-2"/>
        </div>
        <p class="text-[10px] text-gray-300 pr-32 leading-snug mb-3 sm:pr-0">Access to 64% of the total SON supply is
          available now during our live crypto presale. This unique
          opportunity allows you to join early and grow alongside our rapidly expanding community.</p>
        <button to="#" class="flex items-center text-white gap-2">
          <span class="text-sm">Join now</span>
          <Icon name="long-arrow"/>
        </button>
      </div>
    </div>
  </section>
</template>