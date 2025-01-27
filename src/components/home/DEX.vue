<script setup lang="ts">
import {Button} from "primevue";
</script>

<template>
  <section v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }">
    <div class="container">
      <div class="flex pt-3 justify-between items-center pb-16 md:flex-col-reverse">
        <div
            class="w-[40%] flex justify-center items-center overflow-hidden
          pt-16 md:w-3/4 sm:w-full md:pt-0 xs:w-full md:h-[438px] sm:h-[404px]">
          <!--          <video class="w-full h-full object-contain md:transform md:scale-[120%]" src="@/assets/video/dex.webm" playsinline loop autoplay muted/>-->
        </div>
        <div class="w-[56%] pr-12 pb-4 pt-32 pl-1 md:w-full md:px-0 lg:pt-8">
          <h2 id="dex" class="text-[40px] text-color-gradient font-semibold pt-3 pr-8 mb-10 leading-[3.255rem] pt-2
                    mb-10 pr-6 leading-[3.3rem] md:text-[30px] sm:text-[25px] xs:text-[20px] sm:leading-snug">
            Solidton DEX: Trade Freely Without Limits</h2>
          <div class="mb-14">
            <p class="text-white mb-6 sm:text-sm">Solidton DEX is a decentralized exchange allowing direct
              wallet-to-wallet
              trading on the TON blockchain, ensuring speed, security, and transparency.</p>
            <p class="text-white mb-6 md:text-sm">With Solidton DEX, you get:</p>
            <ul class="text-white pl-4 mb-6 sm:text-sm list-disc">
              <li>Complete Control: Always own your assets—no third-party custody.</li>
              <li>Low Fees: Minimal costs thanks to TON’s efficiency.</li>
              <li>Advanced Tools: Use features like Pump Pad, Bridge, and Block Explorer for smooth
                trading.
              </li>
            </ul>
            <p class="text-white sm:text-sm">Solidton DEX ensures open, secure, and accessible trading for
              everyone.</p>
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