<script setup lang="ts">
import Content from "@/components/solid-scan/Content.vue";
import SignUp from "@/components/home/SignUp.vue";
import Info from "@/components/elements/Info.vue";
import Promo from "@/components/elements/Promo.vue";
import SolidScan from "@/assets/animations/solid-scan.json";

const info = {
  title: `SolidScan is a powerful tool for tracking transactions`,
  description: `exploring the blockchain, and ensuring full transparency within the SolidChain network This solution
  is designed to make blockchain data management as simple, convenient, and accessible as possible for every user.`
}
</script>

<template>
  <div class="relative overflow-hidden pt-[80px]">
    <div class="absolute right-0 top-[-1300px] left-0 m-auto w-[1000px] h-[1000px] border-[3px] border-solid border-[#6299CD]
        z-[-5] rounded-full transform scale-[260%] blue-shadow lg:w-full"></div>
    <Promo title="SolidScan" second-title="Transparency at Your Fingertips"/>
    <Info :title="info.title"
          :logo="SolidScan"
          :description="info.description"/>
    <Content/>
    <SignUp/>
    <div class="flex w-full h-full absolute bg-black z-[-10] inset-0"/>
  </div>
</template>