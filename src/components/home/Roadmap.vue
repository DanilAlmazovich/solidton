<script setup lang="ts">

import {Button} from "primevue";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

// Import Swiper Vue.js elements
import {Swiper, SwiperSlide} from 'swiper/vue';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const modules = [Pagination]
</script>

<template>
  <section class="w-full pb-[8rem] md:pb-2">
    <div class="container">
      <div class="pt-24">
        <h2 id="roadmap" class="text-color-gradient font-bold text-[48px] text-center mb-6 py-1 md:text-[30px]
          sm:text-[25px] xs:text-[20px] sm:leading-snug">Roadmap</h2>
      </div>
    </div>
    <div class="pt-2 pb-16 mb-16 md:mb-4 md:pb-10">
      <Swiper
          :slidesPerView="'auto'"
          :initialSlide="2"
          loop
          :centeredSlides="true"
          :spaceBetween="30"
          :freeMode="true"
          :pagination="{
                        clickable: true,
                    }"
          :modules="modules"
      >
        <SwiperSlide v-for="n in 8" class="w-auto">
          <div class="w-[464px] h-auto py-8 px-6 rounded-xl bg-gray-400 md:py-6 md:px-4 md:w-[340px] xs:w-[300px]">
            <div class="flex flex-col items-center pb-4">
              <h5 class="text-center text-color-gradient font-bold text-[28px] md:text-[22px]">Q2 2024: April -
                June</h5>
              <h6 class="text-center text-white text-[26px] leading-[39px] font-medium md:text-lg">Team Establishment
                and
                Foundation Building</h6>
            </div>
            <img src="@/assets/images/slider-horizontal-divider.png" alt="slider">
            <div class="pt-6 px-2">
              <ul class="text-white pl-4 list-disc md:text-sm xs:text-xs">
                <li class="mb-2 sm:mb-1">Launch the whitelist website for early adopters.</li>
                <li class="mb-2 sm:mb-1">Begin drafting the Qubetics whitepaper.</li>
                <li class="mb-2 sm:mb-1">Conduct an interview with Web3TV to increase
                  visibility.
                </li>
                <li class="mb-2 sm:mb-1">Engage with key figures in the blockchain industry for
                  strategic insights.
                </li>
                <li class="mb-2 sm:mb-1">Partner with developers to begin the technical
                  groundwork.
                </li>
                <li class="mb-2 sm:mb-1">Design the ICO website.</li>
                <li class="mb-2 sm:mb-1">Develop and test a comprehensive marketing
                  strategy.
                </li>
                <li class="mb-2 sm:mb-1">Identify and define the scope of the Qubetics
                  blockchain.
                </li>
                <li class="mb-2 sm:mb-1">Initiate marketing efforts to raise awareness about
                  the whitelist.
                </li>
                <li class="mb-2 sm:mb-1">Publish articles and press releases to build initial
                  momentum.
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<style>
.swiper-slide {
  width: auto;
}

.swiper {
  overflow: visible;
}

.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: -3.6rem;
  @media screen and (max-width: 876px) {
    display: none;
  }
}

.swiper-pagination-bullet {
  width: 48px;
  height: 2px;
  background: white;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background: url("@/assets/images/horizontal-divider.png") no-repeat;
}
</style>