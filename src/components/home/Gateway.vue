<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import {Button} from "primevue";
</script>

<template>
  <section>
    <div class="container">
      <div class="flex justify-between py-32 items-center md:pb-8 md:pt-0 md:flex-col">
        <div class="w-[48.5%] pt-2 md:w-full md:mb-10">
          <h2 id="defi" class="text-[40px] text-color-gradient font-semibold pt-2 mb-10 pr-10 leading-[3.3rem]
                    md:text-[30px] sm:text-[25px] xs:text-[20px] sm:leading-snug lg:px-8 md:px-0">
            Solidton: Your Gateway to Advanced DeFi Solutions</h2>
          <div class="mb-16 pt-1 pb-2">
            <p class="text-white mb-8 leading-[31.5px] sm:leading-snug sm:text-sm">Solidton introduces innovative
              solutions in the
              field of decentralized finance,
              offering users modern tools for asset management and creating new opportunities.:</p>
            <p class="text-white pt-1 sm:leading-snug sm:text-sm">The ecosystem includes: </p>
            <ul class="text-blue-400 pl-4 mb-8 list-disc py-2 sm:text-sm">
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
        <div class="w-[50%] flex flex-col items-center pt-10 pl-4 md:pt-0 md:px-0 md:w-2/3 sm:w-3/4 xs:w-full">
          <div class="flex items-center justify-center w-full">
            <!--            <img src="@/assets/images/bridge-circle.png" alt="image">-->
            <Icon class="w-full h-full inline-flex" name="gateway"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>