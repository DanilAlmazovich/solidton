<script setup lang="ts">
import {Button} from "primevue";
</script>

<template>
    <section id="wallet">
        <div class="container">
            <div class="flex pt-3 justify-between items-center pb-16 md:flex-col-reverse md:items-center md:pb-4">
                <div class="w-[37%] flex items-center justify-center md:w-1/2 md:mb-4 sm:mb-8 sm:w-2/3">
                    <!--          <img src="@/assets/images/wallet-phone.png" alt="image">-->
                    <video src="@/assets/video/wallet.webm" loop muted autoplay playsinline/>
                </div>
                <div class="w-[55%] pl-8 pr-12 pb-4 md:w-full md:px-0 md:pb-10">
                    <h2 class="text-[36px] text-color-gradient font-semibold pt-1 pr-8 mb-10 md:text-[30px]
                    sm:text-[25px] xs:text-[20px] xs:mb-4 sm:leading-snug">
                        SOLIDTON WALLET: Your Key to the Web3 Ecosystem</h2>
                    <p class="text-white mb-14 sm:text-sm">SOLIDTON WALLET is a powerful non-custodial application that
                        provides everything you need for
                        managing digital assets. The app will be available for iPhone and Android, offering secure,
                        fast, and
                        reliable management of your digital assets</p>
                    <Button class="px-14 py-4 text-white lg:px-8 lg:py-3 lg:text-base sm:text-sm sm:py-2"
                            severity="contrast" rounded label="Learn More"/>
                </div>
            </div>
        </div>
    </section>
</template>