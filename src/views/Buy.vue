<script setup lang="ts">
import Promo from "@/components/elements/Promo.vue";
import CalcBuy from "@/components/elements/CalcBuy.vue";
</script>

<template>
  <div class="relative overflow-hidden pt-[80px]">
    <div class="absolute right-0 top-[-1300px] left-0 m-auto w-[1000px] h-[1000px] border-[3px] border-solid border-[#6299CD]
        z-[-5] rounded-full transform scale-[260%] blue-shadow lg:w-full"/>
    <Promo title="Presale 13" second-title="Next phase begins in"/>
    <CalcBuy />
    <div class="flex w-full h-full absolute bg-black z-[-10] inset-0"/>
  </div>
</template>

<style lang="css">
.blue-shadow {
  box-shadow: -1px 64px 70px -6px rgba(24, 96, 165, 0.3);
}
</style>
