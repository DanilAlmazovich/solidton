<script setup lang="ts">
import {Button} from "primevue";
import bridge from "@/assets/animations/bridge.json";
import {Vue3Lottie} from "vue3-lottie";
</script>

<template>
  <section>
    <div class="container">
      <div class="flex justify-between pt-24 items-center md:flex-col">
        <div class="w-[55%]  md:w-full md:px-0 md:mb-2">
          <h2 id="bridge"
              v-scroll-reveal
              class="text-[36px] text-color-gradient font-semibold mb-10 md:text-[30px]
                    sm:text-[20px] xs:text-[20px] xs:mb-4 sm:leading-snug">
            Solidton Bridge: Connect Blockchains, Expand Possibilities
          </h2>
          <div class="mb-12">
            <p class="text-white mb-6 sm:text-sm">Solidton Bridge allows easy asset transfers between blockchains,
              enhancing
              interoperability. Transfer SON tokens or other assets to networks like Ethereum or Binance Smart Chain
              effortlessly. </p>
            <span class="text-white sm:text-sm">With Solidton Bridge, you get:</span>
            <ul class="text-white pl-4 mb-6 sm:text-sm list-disc">
              <li>Fast and secure cross-chain transfers.</li>
              <li>Lower fees on cost-efficient blockchains.</li>
              <li>Access to dApps across multiple networks.</li>
            </ul>
            <p class="text-white sm:text-sm">Unlock the freedom of multi-blockchain functionality with Solidton
              Bridge.</p>
          </div>
          <router-link :to="{name: 'bridge'}">
            <Button class="button-base" severity="contrast" rounded label="Learn more"/>
          </router-link>
        </div>
        <div class="w-[40%] flex flex-col items-center md:w-full md:py-0 sm:w-full">
          <div class="flex items-center justify-center transform overflow-hidden">
            <Vue3Lottie loop :animation-data="bridge" height="100%" width="100%"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>