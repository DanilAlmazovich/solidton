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
</script>

<template>
    <div class="relative overflow-hidden">
        <div class="absolute right-[-2rem] top-0 z-[-2] w-[58%]">
            <video src="@/assets/video/promo.webm" autoplay muted loop/>
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
            <div class="absolute left-0 right-0 top-[-10rem] w-full h-auto z-[-2]">
                <img class="w-full h-auto" src="@/assets/images/gradient-blue-top.png" alt="">
            </div>
            <div class="absolute left-0 right-0 m-auto top-0 h-full z-[-1] flex items-center justify-center pt-[19rem] pb-[4rem] rounded">
                <div class="w-full h-[100%] transform scale-x-[180%] bg-black rounded-full"></div>
            </div>
            <div class="absolute left-0 right-0 bottom-[-20rem] w-full h-auto z-[-2]">
                <img class="w-full h-auto" src="@/assets/images/gradient-blue-bottom.png" alt="">
            </div>
        </div>
        <Roadmap/>
        <Partners/>
        <QA/>
        <SignUp/>
        <div class="flex w-full h-full absolute bg-black z-[-10] inset-0"/>
    </div>
</template>


