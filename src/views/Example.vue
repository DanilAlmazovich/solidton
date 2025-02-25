<script setup lang="ts">
import {Vue3Lottie} from 'vue3-lottie'

import data1 from '@/animation-example/bridge.json'
import data2 from '@/animation-example/solid-trust-u.json'
import data4 from '@/animation-example/token-reception.json'
import data5 from '@/animation-example/purchase-process.json'
import data6 from '@/animation-example/staking-time.json'
import data7 from '@/animation-example/wallet-phone.json'
import data11 from '@/animation-example/11.json'
import data14 from '@/animation-example/bridge-page.json'
import data17 from '@/animation-example/17.json'
import data18 from '@/animation-example/geteway.json'
import data19 from '@/animation-example/19.json'
import data19s from '@/animation-example/19 (2).json'
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col items-center">
        <Vue3Lottie loop :animation-data="data1" height="100%" width="100%"/>
        <span class="text-xl">1</span>
      </div>
      <div class="flex flex-col items-center">
        <Vue3Lottie loop :animation-data="data2" height="100%" width="100%"/>
        <span class="text-xl">2</span>
      </div>
      <div class="flex flex-col items-center">
        <Vue3Lottie loop :animation-data="data4" height="100%" width="100%"/>
        <span class="text-xl">4</span>
      </div>
      <div class="flex flex-col items-center">
        <Vue3Lottie loop :animation-data="data5" height="100%" width="100%"/>
        <span class="text-xl">5</span>
      </div>
      <div class="flex flex-col items-center">
        <Vue3Lottie loop :animation-data="data6" height="100%" width="100%"/>
        <span class="text-xl">6</span>
      </div>
      <div class="flex flex-col items-center">
        <Vue3Lottie loop :animation-data="data7" height="100%" width="100%"/>
        <span class="text-xl">7</span>
      </div>
      <div class="flex flex-col items-center">
        <Vue3Lottie loop :animation-data="data11" height="100%" width="100%"/>
        <span class="text-xl">11</span>
      </div>
      <div class="flex flex-col items-center">
        <Vue3Lottie loop :animation-data="data14" height="100%" width="100%"/>
        <span class="text-xl">14</span>
      </div>
      <div class="flex flex-col items-center">
        <Vue3Lottie loop :animation-data="data17" height="100%" width="100%"/>
        <span class="text-xl">17</span>
      </div>
      <div class="flex flex-col items-center">
        <Vue3Lottie loop :animation-data="data18" height="100%" width="100%"/>
        <span class="text-xl">18</span>
      </div>
      <div class="flex flex-col items-center">
        <Vue3Lottie loop :animation-data="data19" height="100%" width="100%"/>
        <span class="text-xl">19</span>
      </div>
      <div class="flex flex-col items-center">
        <Vue3Lottie loop :animation-data="data19s" height="100%" width="100%"/>
        <span class="text-xl">19s</span>
      </div>
      <div><video src="@/animation-example/9th.webm" autoplay muted class="w-full h-auto"></video></div>
      <div><video src="@/animation-example/19th.webm" autoplay muted class="w-full h-auto"></video></div>
    </div>
  </div>
</template>