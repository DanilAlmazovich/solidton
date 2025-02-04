<script setup lang="ts">
import Promo from "@/components/elements/Promo.vue";
import Calc from "@/components/elements/Calc.vue";
import SignUp from "@/components/home/SignUp.vue";
import Info from "@/components/elements/Info.vue";
import Content from "@/components/solidton-wallet/Content.vue";

const info = {
  title: `SOLIDTON WALLET is`,
  description: `a cutting-edge non-custodial application that will operate on the SolidChain
  blockchain. This blockchain offers high speed, security, and scalability, ensuring the
  wallet functions efficiently and reliably.`
}
</script>

<template>
  <div class="relative overflow-hidden pt-[80px]">
    <div class="absolute right-0 top-[-1300px] left-0 m-auto w-[1000px] h-[1000px] border-[3px] border-solid border-[#6299CD]
        z-[-5] rounded-full transform scale-[260%] blue-shadow lg:w-full"></div>
    <Promo title="SOLIDTON WALLET"
           second-title="How SOLIDTON WALLET Will Operate on the SolidChain Blockchain"/>
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
