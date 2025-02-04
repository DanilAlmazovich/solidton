<script setup lang="ts">

const props = defineProps({
  content: {
    type: Object
  },
  title: {
    type: String
  }
})
</script>

<template>
  <div class="mb-20 lg:px-0">
    <h2 v-scroll-reveal class="text-[36px] font-semibold text-color-gradient leading-[3.255rem] text-center mb-14 lg:text-[30px]
        lg:leading-[2.5rem] sm:text-[20px] lg:mb-8">{{ title }}</h2>
    <div
        class="grid grid-cols-3 gap-x-10 gap-y-6 py-14 md:py-8 md:gap-x-6 md:gap-y-10 md:grid-cols-2 sm:grid-cols-1 sm:py-4">
      <div v-for="item in content" class="bg-[#020202] rounded-[20px] border border-solid border-[#323232] py-8 px-6 md:py-6 md:px-4">
        <h6 class="font-semibold text-[24px] text-white mb-4 lg:text-xl md:text-lg">{{ item.title }}</h6>
        <ul class="pl-3 text-white list-disc">
          <li class="text-base text-white md:text-sm" v-for="list in item.descriptions">
            {{ list }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>