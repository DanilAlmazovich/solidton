<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section class="mb-24">
    <div class="container">
      <div class="flex px-[105px] items-center lg:px-0 md:flex-col">
        <div class="w-[55%] md:w-full md:px-0 pr-4">
          <h2 class="text-[40px] text-color-gradient font-semibold pt-2 mb-8 pr-16 leading-[3.3rem] md:px-0 px-24 lg:px-0 lg:text-[30px]
          sm:text-[25px] xs:text-[20px] md:leading-snug sm:mb-6 sm:pt-0">
            {{ title }}
          </h2>
          <p class="text-white py-1 sm:text-sm"> {{ description }}
          </p>
        </div>
        <div class="w-[45%] md:w-full md:px-0 pl-6">
          <img class="w-full h-full object-contain" src="@/assets/images/bridge-circle.png" alt="img">
          <!--          <video src="@/assets/video/bridge.webm" muted autoplay playsinline/>-->
        </div>
      </div>
    </div>
  </section>
</template>


