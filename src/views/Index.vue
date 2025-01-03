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
</script>

<template>
    <div class="relative overflow-hidden">
        <div class="absolute right-[-16rem] top-[-16rem] z-[-1]">
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
        <div class="flex w-full h-full absolute bg-black z-[-10] inset-0"/>
    </div>
</template>
