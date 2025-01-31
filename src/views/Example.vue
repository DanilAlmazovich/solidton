<script setup lang="ts">
import {Vue3Lottie} from 'vue3-lottie'
import data1 from "@/animation-example/1.json";
import data2 from "@/animation-example/2.json";
import data3 from "@/animation-example/3.json";
import data4 from "@/animation-example/4.json";
import data5 from "@/animation-example/5.json";
import data6 from "@/animation-example/6.json";
import data7 from "@/animation-example/7.json";
import data9 from "@/animation-example/9.json";
// import data10 from "@/assets/animations/10.json";
import data11 from "@/animation-example/11.json";
import data12 from "@/animation-example/12.json";
import data13 from "@/animation-example/11 (2).json";
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-2 gap-8">
      <div>
        <Vue3Lottie loop :animation-data="data1" height="100%" width="100%"/>
      </div>
      <div>
        <Vue3Lottie loop :animation-data="data2" height="100%" width="100%"/>
      </div>
<!--      <div>-->
<!--        <Vue3Lottie loop :animation-data="data2" height="100%" width="100%"/>-->
<!--      </div>-->
      <div>
        <Vue3Lottie loop :animation-data="data3" height="100%" width="100%"/>
      </div>
      <div>
        <Vue3Lottie loop :animation-data="data4" height="100%" width="100%"/>
      </div>
      <div>
        <Vue3Lottie loop :animation-data="data5" height="100%" width="100%"/>
      </div>
      <div>
        <Vue3Lottie loop :animation-data="data6" height="100%" width="100%"/>
      </div>
      <div>
        <Vue3Lottie loop :animation-data="data7" height="100%" width="100%"/>
      </div>
      <div>
        <Vue3Lottie loop :animation-data="data11" height="100%" width="100%"/>
      </div>
      <div>
        <Vue3Lottie loop :animation-data="data9" height="100%" width="100%"/>
      </div>
<!--      <div>-->
<!--        <Vue3Lottie loop :animation-data="data10" height="100%" width="100%"/>-->
<!--      </div>-->
      <div>
        <Vue3Lottie loop :animation-data="data12" height="100%" width="100%"/>
      </div>
      <div>
        <Vue3Lottie loop :animation-data="data13" height="100%" width="100%"/>
      </div>
<!--      <div>-->
<!--        <Vue3Lottie loop :animation-data="data15" height="100%" width="100%"/>-->
<!--      </div>-->
<!--      <div>-->
<!--        <Vue3Lottie :animation-data="data16" />-->
<!--      </div>-->
    </div>
  </div>
</template>