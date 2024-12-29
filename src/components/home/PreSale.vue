<script setup lang="ts">
import {ProgressBar} from "primevue";
import {ref} from "vue";

const barValue = ref(50)
</script>

<template>
  <section class="py-40 ">
    <div class="container">
      <div class="px-48">
        <h2 class="text-white text-[96px] text-center mb-16">Предпродажа</h2>
        <div class="grid grid-cols-[1fr_1.5fr] items-start mb-28">
          <div class="pr-16">
            <div class="bg-[#97B3EA1A]/10 border-[#C0CCF84D]/30 border border-solid rounded-[16px] w-auto mt-14 py-3 flex justify-center mb-10">
              <span class="text-white text-[32px]">Этап 1</span>
            </div>
            <img src="@/assets/images/pre-sale.png" alt="">
          </div>
          <div class="pl-24">
            <span class="text-xl text-white ">Срок Этапа 1</span>
            <div class="flex items-center gap-5 pt-2 mb-16">
              <div class="border border-white border-solid flex flex-col items-center justify-center blue-white-gradient rounded-[16px] w-[100px] h-[80px]">
                <span class="text-white text-[35px] leading-none">02</span>
                <span class="text-white leading-none">Дня</span>
              </div>
              <span class="text-2xl text-white">:</span>
              <div class="border border-white border-solid flex flex-col items-center justify-center blue-white-gradient rounded-[16px] w-[100px] h-[80px]">
                <span class="text-white text-[35px] leading-none">01</span>
                <span class="text-white leading-none">Час</span>
              </div>
              <span class="text-2xl text-white">:</span>
              <div class="border border-white border-solid flex flex-col items-center justify-center blue-white-gradient rounded-[16px] w-[100px] h-[80px]">
                <span class="text-white text-[35px] leading-none">24</span>
                <span class="text-white leading-none">Мин</span>
              </div>
              <span class="text-2xl text-white">:</span>
              <div class="border border-white border-solid flex flex-col items-center justify-center blue-white-gradient rounded-[16px] w-[100px] h-[80px]">
                <span class="text-white text-[35px] leading-none">27</span>
                <span class="text-white leading-none">Сек</span>
              </div>
            </div>
            <ProgressBar :value="barValue" :show-value="false" class="h-4 bg-[#30374F] mb-7"/>
            <div class="bg-[#97B3EA1A]/10 border-[#C0CCF84D]/30 border border-solid rounded-[16px] py-8 px-12">
              <div class="border-b border-solid border-white/30 flex justify-between py-2 mb-2">
                <span class="text-blue-200 text-sm">1 SON</span>
                <span class="text-blue-300 text-sm">$0.01</span>
              </div>
              <div class="border-b border-solid border-white/30 flex justify-between py-2 mb-2.5">
                <span class="text-blue-200 text-sm">Цена следующего этапа</span>
                <span class="text-blue-300 text-sm">$0.02</span>
              </div>
              <div class="border-b border-solid border-white/30 flex justify-between py-2 mb-2.5">
                <span class="text-blue-200 text-sm">Собрано USDT/USD</span>
                <span class="text-blue-300 text-sm">9 956 / 400 000</span>
              </div>
              <div class="border-b border-solid border-white/30 flex justify-between py-2 mb-2.5">
                <span class="text-blue-200 text-sm">Продано токенов</span>
                <span class="text-blue-300 text-sm">995 602 / 40 000 000</span>
              </div>
              <div class="border-b border-solid border-white/30 flex justify-between py-2 mb-2">
                <span class="text-blue-200 text-sm">Всего токенов</span>
                <span class="text-blue-300 text-sm">639 004 398 / 640 000 000</span>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-5 gap-6 pt-1 px-28">
          <div class="flex justify-center border border-solid border-[#C0CCF84D]/30 bg-[#97B3EA1A]/10 inner-shadow rounded-[12px]">
            <img class="inline-flex w-[29px] h-[29px]" src="@/assets/images/coins.png" alt="">
          </div>
          <div class="flex justify-center border border-solid border-[#C0CCF84D]/30 bg-[#97B3EA1A]/10 inner-shadow rounded-[12px]">
            <img class="inline-flex w-[23px] h-[23px]" src="@/assets/images/tether.png" alt="">
          </div>
          <div class="flex justify-center border border-solid border-[#C0CCF84D]/30 bg-[#97B3EA1A]/10 inner-shadow rounded-[12px]">
            <img  class="inline-flex w-[23px] h-[23px]" src="@/assets/images/bitcoin-logo.png" alt="">
          </div>
          <div class="flex justify-center border border-solid border-[#C0CCF84D]/30 bg-[#97B3EA1A]/10 inner-shadow rounded-[12px]">
            <img class="inline-flex w-[66px] h-[28px]" src="@/assets/images/visa.png" alt="">
          </div>
          <div class="flex justify-center border border-solid border-[#C0CCF84D]/30 bg-[#97B3EA1A]/10 inner-shadow rounded-[12px]">
            <span>Дебетовая карта</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="css">
  .blue-white-gradient {
    background: linear-gradient(180deg, #58AFFF 0%, #5298FA 32%, #4467EF 100%);
  }
  .inner-shadow {
    box-shadow: inset 0 0 14.4px rgba(102, 181, 255, 0.7);
    //backdrop-filter: blur(9.75px);
  }
</style>
<style lang="css">
.p-progressbar-value {
  background: linear-gradient(90deg, #66B5FF 0%, #4467EF 100%);
}

</style>