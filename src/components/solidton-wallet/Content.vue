<script setup lang="ts">
import InfoCardList from "@/components/elements/InfoCardList.vue";

const content = [
  {
    title: 'Asset Storage:',
    descriptions: [
      'Users can securely store their digital assets, such as tokens and NFTs, while maintaining full control over their private keys.',
    ]
  },
  {
    title: 'Transaction Sending and Receiving:',
    descriptions: [
      'Fast cryptocurrency transfers to any addresses within the SolidChain network.',
      'Real-time transaction notifications upon receiving assets.'
    ]
  },
  {
    title: 'Staking:',
    descriptions: [
      'Earn rewards by locking tokens for a specific period. This functionality will be directly accessible through the wallet.',
    ]
  },
  {
    title: 'Connection to Decentralized Applications (DApps):',
    descriptions: [
      'The wallet will provide access to the SolidChain ecosystem, including DeFi platforms, NFT marketplaces, and other Web3 applications.',
    ]
  },
  {
    title: 'Token Management:',
    descriptions: [
      'Add and manage any tokens created on SolidChain.',
      'A user-friendly interface to view balances and transaction histories.'
    ]
  },
  {
    title: 'Token Management:',
    descriptions: [
      'The wallet is fully integrated with the SolidChain blockchain, allowing thousands of transactions per second with minimal fees.',
    ]
  },
]
</script>

<template>
  <section class="py-14 lg:py-10">
    <div class="container">
      <InfoCardList :content="content" title="Wallet Features:"/>
      <div class="px-[105px] pt-16 pb-12 lg:px-0 lg:pt-10 md:pt-4 lg:pb-10 sm:pb-4">
        <div>
          <h2 v-scroll-reveal class="text-[36px] font-semibold text-color-gradient leading-[3.255rem] text-center mb-14 lg:text-[30px]
            lg:leading-[2.5rem] sm:text-[20px] lg:mb-8">Technical Features:</h2>
          <div class="px-40 flex justify-center flex-col items-center lg:px-0">
            <ul class="flex flex-col items-center list-disc gap-y-6 justify-center text-center mb-16 lg:px-4 px-20">
              <li class="text-center text-[#66B5FF] sm:text-sm">Cross-Platform Availability: The app will be available
                for iOS and Android, supporting all major devices.
              </li>
              <li class="text-center text-[#66B5FF] sm:text-sm">Security: The non-custodial approach ensures private
                keys are stored solely by the user, eliminating the risk of fund loss due to server breaches.
              </li>
              <li class="text-center text-[#66B5FF] sm:text-sm"> Intuitive Interface: A simple design tailored for users
                of all experience levels.
              </li>
            </ul>
            <!--          <p class="text-white text-center sm:text-sm">Solidton Bridge is the key to a future where blockchains work together,-->
            <!--            creating a unified global-->
            <!--            ecosystem. <br> Expand your possibilities and immerse yourself in a world of limitless opportunities with-->
            <!--            Solidton Bridge.</p>-->
          </div>
        </div>
        <div>
          <h2 v-scroll-reveal class="text-[36px] font-semibold text-color-gradient leading-[3.255rem] text-center mb-14 lg:text-[30px]
            lg:leading-[2.5rem] sm:text-[25px] lg:mb-8">Why SolidChain?</h2>
          <div class="px-40 flex justify-center flex-col items-center lg:px-0">
            <p class="text-white text-center sm:text-sm mb-10 px-40 sm:px-0">SolidChain is a next-generation blockchain designed to support
              scalable and high-performance solutions. It is an ideal foundation for the SOLIDTON WALLET due to the
              following advantages:</p>
            <ul class="flex flex-col items-center list-disc gap-y-6 justify-center text-center mb-16 lg:px-4 px-20">
              <li class="text-center text-[#66B5FF] sm:text-sm">High throughput.
              </li>
              <li class="text-center text-[#66B5FF] sm:text-sm">Low transaction fees.
              </li>
              <li class="text-center text-[#66B5FF] sm:text-sm">Resistance to attacks and robust data protection.
              </li>
            </ul>
            <p class="text-white text-center sm:text-sm px-40 sm:px-0">SOLIDTON WALLET is your gateway to the decentralized world of
              SolidChain, providing secure and convenient access to the Web3 ecosystem.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


