<script setup lang="ts">
import {Button, Slider, InputText} from "primevue";
import {ref} from "vue";
import Icon from "@/components/Icon.vue";

const selected = ref('ton')

const select = (value) => {
  selected.value = value
}

const sliderValue = ref(50)
</script>

<template>
  <section class="mb-10">
    <div class="container">
      <div class="px-[105px] lg:px-0">
        <div class="flex items-center justify-between mb-6 sm:flex-col">
          <div class="flex items-center gap-6 sm:mb-6 sm:flex-wrap md:gap-4">
            <div class="flex flex-col">
              <span class="text-sm text-[#909090] md:text-xs">USDT Raised</span>
              <span class="text-[28px] md:text-lg sm:text-sm xs:text-xs font-extrabold">$13,244,539.76</span>
            </div>
            <div class="gradient-vertical-line sm:hidden"></div>
            <div class="flex flex-col">
              <span class="text-sm text-[#909090] md:text-xs">SON Balance</span>
              <span class="text-[28px] md:text-lg sm:text-sm xs:text-xs font-extrabold">0 ($0.00)</span>
            </div>
            <div class="gradient-vertical-line sm:hidden"></div>
            <div class="flex flex-col">
              <span class="text-sm text-[#909090] md:text-xs">Holders</span>
              <span class="text-[28px] md:text-lg sm:text-sm xs:text-xs font-extrabold">20,360</span>
            </div>
          </div>
          <Button label="Buy" class="button-blue-gradient sm:w-4/5" size="small"/>
        </div>
        <div class="bg-gray-700 border border-solid border-[#323232] rounded-3xl px-20 pt-12 pb-10 md:px-6 sm:px-4">
          <div class="flex justify-between mb-6 items-center sm:flex-col sm:mb-8 sm:gap-2">
            <div class="flex items-center gap-2">
              <div class="flex items-center gap-3">
                <span class="w-[32px] h-[32px] md:w-[20px] md:h-[20px]">
                  <img class="w-full h-full object-contain"
                       src="@/assets/images/presale/son.png"
                       alt="image">
                </span>
                <span class="text-xl font-bold md:text-base">1 SON</span>
              </div>
              <span class="text-xl font-bold md:text-base">=</span>
              <div class="flex items-center gap-2">
                <span class="w-[32px] h-[32px] md:w-[20px] md:h-[20px]">
                  <img class="w-full h-full object-contain"
                       src="@/assets/images/presale/dollar.png"
                       alt="image">
                </span>
                <span class="text-xl font-bold md:text-base">0.0342374 USD</span>
              </div>
            </div>
            <div class="flex">
              <span class="text-white font-bold text-xl md:text-sm sm:text-xs">10% <span class="font-base">Increase On Next Phase</span></span>
            </div>
          </div>
          <div class="mb-4">
            <Slider class="slider-custom" v-model="sliderValue"/>
            <div class="flex justify-center pt-4">
              <div class="bg-[#202020] flex items-center rounded-xl pt-6 px-8 pb-8 gap-2 md:pb-6">
<!--                <span class="w-[24px] h-[24px] md:w-[20px] md:h-[20px]">-->
<!--                  <img src="@/assets/images/presale/son.png" alt="image">-->
<!--                </span>-->
                <span class="font-bold text-white text-sm">359,820,235 SON</span>
              </div>
            </div>
          </div>
          <div class="py-2 mb-3">
            <h6 class="text-xl text-white font-bold text-center w-full md:text-base">Step 1
              <span class="font-base text-gray-300 md:text-sm"> - Select the payment method</span></h6>
            <div class="grid grid-cols-3 gap-x-4 gap-y-3 py-4 sm:grid-cols-2 sm:gap-2">
              <div
                  class="border border-solid border-[#2F2F2F] flex items-center bg-gray-700 rounded-full px-2 py-1.5 gap-3">
                <span class="w-[41.5px] h-[41.5px] md:w-[25px] md:h-[25px]">
                  <img src="@/assets/images/presale/eth.png" alt="image" class="w-full h-full object-contain">
                </span>
                <div class="flex flex-col">
                  <span class="text-base font-bold text-white md:text-sm">ETH</span>
                  <span class="text-gray-300 font-bold text-xs">ERC-20</span>
                </div>
              </div>
              <div
                  class="border border-solid border-[#2F2F2F] flex items-center bg-gray-700 rounded-full px-2 py-1.5 gap-3">
                <span class="w-[41.5px] h-[41.5px] md:w-[25px] md:h-[25px]">
                  <img src="@/assets/images/presale/bnb.png" alt="image" class="w-full h-full object-contain">
                </span>
                <div class="flex flex-col">
                  <span class="text-base font-bold text-white md:text-sm">BNB</span>
                  <span class="text-gray-300 font-bold text-xs">BEP-20</span>
                </div>
              </div>
              <div
                  class="border border-solid border-[#2F2F2F] flex items-center bg-gray-700 rounded-full px-2 py-1.5 gap-3">
                <span class="w-[41.5px] h-[41.5px] md:w-[25px] md:h-[25px]">
                  <img src="@/assets/images/presale/trx.png" alt="image" class="w-full h-full object-contain">
                </span>
                <div class="flex flex-col">
                  <span class="text-base font-bold text-white md:text-sm">TRX</span>
                  <span class="text-gray-300 font-bold text-xs">TRC-20</span>
                </div>
              </div>
              <div
                  class="border border-solid border-[#2F2F2F] flex items-center bg-gray-700 rounded-full px-2 py-1.5 gap-3">
                <span class="w-[41.5px] h-[41.5px] md:w-[25px] md:h-[25px]">
                  <img src="@/assets/images/presale/btc.png" alt="image" class="w-full h-full object-contain">
                </span>
                <div class="flex flex-col">
                  <span class="text-base font-bold text-white md:text-sm">BTC</span>
                  <span class="text-gray-300 font-bold text-xs">Bitcoin</span>
                </div>
              </div>
              <div
                  class="border border-solid border-[#2F2F2F] flex items-center bg-gray-700 rounded-full px-2 py-1.5 gap-3">
                <span class="w-[41.5px] h-[41.5px] md:w-[25px] md:h-[25px]">
                  <img src="@/assets/images/presale/sol.png" alt="image" class="w-full h-full object-contain">
                </span>
                <div class="flex flex-col">
                  <span class="text-base font-bold text-white md:text-sm">SOL</span>
                  <span class="text-gray-300 font-bold text-xs">Solana</span>
                </div>
              </div>
              <div
                  class="border border-solid border-[#2F2F2F] flex items-center bg-gray-700 rounded-full px-2 py-1.5 gap-3">
                <span class="font-semibold text-white pl-2">More</span>
              </div>
            </div>
          </div>
          <div class="py-2 mb-4">
            <h6 class="text-xl text-white font-bold text-center w-full md:text-base">Step 2
              <span
                  class="font-base text-gray-300 md:text-sm"> - Enter the amount of token you would like to purchase</span>
            </h6>
            <div class="flex justify-between items-center pt-4 sm:flex-col sm:gap-2">
              <div
                  class="border border-solid border-[#2F2F2F] flex items-center rounded-full w-[45%] bg-[#070707] sm:w-full">
                <InputText
                    class="rounded-full border-none outline-none shadow-none py-3 px-6 bg-transparent w-[75%] sm:w-full md:text-sm md:py-2"/>
                <div class="flex items-center justify-end w-[25%] md:w-auto pr-4 gap-2 ">
                  <span class="font-bold text-white md:text-sm">ETH</span>
                  <span class="w-[32px] h-[32px] md:w-[20px] md:h-[20px] flex">
                    <img src="@/assets/images/presale/eth.png" class="object-contain w-full h-full" alt="image">
                  </span>
                </div>
              </div>
              <Icon name="equals" class="md:w-4"/>
              <div
                  class="border border-solid border-[#2F2F2F] flex items-center rounded-full w-[45%] bg-[#070707] sm:w-full">
                <InputText
                    class="rounded-full border-none outline-none shadow-none py-3 px-6 bg-transparent w-[75%] sm:w-full md:text-sm md:py-2"/>
                <div class="flex items-center justify-end w-[25%] md:w-auto pr-4 gap-2 ">
                  <span class="font-bold text-white md:text-sm">SON</span>
                  <span class="w-[32px] h-[32px] md:w-[20px] md:h-[20px] flex">
                    <img src="@/assets/images/presale/son.png" class="object-contain w-full h-full"
                         alt="image">
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center py-8">
            <Button label="Connect Wallet"
                    class="bg-gray-700 button-dark-shadow rounded-full px-24 text-white md:text-sm md:px-10 connect-wallet-btn"
                    size="large"/>
          </div>
          <div class="flex justify-center pt-4">
            <router-link to="#" class="text-gray-300 text-lg flex items-center gap-2 md:text-sm">
              <span>How to buy?</span>
              <Icon name="long-arrow"/>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css">
.slider-custom.p-slider {
  background: #66B5FF54;
  height: 20px;
  border-radius: 100px;
  border: 5px solid transparent;
}

.slider-custom.p-slider .p-slider-range {
  height: 10px;
  border-radius: 100px;
  background: linear-gradient(90deg, #85FAEB 0%, #44D0EF 100%);
}

.slider-custom.p-slider .p-slider-handle {
  width: 40px;
  height: 40px;
  top: -7px;
}

.slider-custom.p-slider .p-slider-handle:before {
  background: url("@/assets/images/presale/son.png") center no-repeat;
  -webkit-background-size: 40px 40px;
  background-size: 40px 40px;
  width: 100%;
  height: 100%;
}

.button-dark-shadow {
  box-shadow: 0px 4px 4px 0px #00000040;
}
.connect-wallet-btn {
  background: linear-gradient(90deg, #0033FF 0%, #44D0EF 100%);
}

.button-blue-gradient {
  @apply px-14 py-4 text-white lg:px-8 lg:py-3 lg:text-base
  sm:text-sm sm:py-2 bg-black border-2 border-solid rounded-full font-semibold;
  background: linear-gradient(black, black) padding-box,
  linear-gradient(91.57deg, #0033FF 1.33%, #44D0EF 96.99%) border-box;
  border: 2px solid transparent;
}
.gradient-vertical-line {
  height: 37px;
  width: 1px;
  background: linear-gradient(90deg, #44D0EF 0%, #0033FF 100%);
}
</style>
