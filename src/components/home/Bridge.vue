<script setup lang="ts">

import {Button} from "primevue";
</script>

<template>
  <section>
    <div class="container">
      <div class="flex justify-between py-16 items-center">
        <div class="w-[55%] pt-2 pl-4">
          <h2 class="text-[40px] text-color-gradient font-semibold pt-2 mb-10 pr-16 leading-[3.3rem]">Solidton Bridge: Connect Blockchains, Expand Possibilities</h2>
          <div class="mb-12">
            <p class="text-white mb-6">Solidton Bridge allows easy asset transfers between blockchains, enhancing interoperability.
              Transfer SON tokens or other assets to networks like Ethereum or Binance Smart Chain effortlessly</p>
            <span class="text-white">With Solidton Bridge, you get:</span>
            <ul class="text-white pl-4 mb-6">
              <li>Fast and secure cross-chain transfers.  </li>
              <li>Lower fees on cost-efficient blockchains.</li>
              <li>Access to dApps across multiple networks. </li>
            </ul>
            <p class="text-white">Unlock the freedom of multi-blockchain functionality with Solidton Bridge.</p>
          </div>
          <Button class="px-[3.7rem] py-4 text-white" severity="contrast" rounded label="Learn more"/>
        </div>
        <div class="w-[40%] flex flex-col items-center pl-4 pt-10">
          <div class="flex items-center justify-center">
              <video src="@/assets/video/bridge.webm" autoplay muted loop/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>