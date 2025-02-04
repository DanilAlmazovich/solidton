<script setup lang="ts">
import InfoCardList from "@/components/elements/InfoCardList.vue";

const content = [
  {
    title: 'Fast and Secure Cross-Chain Transfers:',
    descriptions: [
      'Instantly move your assets between networks without the risk of data loss.',
      'Advanced encryption technologies ensure the security of all transactions.'
    ]
  },
  {
    title: 'Lower Fees:',
    descriptions: [
      'Save money by transferring assets to networks with lower costs, such as SolidChain.',
      'Optimized transaction expenses make the Bridge accessible to all users.'
    ]
  },
  {
    title: 'Access to Multiple Ecosystems:',
    descriptions: [
      'Connect to decentralized applications (DApps) and platforms across different blockchains.',
      'Explore opportunities in networks like Ethereum, BSC, SolidChain, and more.'
    ]
  },
  {
    title: 'Intuitive Interface:',
    descriptions: [
      'Easy-to-use design allows any user to quickly master the Bridge’s functionality.',
      'Convenient step-by-step navigation for transferring assets between blockchains.'
    ]
  },
  {
    title: 'Resilience and Scalability:',
    descriptions: [
      'The platform is designed to handle a high volume of transactions while remaining reliable under heavy loads.',
      'Solidton technologies ensure stability and speed in all conditions.'
    ]
  },
]
</script>

<template>
  <section class="py-24 lg:py-10">
    <div class="container">
      <InfoCardList :content="content" title="Features of Solidton Bridge"/>
      <div class="px-[105px] pt-16 pb-12 lg:px-0 lg:pt-10 md:pt-4 lg:pb-10 sm:pb-4">
        <h2 v-scroll-reveal class="text-[36px] font-semibold text-color-gradient leading-[3.255rem] text-center mb-14 lg:text-[30px]
        lg:leading-[2.5rem] sm:text-[20px] lg:mb-8">Why Choose
          Solidton Bridge</h2>
        <div class="px-40 flex justify-center flex-col items-center lg:px-0">
          <ul class="flex flex-col items-center list-disc gap-y-6 justify-center text-center mb-16 lg:pl-4">
            <li class="text-center text-[#66B5FF] sm:text-sm">Flexibility and Freedom: Your assets are no longer confined to a
              single network and can be utilized
              where they provide the most benefit.
            </li>
            <li class="text-center text-[#66B5FF] sm:text-sm">Expanded Opportunities: Solidton Bridge unlocks access to new
              markets, tools, and ecosystems, enabling
              you to realize the full potential of your assets.
            </li>
            <li class="text-center text-[#66B5FF] sm:text-sm">Transparency: Every transaction is tracked in real time, providing
              complete visibility of all
              operations.
            </li>
          </ul>
          <p class="text-white text-center sm:text-sm">Solidton Bridge is the key to a future where blockchains work together,
            creating a unified global
            ecosystem. <br> Expand your possibilities and immerse yourself in a world of limitless opportunities with
            Solidton Bridge.</p>
        </div>
      </div>
    </div>
  </section>
</template>


