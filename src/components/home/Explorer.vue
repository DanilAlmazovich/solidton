<script setup lang="ts">
import explorer from "@/assets/animations/explorer.json";
import {Vue3Lottie} from "vue3-lottie";
</script>
<template>
  <section>
    <div class="container">
      <div class="pt-24 md:pt-4 sm:mb-0">
        <div class="flex justify-center flex-col px-40 mb-2 md:px-0 lg:px-8 xl:px-10">
          <h2 id="block-explorer"
              v-scroll-reveal
              class="text-[36px] text-color-gradient font-semibold mb-10 md:text-[30px]
                    sm:text-[20px] xs:text-[20px] xs:mb-4 sm:leading-snug text-center">
            Solidton Block Explorer: Transparency at Your Fingertips</h2>
          <p class="text-center text-gray-300 px-36 leading-[1.969rem] mb-6 lg:px-8 sm:text-sm md:px-0">Solidton Block
            SolidScan: Transparency at Your Fingertips SolidScan is your go-to tool for tracking transactions and
            exploring the TON blockchain with full transparency.</p>
          <p class="text-center text-blue-400 leading-[1.969rem] px-48 mb-10 sm:text-sm lg:px-8 md:px-0">
            WWith SolidScan, you can:
            <br>View Transactions: Check status, details, and history of any transaction.
            <br>Explore Addresses: Monitor wallet balances and activity live
            <br>Analyze Blocks: Access timestamps, validators, and transaction data</p>
          <p class="text-center text-gray-300 leading-[1.969rem] px-36 sm:text-sm lg:px-8 md:px-0">SolidScan combines ease
            of use with advanced features to make blockchain exploration seamless.</p>
        </div>
      </div>
      <div class="w-full rounded flex items-center justify-center md:px-0 overflow-hidden">
        <div class="w-[25%] md:w-2/3 sm:w-full xs:w-full">
          <Vue3Lottie loop :animation-data="explorer" height="100%" width="100%"/>
        </div>
      </div>
    </div>
  </section>
</template>