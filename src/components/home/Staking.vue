<script setup lang="ts">
import {Button} from "primevue";
import stakingTime from "@/assets/animations/staking-time.json";
import {Vue3Lottie} from "vue3-lottie";
</script>

<template>
  <section>
    <div class="container">
      <div class="flex justify-between pt-24 items-center md:flex-col">
        <div class="w-[55%] pr-20 lg:pr-14 md:pr-0 md:w-full md:pt-4">
          <h2 id="staking"
              v-scroll-reveal
              class="text-[36px] text-color-gradient font-semibold mb-10 md:text-[30px]
                    sm:text-[20px] xs:text-[20px] xs:mb-4 sm:leading-snug">
            Solidton Staking: Multiply Your SON Tokens Effortlessly</h2>
          <p class="text-white mb-10 sm:text-sm">
            Earn rewards by staking your SON tokens directly on the Solidton platform. Support the network, enhance its
            stability, and grow your assets with ease. Staking on Solidton is secure, efficient, and designed to
            maximize
            your returns while contributing to the ecosystem</p>
          <Button class="button-base"
                  severity="contrast" rounded label="Buy now"/>
        </div>
        <div class="w-[43%] flex flex-col items-center md:w-full sm:w-full">
          <div class="flex items-center justify-center mb-4">
            <Vue3Lottie loop :animation-data="stakingTime" height="100%" width="100%"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>