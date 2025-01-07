<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import {Button} from "primevue";
</script>

<template>
  <section id="defi">
    <div class="container">
      <div class="flex justify-between py-32 items-center">
        <div class="w-[48.5%] pt-2">
          <h2 class="text-[40px] text-color-gradient font-semibold pt-2 mb-10 pr-10 leading-[3.3rem]">Solidton: Your Gateway to Advanced DeFi Solutions  </h2>
          <div class="mb-16 pt-1 pb-2">
            <p class="text-white mb-8 leading-[31.5px]">Solidton introduces innovative solutions in the field of decentralized finance,
                offering users modern tools for asset management and creating new opportunities.:</p>
              <p class="text-white pt-1">The ecosystem includes:  </p>
            <ul class="text-blue-400 pl-4 mb-8 list-disc py-2">
              <li class="mb-1.5">Staking — to earn rewards.</li>
              <li class="mb-1.5">P2P Lending — direct financial transactions between users. </li>
              <li class="mb-1.5">Liquidity Management — creating pools and participating in decentralized exchanges.</li>
            </ul>
            <p class="text-white leading-[31.5px]">Solidton opens new horizons in the world of DeFi, providing freedom, control,
                and growth for every user.</p>
          </div>
          <Button class="px-[3.7rem] py-4 text-white" severity="contrast" rounded label="Learn more"/>
        </div>
        <div class="w-[50%] flex flex-col items-center pt-10 pl-4">
          <div class="flex items-center justify-center w-full">
<!--            <img src="@/assets/images/bridge-circle.png" alt="image">-->
              <Icon class="w-full h-full inline-flex" name="gateway"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>