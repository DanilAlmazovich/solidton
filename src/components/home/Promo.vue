<script setup lang="ts">
import {Button} from "primevue";
import Icon from "@/components/Icon.vue";
</script>

<template>
  <section class="bg-black">
    <div class="container">
      <div class="w-1/2 pt-[12rem] pb-[8rem]">
        <h1 class="text-[40px] font-bold text-color-gradient leading-[3.255rem] mb-12">
          Solidton: A Level 1 Breakthrough on the TON Blockchain That Will Change the World</h1>
        <p class="text-sm text-white leading-relaxed mb-6">Solidton marks a new chapter in decentralized technology. Our ecosystem, built on the TON blockchain,
          combines speed, scalability, and security to create a space where innovation is accessible to all.
          We are building a sustainable platform capable of processing millions of transactions with maximum
          efficiency, ensuring reliability and ease of use for everyone.</p>
        <div class="flex items-center gap-6 py-6 mb-1">
          <Button class="button-gradient px-14 py-5" label="Join Presale" rounded size="large"/>
          <Button severity="secondary" label="How to buy?" rounded size="large" class="px-14 py-5"/>
        </div>
        <p class="text-[10px] text-gray-300 pr-32 leading-snug mb-3">Access to 64% of the total SON supply is available now during our live crypto presale. This unique
          opportunity allows you to join early and grow alongside our rapidly expanding community.</p>
        <button to="#" class="flex items-center text-white gap-2">
          <span class="text-sm">Join now</span>
          <Icon name="long-arrow"/>
        </button>
      </div>
    </div>
  </section>
</template>