<script setup lang="ts">
import {Button} from "primevue";
import {Vue3Lottie} from "vue3-lottie";
import walletPhone from "@/assets/animations/wallet-phone.json"
</script>

<template>
  <section v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }">
    <div class="container">
      <div class="flex pt-16 justify-between items-center md:flex-col-reverse md:items-center">
        <div class="w-[37%] flex items-center justify-center md:w-2/3 sm:w-full">
          <Vue3Lottie loop :animation-data="walletPhone" height="100%" width="100%"/>
        </div>
        <div class="w-[55%] pl-8 md:w-full md:px-0 md:pb-10">
          <h2 id="wallet" class="text-[36px] text-color-gradient font-semibold mb-10 md:text-[30px]
                    sm:text-[25px] xs:text-[20px] xs:mb-4 sm:leading-snug">
            SOLIDTON WALLET: Your Key to the Web3 Ecosystem</h2>
          <p class="text-white mb-14 sm:text-sm">SOLIDTON WALLET is a powerful non-custodial application that
            provides everything you need for
            managing digital assets. The app will be available for iPhone and Android, offering secure,
            fast, and
            reliable management of your digital assets</p>
          <Button class="button-base"
                  severity="contrast" rounded label="Learn More"/>
        </div>
      </div>
    </div>
  </section>
</template>