<script setup lang="ts">
import Promo from "@/components/home/Promo.vue";
import Wallet from "@/components/home/Wallet.vue";
import Staking from "@/components/home/Staking.vue";
import DEX from "@/components/home/DEX.vue";
import Bridge from "@/components/home/Bridge.vue";
import Explorer from "@/components/home/Explorer.vue";
import PumpPad from "@/components/home/PumpPad.vue";
import TON from "@/components/home/TON.vue";
import Gateway from "@/components/home/Gateway.vue";
import SolidTrust from "@/components/home/SolidTrust.vue";
import Tokenomics from "@/components/home/Tokenomics.vue";
import Roadmap from "@/components/home/Roadmap.vue";
import Partners from "@/components/home/Partners.vue";
import QA from "@/components/home/QA.vue";
import SignUp from "@/components/home/SignUp.vue";

import {Vue3Lottie} from 'vue3-lottie'
import promoAnimation from '@/assets/animations/promo.json'

</script>

<template>

  <div class="relative overflow-hidden pt-[80px]">
    <div class="absolute right-[-2rem] top-[6rem] z-[-2] w-[57%] xl:top-[10rem] xl:right-[-0rem] md:hidden lg:">
      <div class="w-[860px] h-[860px] xl:w-[650px] xl:h-[650px] lg:w-[540px] lg:h-[540px]">
        <Vue3Lottie class="w-full h-auto" loop :animation-data="promoAnimation"/>
      </div>
      <!--            <video src="@/assets/video/promo.webm" playsinline autoplay muted loop/>-->
    </div>
    <Promo/>
    <Wallet/>
    <Staking/>
    <DEX/>
    <Bridge/>
    <Explorer/>
    <PumpPad/>
    <TON/>
    <Gateway/>
    <SolidTrust/>
    <div class="relative w-full h-full">
        <Tokenomics/>
        <div class="absolute left-0 right-0 top-[-10rem] w-full h-auto z-[-2] md:top-[-5rem] sm:top-0">
          <img class="w-full h-auto" src="@/assets/images/gradient-blue-top.png" alt="image">
        </div>
        <div
            class="absolute left-0 right-0 m-auto top-0 h-full z-[-1] flex items-center justify-center py-[19rem] md:py-[10rem] rounded">
          <div class="w-full h-[100%] transform scale-x-[180%] bg-black rounded-full"/>
        </div>
        <div class="absolute left-0 right-0 bottom-[-15rem] w-full h-auto z-[-2] md:bottom-[-5rem] sm:bottom-0">
          <img class="w-full h-auto transform rotate-180" src="@/assets/images/gradient-blue-top.png" alt="image">
        </div>
      </div>
    <Roadmap/>
    <Partners/>
    <QA/>
    <SignUp/>
    <div class="flex w-full h-full absolute bg-black z-[-10] inset-0"/>
  </div>
</template>


