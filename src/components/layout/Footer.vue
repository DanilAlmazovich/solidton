<script setup lang="ts">

import {Button} from "primevue";
import Icon from "@/components/Icon.vue";
</script>

<template>
  <footer class="relative  overflow-hidden">
    <div v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }" class="relative py-1">
      <div class="absolute bg-black w-full h-full inset-0 z-[-10]"/>
      <!--        <div class="absolute bg-black left-0 right-0 bottom-0 m-auto z-[-5]">-->
      <!--            <Icon class="opacity-50" name="footer-blur"/>-->
      <!--        </div>-->
      <div class="container">
        <div class="border-t border-solid border-white py-10">
          <div class="flex justify-between w-full md:flex-col ">
            <div class="w-[29%] lg:w-[35%] pl-2 py-6 md:w-full lg:pl-0">
              <p class="text-white text-sm leading-[24px] font-product">Join the Solidton crypto presale —
                an innovative Layer 1 ecosystem uniting leading
                blockchains
                like Ethereum, TON, and Binance Smart Chain.
              </p>
              <p class="text-white text-sm leading-[24px] font-product">Our platform is designed to
                implement cutting-edge solutions set to revolutionize blockchain
                usage and decentralized technologies.</p>
              <div class="flex flex-col py-8">
                <span class="text-white text-sm font-product">Solidton Labs LLC</span>
                <span class="text-white text-sm font-product">support@solidton.io</span>
              </div>
              <span class="text-white text-sm font-product">Proudly partnered with Coinbound — leaders in crypto and Web3 marketing.</span>
            </div>
            <div class="flex justify-between w-[53%] pl-2 pr-12 md:w-full md:pr-0 xs:flex-col xs:mb-8 md:px-0">
              <div class="grid grid-cols-2 w-[70%] xs:w-full">
                <div>
                  <span class="text-white font-product text-lg">About</span>
                  <ul class="text-white font-product text-sm py-3">
                    <li class="mb-3">
                      <router-link to="#">Our Vision</router-link>
                    </li>
                    <li class="mb-3">
                      <router-link to="#">Tokenomics</router-link>
                    </li>
                    <li class="mb-3">
                      <router-link to="#">Roadmap</router-link>
                    </li>
                    <li class="mb-3">
                      <router-link to="#">Whitepaper</router-link>
                    </li>
                    <li class="mb-3">
                      <router-link to="#">Q&A</router-link>
                    </li>
                    <li class="mb-3">
                      <router-link to="#">How to Buy</router-link>
                    </li>
                  </ul>
                </div>
                <div>
                  <span class="text-white font-product text-lg">Features</span>
                  <ul class="text-white font-product text-sm py-3">
                    <li class="mb-3">
                      <router-link to="#">Solidton Wallet</router-link>
                    </li>
                    <li class="mb-3">
                      <router-link to="#">Dex</router-link>
                    </li>
                    <li class="mb-3">
                      <router-link to="#">Block Explorer</router-link>
                    </li>
                    <li class="mb-3">
                      <router-link to="#">Pump Pad</router-link>
                    </li>
                    <li class="mb-3">
                      <router-link to="#">Solidtrust</router-link>
                    </li>
                    <li class="mb-3">
                      <router-link to="#">Staking</router-link>
                    </li>
                    <li class="mb-3">
                      <router-link to="#">DEFI</router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="py-2">
                <Button class="button-gradient px-11 xl:px-6 xl:text-sm" label="Disclaimer" rounded size="large"/>
              </div>
            </div>
          </div>
          <div class="flex justify-center flex-col items-center">
            <span class="text-white text-xl font-product text-center">Get in touch!</span>
            <div class="flex py-6 gap-6">
              <a href="#">
                <Icon name="footer-x"/>
              </a>
              <a href="#">
                <Icon name="footer-telegram"/>
              </a>
              <a href="#">
                <Icon name="footer-instagram"/>
              </a>
              <a href="#">
                <Icon name="footer-fb"/>
              </a>
              <a href="#">
                <Icon name="footer-m"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }" class="bg-black">
      <div class="footer-bottom-gradient">
        <div class="container flex flex-col items-center justify-center py-2">
          <span class="text-sm text-white text-center">2024 Copyright Solidton. All rights reserved.</span>
          <span class="text-sm text-gray-300 text-center md:text-xs">SON aims to revolutionize the cryptocurrency world by creating its own DEX and building a unique,
                    decentralized crypto ecosystem for everyone.</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-bottom-gradient {
  background: rgba(15, 17, 26, 0.8);
}
</style>