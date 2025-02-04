<script setup lang="ts">
import Content from "@/components/solid-ramp/Content.vue";
import SignUp from "@/components/home/SignUp.vue";
import Info from "@/components/elements/Info.vue";
import Promo from "@/components/elements/Promo.vue";

const info = {
  title: `SolidRamp is an innovative platform `,
  description: `designed to help projects effectively launch and promote their
  tokens within the Solidton ecosystemBuilt on the SolidChain blockchain,
  SolidRamp provides all the necessary tools and resources for successful
  token launches and strategic growth.`
}
</script>

<template>
  <div class="relative overflow-hidden pt-[80px]">
    <div class="absolute right-0 top-[-1300px] left-0 m-auto w-[1000px] h-[1000px] border-[3px] border-solid border-[#6299CD]
        z-[-5] rounded-full transform scale-[260%] blue-shadow lg:w-full"></div>
    <Promo title="SolidRamp" second-title="Launch Your Tokens with Confidence"/>
    <Info :title="info.title"
          :description="info.description"/>
    <Content/>
    <SignUp/>
    <div class="flex w-full h-full absolute bg-black z-[-10] inset-0"/>
  </div>
</template>