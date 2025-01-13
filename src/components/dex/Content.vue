<script setup lang="ts">
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
  <section class="py-24">
    <div class="container">
      <div class="px-[105px] mb-20">
        <h2 class="text-[40px] font-semibold text-color-gradient leading-[3.255rem] text-center mb-14">Features of
          Solidton Bridge</h2>
        <div class="grid grid-cols-3 gap-x-16 gap-y-12 py-14">
          <div v-for="item in content">
            <h6 class="font-semibold text-[24px] text-white mb-4">{{ item.title }}</h6>
            <ul class="pl-3 text-white list-disc">
              <li class="text-base text-white" v-for="list in item.descriptions">
                {{ list }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-[105px] pt-16 pb-12">
        <h2 class="text-[40px] font-semibold text-color-gradient leading-[3.255rem] text-center mb-14">Solidton DEX:
          Your Path to Free Trading</h2>
        <div class="px-40 flex justify-center flex-col items-center">
          <p class="text-white text-center mb-6">Solidton DEX was created to provide everyone with access to an open, secure,
            and affordable trading space. It is a platform that combines innovative technology, transparency, and
            freedom in one solution.</p>
          <p class="text-white text-center">With Solidton DEX, you are not just trading — you are becoming part of a new
            era of decentralized finance. Join the revolution today!</p>
        </div>
      </div>
    </div>
  </section>
</template>


