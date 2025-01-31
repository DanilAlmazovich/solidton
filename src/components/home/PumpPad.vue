<script setup lang="ts">
import pumpPad from "@/assets/animations/pump-pad.json";
import {Vue3Lottie} from "vue3-lottie";
</script>

<template>
  <section>
    <div class="container">
      <div class="pt-10 md:pt-8" v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }">
        <div class="flex justify-center flex-col px-40 mb-4 md:px-0 lg:px-8 xl:px-10">
          <h2 id="pump-pad" class="text-[36px] text-color-gradient font-semibold mb-10 md:text-[30px]
                    sm:text-[25px] xs:text-[20px] xs:mb-4 sm:leading-snug text-center">
            Solidton Pump Pad: Launch Your Tokens with Confidence</h2>
          <p class="text-center text-gray-300 px-36 leading-[1.969rem] mb-10 sm:text-sm lg:px-8 md:px-0">
            Solidton Pump Pad is a cutting-edge platform for launching and promoting tokens within the Solidton
            ecosystem,
            powered by the TON blockchain.</p>
          <p class="text-center text-blue-400 leading-[1.969rem] px-56 mb-6 sm:text-sm lg:px-8 md:px-0">
            With Solidton Pump Pad, you can: Launch Tokens: Easily bring your tokens to market with ecosystem support.
            Attract Investors: Use promotional tools to gain visibility and early backers.
            Strategize Growth: Leverage analytics to enhance token performance and engagement.</p>
          <p class="text-center text-gray-300 leading-[1.969rem] px-36 sm:text-sm lg:px-8 md:px-0">Solidton Pump Pad
            transforms your ideas into
            thriving blockchain projects.</p>
        </div>
      </div>
      <div v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }"
           class="w-full rounded flex items-center justify-center md:px-0 overflow-hidden">
        <div class="w-[28%] md:w-2/3 sm:w-full xs:w-full">
          <Vue3Lottie loop :animation-data="pumpPad" height="100%" width="100%"/>
        </div>
      </div>
    </div>
  </section>
</template>