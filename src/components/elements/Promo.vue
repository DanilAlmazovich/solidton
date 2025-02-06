<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  secondTitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section>
    <div class="container">
      <div class="flex justify-center">
        <div class="flex flex-col items-center py-28 mb-10">
          <h1 v-scroll-reveal class="text-[64px] font-extrabold text-color-gradient text-center leading-none mb-4
          lg:text-[45px] lg:leading-[2.5rem] sm:text-[30px]">
            {{ props.title }}</h1>
          <span class="text-xs uppercase">{{ props.secondTitle }}</span>
          <div class="flex justify-center items-center gap-24 py-10 sm:gap-16 xs:gap-10">
            <div class="flex flex-col items-center">
              <span class="text-white font-bold text-[36px] lg:text-[35px] sm:text-[30px]">3</span>
              <span class="text-white font-bold text-xs">Days</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-white font-bold text-[36px] lg:text-[35px] sm:text-[30px]">15</span>
              <span class="text-white font-bold text-xs">Hours</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-white font-bold text-[36px] lg:text-[35px] sm:text-[30px]">27</span>
              <span class="text-white font-bold text-xs">Minutes</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-white font-bold text-[36px] lg:text-[35px] sm:text-[30px]">25</span>
              <span class="text-white font-bold text-xs">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
