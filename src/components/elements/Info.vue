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
      <div class="flex px-[105px] items-center">
        <div class="w-[55%] pr-4">
          <h2 class="text-[40px] text-color-gradient font-semibold pt-2 mb-8 pr-16 leading-[3.3rem]">
            {{ title }}
            </h2>
          <p class="text-white py-1"> {{ description }}
            </p>
        </div>
        <div class="w-[45%] pl-6">
          <img src="@/assets/images/bridge-circle.png" alt="img">
<!--          <video src="@/assets/video/bridge.webm" muted autoplay playsinline/>-->
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>

</style>


