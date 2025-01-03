<script setup lang="ts">

import {Button} from "primevue";
</script>

<template>
  <section>
    <div class="container">
      <div class="flex justify-between py-20 items-center">
        <div class="w-[55%] pt-20 pr-28">
          <h2 class="text-[40px] text-color-gradient font-semibold pt-2 mb-10 pr-6 leading-[3.3rem]">Solidton Staking: Multiply Your SON Tokens Effortlessly</h2>
          <p class="text-white mb-10"> Мелкий шрифт (подробности) Earn rewards by staking your SON tokens directly on the Solidton platform.
            Support the network, enhance its stability, and grow your assets with ease. Staking on Solidton is secure,
            efficient, and designed to maximize your returns while contributing to the ecosystem</p>
          <Button class="px-[4.5rem] py-4 text-white mt-1" severity="contrast" rounded label="Buy now"/>
        </div>
        <div class="w-[37%] pr-10 flex flex-col items-center">
          <div class="flex items-center justify-center mb-4">
              <video src="@/assets/video/staking.webm" loop autoplay muted/>
          </div>
          <div class="flex justify-center w-1/2 pl-5">
            <span class="text-white text-xs font-medium leading-snug">Try Me Experience a preview of our upcoming app's features!</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>