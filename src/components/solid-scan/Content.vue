<script setup lang="ts">
import InfoCardList from "@/components/elements/InfoCardList.vue";

const content = [
  {
    title: 'View Transactions:',
    descriptions: [
      'Check the status of any transaction.',
      'Examine details such as sender, recipient, and amount.',
      'Access real-time transaction history.'
    ]
  },
  {
    title: 'Analyze Wallets:',
    descriptions: [
      'Monitor wallet balances.',
      'Track activity and transaction history.',
      'Easily search for addresses on the blockchain.'
    ]
  },
  {
    title: 'Explore Blocks:',
    descriptions: [
      'Perform in-depth analysis of blocks, including timestamps, validator lists, and transaction data.',
      'View real-time blockchain performance statistics.'
    ]
  },
  {
    title: ' Transparency for Everyone:',
    descriptions: [
      'SolidScan makes blockchain operations understandable and open to all users, regardless of their technical expertise.',
    ]
  },
]
</script>

<template>
  <section class="py-14 lg:py-10">
    <div class="container">
      <InfoCardList :content="content" title="What Can SolidScan Do?"/>
      <div class="px-[105px] pt-16 pb-12 lg:px-0 lg:pt-10 md:pt-4 lg:pb-10 sm:pb-4">
        <h2 v-scroll-reveal class="text-[36px] font-semibold text-color-gradient leading-[3.255rem] text-center mb-14 lg:text-[30px]
        lg:leading-[2.5rem] sm:text-[20px] lg:mb-8">Why Is SolidScan Important?</h2>
        <div class="px-40 flex justify-center flex-col items-center lg:px-0">
          <ul class="flex flex-col items-center list-disc gap-y-6 justify-center text-center mb-16 lg:pl-4">
            <li class="text-center text-[#66B5FF] sm:text-sm">Intuitive Interface: Easy to use, even if you’re new to
              blockchain technology.
            </li>
            <li class="text-center text-[#66B5FF] sm:text-sm">Advanced Functionality: Perfect for users, developers, and
              analysts, offering a comprehensive set of data tools.
            </li>
            <li class="text-center text-[#66B5FF] sm:text-sm">Maximum Security: All data is protected and meets
              SolidChain standards.
            </li>
          </ul>
          <p class="text-white text-center sm:text-sm leading-loose">SolidScan is the key to transparency and control
            within the blockchain ecosystem. It’s built for those who value openness, trust, and accessible information.
            Unlock the possibilities of blockchain with SolidScan!</p>
        </div>
      </div>
    </div>
  </section>
</template>


