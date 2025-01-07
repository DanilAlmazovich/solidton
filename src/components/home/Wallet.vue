<script setup lang="ts">
import {Button} from "primevue";
</script>

<template>
  <section id="wallet">
    <div class="container">
      <div class="flex pt-3 justify-between items-center pb-16">
        <div class="w-[37%] flex items-center justify-center">
<!--          <img src="@/assets/images/wallet-phone.png" alt="image">-->
            <video src="@/assets/video/wallet.webm" loop muted autoplay/>
        </div>
        <div class="w-[55%] pl-8 pr-12 pb-4">
          <h2 class="text-[36px] text-color-gradient font-semibold pt-1 pr-8 mb-10">SOLIDTON WALLET: Your Key to the Web3 Ecosystem</h2>
          <p class="text-white mb-14">SOLIDTON WALLET is a powerful non-custodial application that provides everything you need for
            managing digital assets. The app will be available for iPhone and Android, offering secure, fast, and
            reliable management of your digital assets</p>
          <Button class="px-14 py-4 text-white" severity="contrast" rounded label="Learn More"/>
        </div>
      </div>
    </div>
  </section>
</template>