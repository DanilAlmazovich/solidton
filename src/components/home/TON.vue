<script setup lang="ts">
import {Button} from "primevue";
</script>

<template>
  <section>
    <div class="container">
      <div class="flex justify-between items-center pt-8">
        <div class="w-[50%] flex items-center justify-center pb-16">
<!--          <img src="@/assets/images/TON-QR.png" alt="image">-->
            <video src="@/assets/video/from-ton.webm" loop autoplay muted/>
        </div>
        <div class="w-[50%] pl-8 pb-4">
          <h2 class="text-[40px] text-color-gradient font-semibold pt-1 pr-8 mb-9 leading-[3.3rem]">Solidton: From TON to Independent
            Powerhouse</h2>
          <p class="text-white mb-8 leading-[1.969rem] text-lg">Initially built on the TON blockchain, Solidton has broken free to become an
            independent,
            powerful ecosystem of its own. Now, any developer can create their own token directly on the Solidton
            blockchain and become part of this thriving network.</p>
          <p class="text-white mb-8 leading-[1.969rem] text-lg">Solidton not only provides a robust and scalable infrastructure but also rewards developers who launch
            their tokens within the ecosystem. This initiative is designed to encourage innovation and foster growth,
            making Solidton the ideal platform for building the future of decentralized technologies.</p>
          <p class="text-white mb-10 leading-[1.969rem] text-lg">Take the leap with Solidton and be part of a revolution that started on TON but now leads its own path as
            an ecosystem leader</p>
          <Button class="px-[3.7rem] py-4 text-white" severity="contrast" rounded label="Learn More"/>
        </div>
      </div>
    </div>
  </section>
</template>