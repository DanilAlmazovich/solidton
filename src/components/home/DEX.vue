<script setup lang="ts">
import {Button} from "primevue";
import dex from "@/assets/animations/dex.json";
import {Vue3Lottie} from "vue3-lottie";
</script>

<template>
  <section>
    <div class="container">
      <div class="flex pt-24 justify-between items-center md:flex-col-reverse">
        <div class="w-[40%] flex justify-center items-center overflow-hidden pr-20 md:pr-0
          md:w-3/4 sm:w-full md:pt-10 xs:w-full">
          <Vue3Lottie loop :animation-data="dex" height="100%" width="100%"/>
        </div>
        <div class="w-[56%] md:w-full">
          <h2 id="dex"
              v-scroll-reveal
              class="text-[36px] text-color-gradient font-semibold mb-10 md:text-[30px]
                    sm:text-[20px] xs:text-[20px] xs:mb-4 sm:leading-snug">
            Solidton DEX: Trade Freely Without Limits</h2>
          <div class="mb-14">
            <p class="text-white mb-6 sm:text-sm">Solidton DEX is a decentralized exchange allowing direct wallet-to-wallet
              trading on the TON blockchain, ensuring speed, security, and transparency.</p>
            <p class="text-white mb-6 md:text-sm">With Solidton DEX, you get:</p>
            <ul class="text-white pl-4 mb-6 sm:text-sm list-disc">
              <li>Complete Control: Always own your assets—no third-party custody.</li>
              <li>Low Fees: Minimal costs thanks to TON’s efficiency.</li>
              <li>Advanced Tools: Use features like Pump Pad, Bridge, and Block Explorer for smooth trading.</li>
            </ul>
            <p class="text-white sm:text-sm">Solidton DEX ensures open, secure, and accessible trading for everyone.</p>
          </div>
          <router-link :to="{name: 'dex'}">
            <Button class="button-base"
                    severity="contrast" rounded label="Learn More"/>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>