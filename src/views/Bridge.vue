<script setup lang="ts">
import Promo from "@/components/elements/Promo.vue";
import Calc from "@/components/elements/Calc.vue";
import SignUp from "@/components/home/SignUp.vue";
import Info from "@/components/elements/Info.vue";
import Content from "@/components/bridge/Content.vue";

const info = {
  title: `Solidton Bridge: Connect Blockchains, Expand Possibilities`,
  description: `Solidton Bridge is an innovative solution that enables seamless and secure asset transfers between different
            blockchains. It breaks down barriers and ensures full compatibility, granting access to new ecosystems and
            opportunities. With Solidton Bridge, you can transfer SON tokens or other digital assets between networks
            like Ethereum, Binance Smart Chain, and SolidChain without any hassle.`
}
</script>

<template>
  <div class="relative overflow-hidden pt-[80px]">
    <div class="absolute right-0 top-[-1300px] left-0 m-auto w-[1000px] h-[1000px] border-[3px] border-solid border-[#6299CD]
        z-[-5] rounded-full transform scale-[260%] blue-shadow lg:w-full"></div>
    <Promo title="Bridge"/>
    <Info :title="info.title"
          :description="info.description"/>
    <Calc/>
    <Content/>
    <SignUp/>
    <div class="flex w-full h-full absolute bg-black z-[-10] inset-0"/>
  </div>
</template>

<style lang="css">
.blue-shadow {
  box-shadow: -1px 64px 70px -6px rgba(24, 96, 165, 0.3);
}
</style>


