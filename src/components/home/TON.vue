<script setup lang="ts">
import {Button} from "primevue";
</script>

<template>
  <section>
    <div class="container">
      <div class="flex justify-between items-center pt-24 md:flex-col-reverse">
        <div class="w-[45%] flex items-center justify-center
            sm:w-full md:w-full overflow-hidden pr-8 md:pr-0 py-10">
                    <video class="w-full h-auto object-contain" src="@/assets/video/ton-main.webm"
                           playsinline loop autoplay muted/>
        </div>
        <div class="w-[55%] md:w-full md:px-0 md:pb-0">
          <h2 v-scroll-reveal
              class="text-[36px] text-color-gradient font-semibold mb-10 md:text-[30px]
                    sm:text-[20px] xs:text-[20px] xs:mb-4 sm:leading-snug">
            Solidton: From TON to Independent Powerhouse</h2>
          <p class="text-white mb-4 leading-[1.969rem] text-base sm:text-sm sm:leading-snug">Initially built on the TON
            blockchain,
            Solidton has broken free to become an
            independent,
            powerful ecosystem of its own. Now, any developer can create their own token directly on the
            Solidton
            blockchain and become part of this thriving network.</p>
          <p class="text-white mb-4 leading-[1.969rem] text-base sm:text-sm sm:leading-snug">Solidton not only provides a
            robust and
            scalable infrastructure but also rewards developers who launch
            their tokens within the ecosystem. This initiative is designed to encourage innovation and
            foster growth,
            making Solidton the ideal platform for building the future of decentralized technologies.</p>
          <p class="text-white mb-10 leading-[1.969rem] text-base sm:text-sm sm:leading-snug">Take the leap with Solidton
            and be part of a
            revolution that started on TON but now leads its own path as
            an ecosystem leader</p>
          <Button class="button-base" severity="contrast" rounded label="Learn More"/>
        </div>
      </div>
    </div>
  </section>
</template>