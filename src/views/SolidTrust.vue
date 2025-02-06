<script setup lang="ts">
import Promo from "@/components/elements/Promo.vue";
import SignUp from "@/components/home/SignUp.vue";
import Info from "@/components/elements/Info.vue";
import Content from "@/components/solid-trust/Content.vue";
import solidTrust from "@/assets/animations/solid-trust.json"

const info = {
  title: `What is SolidTrust?`,
  description: `SolidTrust is the world’s first fully automated and decentralized trust system integrated into
  the SolidChain blockchain. It is designed to address the key challenges of the crypto industry: lack of trust,
  fraud risks, and insufficient transparency. <br>
  The SolidTrust system automatically analyzes the activities of users, projects, and tokens within the network
  and assigns them a SolidScore—a trust rating updated in real time. SolidTrust ensures safe, transparent, and
  convenient interaction for all ecosystem participants.
`
}
</script>

<template>
  <div class="relative overflow-hidden pt-[80px]">
    <div class="absolute right-0 top-[-1300px] left-0 m-auto w-[1000px] h-[1000px] border-[3px] border-solid border-[#6299CD]
        z-[-5] rounded-full transform scale-[260%] blue-shadow lg:w-full"></div>
    <Promo title="SolidTrust"
           second-title="The Trust System for the SolidChain Blockchain"/>
    <Info :title="info.title"
          :logo="solidTrust"
          :description="info.description"/>
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
