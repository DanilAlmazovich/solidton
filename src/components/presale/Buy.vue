<script setup lang="ts">

import purchaseProcess from "@/assets/animations/purchase-process.json";
import tokenReception from "@/assets/animations/token-reception.json";
import {Vue3Lottie} from "vue3-lottie";
</script>

<template>
  <section>
    <div class="container">
      <div class="py-12 px-[105px] lg:px-0">
        <h2 v-scroll-reveal class="text-[36px] font-semibold text-color-gradient leading-[3.255rem] text-center mb-4 lg:text-[30px] lg:leading-[2.5rem] sm:text-[20px]">
          How to buy</h2>
        <div class="flex flex-col justify-center mb-10">
          <span class="text-[32px] text-white font-bold text-center pb-2 lg:text-xl md:text-lg sm:text-base">Buying SON with</span>
          <span class="text-[32px] text-white font-bold text-center pb-2 lg:text-xl md:text-lg sm:text-base">TON,ETH USDT USDC or BNB</span>
        </div>
        <div
            class="bg-[#020202] border border-solid border-[#323232] rounded-3xl py-10 px-20 mb-20 lg:px-10 md:px-6 sm:px-4 lg:mb-10">
          <h4 v-scroll-reveal class="font-bold text-[30px] text-white text-center mb-5 lg:text-xl md:text-lg sm:text-base">Step 1 -
            Wallet Setup</h4>
          <p class="text-white/80 text-center mb-10 md:text-sm">Welcome aboard! Start by setting up a compatible wallet
            depending
            on your preferred blockchain network:</p>
          <ul class="list-disc text-center flex flex-col items-center mb-8 lg:pl-4">
            <li class="text-white/80 mb-2 md:text-sm">MetaMask (Ethereum Network): Ideal for desktop users and supports
              seamless
              Ethereum-based transactions.
            </li>
            <li class="text-white/80 mb-2 md:text-sm">Mytonwallet (TON Network): Specifically designed for interacting
              with the TON
              blockchain.
            </li>
            <li class="text-white/80 mb-2 md:text-sm">Trust Wallet (BNB Network): A versatile mobile wallet for Binance
              Smart Chain
              and other networks.
            </li>
          </ul>
          <p class="text-white/80 text-center mb-10 md:text-sm">Choose the wallet that suits your needs and start your
            journey with
            SolidTon today!</p>
          <div class="flex items-center justify-center gap-10 pt-4 pb-2">
            <div class="w-[320px] h-[104px] bg-black rounded-2xl flex flex-col items-center justify-center gap-1">
              <span class="text-white text-sm">Download</span>
              <img src="@/assets/images/presale/metamask.png" alt="image">
            </div>
            <div class="w-[320px] h-[104px] bg-black rounded-2xl flex flex-col items-center justify-center gap-1">
              <span class="text-white text-sm">Download</span>
              <img src="@/assets/images/presale/trust.png" alt="image">
            </div>
          </div>
          <div class="flex justify-center items-center mb-6">
            <img src="@/assets/images/presale/mytonwallet.png" alt="image">
          </div>
          <h4 v-scroll-reveal class="font-bold text-[30px] text-white text-center mb-5 lg:text-xl md:text-lg sm:text-base">Step 2 -
            Purchase Process</h4>
          <p class="text-white leading-[32.4px] text-center px-16 mb-5 md:text-sm md:px-0">Ready to invest in Solidton?
            Select your
            preferred currency on our platform, specify the number of SON tokens
            you want to purchase, and click Buy Now. After confirming the transaction, your SON tokens will not be sent
            directly to your wallet — they will be stored in the system on the site, where you can manage them, stake
            them,
            and grow your holdings.</p>
          <div class="px-40 mb-10 h-[400px] lg:px-0">
            <Vue3Lottie loop :animation-data="purchaseProcess" height="100%" width="100%"/>
<!--            <video class="w-full h-full" src="@/assets/video/tics.webm" autoplay muted loop playsinline/>-->
          </div>
          <h4 v-scroll-reveal class="font-bold text-[30px] text-white text-center mb-5 lg:text-xl md:text-lg sm:text-base">Step 3 -
            Token Reception</h4>
          <p class="text-white leading-[32.4px] text-center px-16 mb-5 md:text-sm md:px-0">Once the Solidton presale
            concludes, you will be
            able
            to collect your SON tokens directly through our website or opt for an airdrop straight to your wallet. In
            the
            meantime, monitor your investments and token prices from your dashboard. Simply connect your wallet to our
            website,
            and you’re all set!</p>
          <div class="mb-10 h-[400px] flex justify-center items-center">
            <Vue3Lottie loop :animation-data="tokenReception" height="100%" width="100%"/>
<!--            <video class="w-auto h-full" src="@/assets/video/token.webm" autoplay muted loop playsinline/>-->
          </div>
        </div>
        <div class="py-8 mb-2">
          <p class="text-white leading-[32.4px] text-center px-16 mb-5 text-lg md:text-base sm:text-sm md:px-10 sm:px-0">
            Please note that SON tokens will be
            distributed
            to purchasers through an airdrop or a claim process available on our website. Tokens will only be sent to
            the wallet address used at the time of purchase. It is crucial to maintain access to your wallet, as
            recovery
            of tokens is not possible if access is lost. Keep your wallet details secure.</p>
        </div>
      </div>
    </div>
  </section>
</template>