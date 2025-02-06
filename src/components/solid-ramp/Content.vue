<script setup lang="ts">
import InfoCardList from "@/components/elements/InfoCardList.vue";

const content = [
  {
    title: 'Launch New Tokens:',
    descriptions: [
      'Seamlessly bring your tokens to market with a streamlined process.',
      'Full support from the Solidton ecosystem ensures reliability and stability.'
    ]
  },
  {
    title: 'Attract Investors:',
    descriptions: [
      'Access dedicated promotional tools to gain visibility and attract early supporters.',
      'Enhance your project’s exposure within and beyond the Solidton ecosystem.'
    ]
  },
  {
    title: 'Strategize Growth:',
    descriptions: [
      'Leverage advanced analytics and insights to improve token performance.',
      'Plan future developments and boost user engagement.'
    ]
  },
  {
    title: 'Integration with the Solidton Ecosystem:',
    descriptions: [
      'SolidRamp is fully integrated into the Solidton ecosystem, offering access to a wide range of solutions, including DeFi and DEX.',
      'Enjoy seamless interaction with the SolidChain blockchain and its participants.'
    ]
  },
]
</script>

<template>
  <section class="py-14 lg:py-10">
    <div class="container">
      <InfoCardList :content="content" title="What Does SolidRamp Offer?"/>
      <div class="px-[105px] pt-16 pb-12 lg:px-0 lg:pt-10 md:pt-4 lg:pb-10 sm:pb-4">
        <h2 v-scroll-reveal class="text-[36px] font-semibold text-color-gradient leading-[3.255rem] text-center mb-14
        lg:text-[30px] lg:leading-[2.5rem] sm:text-[20px] lg:mb-8">Why SolidRamp?</h2>
        <div class="px-40 flex justify-center flex-col items-center lg:px-0">
          <ul class="flex flex-col items-center list-disc gap-y-6 justify-center text-center mb-16 lg:pl-4">
            <li class="text-center text-[#66B5FF] sm:text-sm">Ease of Use: A user-friendly interface and step-by-step guidance for all experience levels.
            </li>
            <li class="text-center text-[#66B5FF] sm:text-sm">Transparency and Control: Real-time data on token performance and promotion.
            </li>
            <li class="text-center text-[#66B5FF] sm:text-sm">Efficiency: Optimized processes save time and resources for token launches.
            </li>
          </ul>
          <p class="text-white text-center sm:text-sm leading-loose">SolidRamp is your gateway to turning ideas into successful blockchain projects. Build your vision with the
            ecosystem. <br> reliability and innovation that only Solidton can provide.</p>
        </div>
      </div>
    </div>
  </section>
</template>


