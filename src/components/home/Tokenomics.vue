<script setup lang="ts">
import {Button} from "primevue";
</script>

<template>
  <section class="w-full pt-[30rem] pb-[30rem] md:py-[15rem]">
    <div class="container">
      <div class="flex flex-col items-center py-4 mb-6" v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }">
        <h2 id="tokenomics" class="text-[40px] text-color-gradient font-semibold mb-10 md:text-[30px]
                    sm:text-[25px] xs:text-[20px] xs:mb-4 sm:leading-snug">Tokenomics</h2>
        <p class="text-white leading-[31.5px] text-lg text-center mb-8 sm:leading-snug lg:text-base sm:text-sm">Token
          Sale Progress <br> 64% of the
          total token supply has been allocated for the presale. We reserve the right
          to end the sale at any moment <br> once the limit reaches 100% or earlier, depending on our
          decision.</p>

        <p class="text-white leading-[31.5px] text-lg text-center mb-8 sm:leading-snug lg:text-base sm:text-sm">Upon
          completing the token sale, we will
          proceed with a listing on exchanges at the appropriate time to ensure
          liquidity <br> and accessibility for all participants. If you decide to invest now and stake your
          tokens,
          this will be a great advantage <br> for you, as approximately 100 million SON tokens have been
          allocated specifically
          for staking rewards.</p>
      </div>
      <div class="py-5 flex justify-center mb-16 md:mb-16" v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }">
        <img src="@/assets/images/chart.png" alt="">
      </div>
      <div class="flex justify-center items-center pt-2">
        <Button class="button-base"
                severity="contrast" rounded label="Learn More"/>
      </div>
    </div>
  </section>
</template>
