<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import {Button} from "primevue";
</script>

<template>
  <section>
    <div class="container">
      <div class="flex justify-between pt-24 items-center md:pt-0 md:flex-col">
        <div class="w-[55%] md:w-full">
          <h2 id="defi"
              v-scroll-reveal
              class="text-[36px] text-color-gradient font-semibold mb-10 md:text-[30px]
                    sm:text-[20px] xs:text-[20px] xs:mb-4 sm:leading-snug">
            Solidton: Your Gateway to Advanced DeFi Solutions</h2>
          <div class="mb-10 pt-1 pb-2">
            <p class="text-white mb-6 leading-[31.5px] sm:leading-snug sm:text-sm">Solidton introduces innovative
              solutions in the
              field of decentralized finance,
              offering users modern tools for asset management and creating new opportunities.:</p>
            <p class="text-white pt-1 sm:leading-snug sm:text-sm">The ecosystem includes: </p>
            <ul class="text-blue-400 pl-4 mb-6 list-disc py-2 sm:text-sm">
              <li class="mb-1.5">Staking — to earn rewards.</li>
              <li class="mb-1.5">P2P Lending — direct financial transactions between users.</li>
              <li class="mb-1.5">Liquidity Management — creating pools and participating in decentralized
                exchanges.
              </li>
            </ul>
            <p class="text-white leading-[31.5px] sm:leading-snug sm:text-sm">Solidton opens new horizons in the world
              of DeFi,
              providing freedom, control,
              and growth for every user.</p>
          </div>
          <Button class="button-base" severity="contrast" rounded label="Learn more"/>
        </div>
        <div class="w-[44%] flex flex-col items-center pl-20 md:px-0 md:w-2/3 sm:w-full xs:w-full md:pt-10">
          <div class="flex items-center justify-center w-full">
            <Icon class="w-full h-full inline-flex" name="gateway"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>