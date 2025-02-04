<script setup lang="ts">
import InfoCardList from "@/components/elements/InfoCardList.vue";

const content = [
  {
    title: 'Full Control Over Your Assets',
    descriptions: [
      ' You remain the sole owner of your digital assets.',
      ' No need to entrust funds to third-party custodians or centralized services.',
      'Your funds are always under your control, and private keys stay with you.'
    ]
  },
  {
    title: 'Low Fees:',
    descriptions: [
      'Solidton DEX operates on the highly efficient architecture of SolidChain, minimizing transaction costs.',
      'Save money by paying significantly less compared to centralized exchanges'
    ]
  },
  {
    title: 'Advanced Features:',
    descriptions: [
      'SolidRamp: Boost the promotion of your tokens, enhancing their liquidity and popularity.',
      'Bridge: Seamless integration between SolidChain and other blockchains for cross-chain transactions.',
      'SolidScan: Transparency in every operation, with the ability to track all transactions and network activity.'
    ]
  },
  {
    title: 'Speed and Reliability:',
    descriptions: [
      'Solidton DEX enables instant trades through optimized mechanisms of the SolidChain blockchain.',
      'The network is resilient to high loads, ensuring no delays or failures even during peak activity.'
    ]
  },
  {
    title: 'Ease of Us:',
    descriptions: [
      'A user-friendly and intuitive interface makes the platform accessible to both experienced traders and beginners.',
      'Analytical tools help you make informed decisions and efficiently manage your assets.'
    ]
  },
  {
    title: 'Top-Level Security:',
    descriptions: [
      'All transactions are protected by advanced encryption mechanisms.',
      'The decentralized nature of the platform reduces the risk of hacks and data theft.'
    ]
  },
]
</script>

<template>
  <section class="py-24 lg:py-16">
    <div class="container">
      <InfoCardList :content="content" title="What Makes Solidton DEX Unique?"/>
      <div class="px-[105px] pt-16 pb-12 lg:px-0 lg:pt-10 md:pt-4 lg:pb-10 sm:pb-4">
        <h2 v-scroll-reveal class="text-[36px] font-semibold text-color-gradient leading-[3.255rem] text-center mb-14 lg:text-[30px]
        lg:leading-[2.5rem] sm:text-[20px] lg:mb-8">Solidton DEX:
          Your Path to Free Trading</h2>
        <div class="px-40 flex justify-center flex-col items-center lg:px-0">
          <p class="text-white text-center mb-6 sm:text-sm">Solidton DEX was created to provide everyone with access to
            an open,
            secure,
            and affordable trading space. It is a platform that combines innovative technology, transparency, and
            freedom in one solution.</p>
          <p class="text-white text-center sm:text-sm">With Solidton DEX, you are not just trading — you are becoming
            part of a new
            era of decentralized finance. Join the revolution today!</p>
        </div>
      </div>
    </div>
  </section>
</template>


