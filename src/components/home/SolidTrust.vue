<script setup lang="ts">
import {Button} from "primevue";
</script>

<template>
  <section v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }">
    <div class="container">
      <div class="flex pt-3 justify-between items-center pb-16 md:flex-col-reverse">
        <div
            class="w-[40%] flex justify-center items-center pt-16 md:pt-8 md:w-2/3 sm:w-full xs:w-full md:h-[390px] sm:h-[404px] overflow-hidden">
          <!--          <video class="w-full h-full object-contain sm:transform sm:scale-[120%]" src="@/assets/video/trust.webm" loop-->
          <!--                 autoplay muted playsinline/>-->
        </div>
        <div class="w-[52%] pb-4 pt-24 pl-2 md:w-full md:px-0 md:pt-6">
          <h2 id="solidtrust" class="text-[40px] text-color-gradient font-semibold pt-3 pr-8 mb-10 leading-[3.255rem]
                    md:text-[30px] sm:text-[25px] xs:text-[20px] sm:leading-snug lg:px-8 md:px-0">
            SolidTrust: Trust and Secure Blockchain</h2>
          <div class="mb-14">
            <p class="text-white mb-8 leading-[31.5px] sm:leading-snug sm:text-sm">SolidTrust is a unique decentralized
              system that
              analyzes the actions
              of users, projects, and tokens, assigning them a trust rating (SolidScore).
              This rating is updated in real-time, ensuring security, transparency, and reliability
              for all participants in the SolidChain network.</p>
            <p class="text-white mb-6 leading-[31.5px] sm:leading-snug sm:text-sm">Join SolidTrust to experience safe,
              transparent, and
              reliable blockchain interactions like never before.</p>
          </div>
          <Button class="button-base" severity="contrast" rounded label="Learn More"/>
        </div>
      </div>
    </div>
  </section>
</template>