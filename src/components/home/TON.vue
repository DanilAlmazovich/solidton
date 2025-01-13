<script setup lang="ts">
import {Button} from "primevue";
</script>

<template>
  <section>
    <div class="container">
      <div class="flex justify-between items-center pt-8 md:flex-col-reverse md:pt-0">
        <div
            class="w-[50%] flex items-center justify-center pb-16 md:w-2/3 sm:w-full xs:w-full md:pb-2 overflow-hidden md:h-[400px] sm:h-[404px]">
          <!--          <img src="@/assets/images/TON-QR.png" alt="image">-->
<!--          <video class="w-full h-full object-contain sm:transform sm:scale-[120%]" src="@/assets/video/ton.webm"-->
<!--                 playsinline loop autoplay muted/>-->
        </div>
        <div class="w-[50%] pl-8 pb-4 md:w-full md:px-0 md:pb-0">
          <h2 class="text-[40px] text-color-gradient font-semibold pt-1 pr-8 mb-9 leading-[3.3rem]
                    md:text-[30px] sm:text-[25px] xs:text-[20px] sm:leading-snug lg:px-8 md:px-0">
            Solidton: From TON to Independent
            Powerhouse</h2>
          <p class="text-white mb-8 leading-[1.969rem] text-lg sm:text-sm sm:leading-snug">Initially built on the TON
            blockchain,
            Solidton has broken free to become an
            independent,
            powerful ecosystem of its own. Now, any developer can create their own token directly on the
            Solidton
            blockchain and become part of this thriving network.</p>
          <p class="text-white mb-8 leading-[1.969rem] text-lg sm:text-sm sm:leading-snug">Solidton not only provides a
            robust and
            scalable infrastructure but also rewards developers who launch
            their tokens within the ecosystem. This initiative is designed to encourage innovation and
            foster growth,
            making Solidton the ideal platform for building the future of decentralized technologies.</p>
          <p class="text-white mb-10 leading-[1.969rem] text-lg sm:text-sm sm:leading-snug">Take the leap with Solidton
            and be part of a
            revolution that started on TON but now leads its own path as
            an ecosystem leader</p>
          <Button class="button-base" severity="contrast" rounded label="Learn More"/>
        </div>
      </div>
    </div>
  </section>
</template>