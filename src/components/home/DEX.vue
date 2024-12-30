<script setup lang="ts">
import {Button} from "primevue";
</script>

<template>
  <section class="bg-black">
    <div class="container">
      <div class="flex pt-3 justify-between items-center pb-16">
        <div class="w-[40%] flex justify-center items-center pt-16">
          <img src="@/assets/images/DEX-map.png" alt="image">
        </div>
        <div class="w-[56%] pr-12 pb-4 pt-32 pl-1">
          <h2 class="text-[40px] text-color-gradient font-semibold pt-3 pr-8 mb-10 leading-[3.255rem]">Solidton DEX: Trade Freely Without Limits</h2>
          <div class="mb-14">
            <p class="text-white mb-6">Solidton DEX is a decentralized exchange allowing direct wallet-to-wallet
              trading on the TON blockchain, ensuring speed, security, and transparency.</p>
            <p class="text-white mb-6">With Solidton DEX, you get:</p>
            <ul class="text-white pl-4 mb-6">
              <li>Complete Control: Always own your assets—no third-party custody.</li>
              <li>Low Fees: Minimal costs thanks to TON’s efficiency.</li>
              <li>Advanced Tools: Use features like Pump Pad, Bridge, and Block Explorer for smooth trading.</li>
            </ul>
            <p class="text-white">Solidton DEX ensures open, secure, and accessible trading for everyone.</p>
          </div>
          <Button class="px-[3.75rem] py-4 text-white" severity="contrast" rounded label="Learn More"/>
        </div>
      </div>
    </div>
  </section>
</template>