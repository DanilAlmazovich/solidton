<script setup lang="ts">
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
        <h2 class="text-[40px] font-semibold text-color-gradient leading-[3.255rem] text-center mb-14">Why Choose
          Solidton Bridge</h2>
        <div class="px-40 flex justify-center flex-col items-center">
          <ul class="flex flex-col items-center list-disc gap-y-6 justify-center text-center mb-16">
            <li class="text-center text-[#66B5FF]">Flexibility and Freedom: Your assets are no longer confined to a
              single network and can be utilized
              where they provide the most benefit.
            </li>
            <li class="text-center text-[#66B5FF]">Expanded Opportunities: Solidton Bridge unlocks access to new
              markets, tools, and ecosystems, enabling
              you to realize the full potential of your assets.
            </li>
            <li class="text-center text-[#66B5FF]">Transparency: Every transaction is tracked in real time, providing
              complete visibility of all
              operations.
            </li>
          </ul>
          <p class="text-white text-center">Solidton Bridge is the key to a future where blockchains work together,
            creating a unified global
            ecosystem. <br> Expand your possibilities and immerse yourself in a world of limitless opportunities with
            Solidton Bridge.</p>
        </div>
      </div>
    </div>
  </section>
</template>


