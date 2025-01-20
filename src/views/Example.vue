<script setup lang="ts">
import {Vue3Lottie} from 'vue3-lottie'
import data from "@/animation-example/data.json";
import data1 from "@/animation-example/1st.json";
import data2 from "@/animation-example/2dn.json";
import data3 from "@/animation-example/3rd.json";
import data4 from "@/animation-example/4th.json";
import data5 from "@/animation-example/5th.json";
import data6 from "@/animation-example/6th.json";
import data7 from "@/animation-example/7th.json";
import data8 from "@/animation-example/8th.json";
import data9 from "@/animation-example/9th.json";
import data10 from "@/animation-example/10th.json";
import data12 from "@/animation-example/12th.json";
import data13 from "@/animation-example/13th.json";
import data14 from "@/animation-example/14th.json";
import data15 from "@/animation-example/15th.json";
import data16 from "@/animation-example/16th.json";
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-2 gap-8">
      <div>
        <Vue3Lottie loop :animation-data="data" height="100%" width="100%"/>
      </div>
      <div>
        <Vue3Lottie loop :animation-data="data1" height="100%" width="100%"/>
      </div>
      <div>
        <Vue3Lottie loop :animation-data="data2" height="100%" width="100%"/>
      </div>
      <div>
        <Vue3Lottie loop :animation-data="data3" height="100%" width="100%"/>
      </div>
      <div>
        <Vue3Lottie loop :animation-data="data4" height="100%" width="100%"/>
      </div>
<!--      <div>-->
<!--        <Vue3Lottie loop :animation-data="data5" height="100%" width="100%"/>-->
<!--      </div>-->
<!--      <div>-->
<!--        <Vue3Lottie loop :animation-data="data6" height="100%" width="100%"/>-->
<!--      </div>-->
<!--      <div>-->
<!--        <Vue3Lottie loop :animation-data="data7" height="100%" width="100%"/>-->
<!--      </div>-->
<!--      <div>-->
<!--        <Vue3Lottie loop :animation-data="data8" height="100%" width="100%"/>-->
<!--      </div>-->
<!--      <div>-->
<!--        <Vue3Lottie loop :animation-data="data9" height="100%" width="100%"/>-->
<!--      </div>-->
<!--      <div>-->
<!--        <Vue3Lottie loop :animation-data="data10" height="100%" width="100%"/>-->
<!--      </div>-->
<!--      <div>-->
<!--        <Vue3Lottie loop :animation-data="data12" height="100%" width="100%"/>-->
<!--      </div>-->
<!--      <div>-->
<!--        <Vue3Lottie loop :animation-data="data13" height="100%" width="100%"/>-->
<!--      </div>-->
<!--      <div>-->
<!--        <Vue3Lottie loop :animation-data="data14" height="100%" width="100%"/>-->
<!--      </div>-->
<!--      <div>-->
<!--        <Vue3Lottie loop :animation-data="data15" height="100%" width="100%"/>-->
<!--      </div>-->
<!--      <div>-->
<!--        <Vue3Lottie :animation-data="data16" />-->
<!--      </div>-->
    </div>
  </div>
</template>