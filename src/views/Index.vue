<script setup lang="ts">
import Promo from "@/components/home/Promo.vue";
import PreSale from "@/components/home/PreSale.vue";
import Icon from "@/components/Icon.vue";
</script>

<template>
  <Promo/>
  <PreSale/>
  <div class="bg-blue-800 absolute w-full h-full top-0 left-0 z-[-5]"/>
  <div class="w-[235px] h-[536px] absolute top-[-210px] right-0 left-0 m-auto header-shadow z-[-4]"/>
  <div class="absolute w-full h-full left-0 top-[332px] z-[-4] flex justify-center">
    <Icon name="promo"/>
  </div>
</template>

<style scoped>

.header-shadow {
  filter: blur(160px);
  background: rgba(46, 152, 249, 0.8);
}
</style>
