<script setup lang="ts">
import {Button} from "primevue";
import solidTrust from "@/assets/animations/solid-trust-u.json";
import {Vue3Lottie} from "vue3-lottie";
</script>

<template>
  <section>
    <div class="container">
      <div class="flex justify-between items-center md:flex-col-reverse pt-24 md:pt-16">
        <div class="w-[40%] flex justify-center items-center md:pt-16
            md:w-full sm:w-full xs:w-full overflow-hidden px-20 lg:px-0 md:px-10 sm:px-10 xs:px-0">
          <Vue3Lottie loop :animation-data="solidTrust" height="100%" width="100%"/>
        </div>
        <div class="w-[52%] pl-2 md:w-full md:px-0 md:pt-6">
          <h2 id="solidtrust"
              v-scroll-reveal
              class="text-[36px] text-color-gradient font-semibold mb-10 md:text-[30px]
                    sm:text-[20px] xs:text-[20px] xs:mb-4 sm:leading-snug">
            SolidTrust: Trust and Secure Blockchain</h2>
          <div class="mb-12">
            <p class="text-white mb-8 leading-[31.5px] sm:leading-snug sm:text-sm">SolidTrust is a unique decentralized
              system that
              analyzes the actions
              of users, projects, and tokens, assigning them a trust rating (SolidScore).
              This rating is updated in real-time, ensuring security, transparency, and reliability
              for all participants in the SolidChain network.</p>
            <p class="text-white mb-6 leading-[31.5px] sm:leading-snug sm:text-sm">Join SolidTrust to experience safe,
              transparent, and
              reliable blockchain interactions like never before.</p>
          </div>
          <Button class="button-base" severity="contrast" rounded label="Learn More"/>
        </div>
      </div>
    </div>
  </section>
</template>