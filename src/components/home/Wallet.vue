<script setup lang="ts">
import {Button} from "primevue";
import {Vue3Lottie} from "vue3-lottie";
import walletPhone from "@/assets/animations/wallet-phone.json"
</script>

<template>
  <section>
    <div class="container">
      <div class="flex pt-16 justify-between items-center md:flex-col-reverse md:items-center">
        <div class="w-[37%] flex items-center justify-center md:w-full sm:w-full">
          <Vue3Lottie loop :animation-data="walletPhone" height="100%" width="100%"/>
        </div>
        <div class="w-[55%] pl-8 md:w-full md:px-0 md:pb-10">
          <h2 id="wallet"
              v-scroll-reveal
              class="text-[36px] text-color-gradient font-semibold mb-10 md:text-[30px]
                    sm:text-[20px] xs:text-[20px] xs:mb-4 sm:leading-snug">
            SOLIDTON WALLET: Your Key to the Web3 Ecosystem</h2>
          <p class="text-white mb-14 sm:text-sm">
            SOLIDTON WALLET is a powerful non-custodial application that provides everything you need for managing
            digital assets. The app will be available for iPhone and Android, offering secure, fast, and reliable
            management of your digital assets</p>
          <router-link :to="{name: 'solidton-wallet'}">
            <Button class="button-base"
                    severity="contrast" rounded label="Learn More"/>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>