<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import {Button} from "primevue";
</script>

<template>
  <section>
    <div class="container">
      <div class="flex justify-between py-32 items-center">
        <div class="w-[55%] pt-2">
          <h2 class="text-[40px] text-color-gradient font-semibold pt-2 mb-10 pr-24 leading-[3.3rem]">Solidton: Your Gateway
            <br>
            to Advanced DeFi Solutions</h2>
          <div class="mb-12">
            <p class="text-white mb-6">The integration of $TICS tokens with the soon-to-be-deployed USDC/USDT-backed
              QUSD, promotes market stability and accurate transaction reflections, enhancing user confidence.
              This strategic pairing is designed to increase demand for $TICS, fostering
              enhanced utility and usSolidton offers a comprehensive suite of DeFi (Decentralized Finance) features,
              providing users with innovative tools to manage their assets. The ecosystem includes:</p>
            <ul class="text-blue-400 pl-4 mb-6 list-disc">
              <li>Staking for earning rewards.</li>
              <li>P2P lending for direct financial transactions between users.</li>
              <li>Liquidity management through pools and exchange platforms.</li>
            </ul>
            <p class="text-white">Solidton DeFi is freedom, control, and new opportunities for every user.er engagement
              due to its security and potential.</p>
          </div>
          <Button class="px-[3.7rem] py-4 text-white" severity="contrast" rounded label="Learn more"/>
        </div>
        <div class="w-[40%] flex flex-col items-center pl-4 pt-10">
          <div class="flex items-center justify-center w-full">
<!--            <img src="@/assets/images/bridge-circle.png" alt="image">-->
              <Icon class="w-full h-full inline-flex" name="gateway"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>