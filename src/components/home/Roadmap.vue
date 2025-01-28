<script setup lang="ts">

import {Pagination} from 'swiper/modules';

// Import Swiper Vue.js elements
import {Swiper, SwiperSlide} from 'swiper/vue';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {ref} from "vue";

const modules = [Pagination]

const sliderContent = ref([
  {
    title: 'Q4 2025',
    label: '',
    items: [
      'Hosting the first virtual events and blockchain hackathons to attract developers.',
      'Strengthening partnerships with other blockchain projects to expand Solidton’s global ecosystem.',
    ]
  },
  {
    title: 'Q1 2024: January - March',
    label: 'Conceptualization and Strategic Planning',
    items: [
      'Define core objectives and vision for Qubetics',
      'Outline the initial project scope and key milestones.',
      'Conduct market research and feasibility studies.'
    ]
  },
  {
    title: 'Q2 2024: April - June',
    label: 'Team Establishment and Foundation Building',
    items: [
      'Launch the whitelist website for early adopters.',
      'Begin drafting the Qubetics whitepaper.',
      'Conduct an interview with Web3TV to increase visibility.',
      'Engage with key figures in the blockchain industry for strategic insights.',
      'Partner with developers to begin the technical groundwork.',
      'Design the ICO website.',
      'Develop and test a comprehensive marketing strategy.',
      'Identify and define the scope of the Qubetics blockchain.',
      'Initiate marketing efforts to raise awareness about the whitelist.',
      'Publish articles and press releases to build initial momentum.',
    ]
  },
  {
    title: 'Q3 2024: July - September',
    label: 'Strategic Partnerships and Preparations',
    items: [
      'Continue to drive whitelist marketing efforts.',
      'Refine and enhance the whitepaper based on feedback.',
      'Establish a partnership with Blockaid for security assurance.',
      'Set up the Qubetics GitHub environment for collaborative development.',
      'Finalize the scope of the blockchain project.',
      'Complete the design and functionality of the ICO website.',
      'Finalize the design and layout of the whitepaper.',
      'Partner with PhishFort for additional security measures.',
      'Pre-sale initiation.',
      'Participate in Token 2049 Singapore for global exposure.',
      'Form strategic partnerships with financial service providers.',
    ]
  },
  {
    title: 'Q4 2024: October - December',
    label: 'Core Development and Community Engagement',
    items: [
      'Begin the development of Qubetics core blockchain technology.',
      'Development of decentralized VPN.',
      'Start development of the testnet environment.',
      'Expand marketing efforts to reach a broader audience.',
      'Initiate the development of the Qubetics wallet.',
      'Focus on community expansion through targeted campaigns.',
      'Host live AMAs (Ask Me Anything) sessions with key team members.',
      'Strengthen existing partnerships and explore new collaborations.',
    ]
  },
  {
    title: 'Q3 2024:',
    label: '',
    items: [
      'Launching the official Solidton website and publishing the white paper.',
      'Beginning the token presale (ICO) to attract early supporters and investors.'
    ]
  },
  {
    title: 'Q2 2025',
    label: '',
    items: [
      'Listing Solidton tokens on major decentralized exchanges (DEX).',
      'Launching all core functionalities, including:',
      'Solidton Wallet for secure asset storage and management.',
      'Solidramp platform for creating cryptocurrencies in two clicks.',
      'Solidscan for network monitoring and transaction analysis.',
      'Bridge technology for seamless interoperability between blockchains.',
      'The decentralized exchange (DEX) for efficient and secure trading.',
      'Conducting promotional campaigns, including giveaways worth $30,000 to reward the community and boost engagement.'
    ]
  },
  {
    title: 'Q3 2025',
    label: '',
    items: [
      'Expansion of DeFi services, such as staking and P2P lending.',
      'Activating governance systems, enabling token holders to vote and participate in project decisions.',
      'Introducing social features, such as community forums and user profiles, to foster collaboration and interaction.'
    ]
  },
  {
    title: 'Beyond 2025',
    label: '',
    items: [
      'Enhancing AI-driven tools like Solidtrust for automated and advanced smart contract auditing.',
      'Scaling Solidton’s solutions into new markets with localized services and education programs.',
      'Developing next-generation blockchain innovations to remain at the forefront of the industry.',
    ]
  },
])
</script>

<template>
  <section class="w-full pb-[8rem] md:pb-2"
           v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }">
    <div class="container">
      <div class="pt-24">
        <h2 id="roadmap" class="text-color-gradient font-bold text-[48px] text-center mb-6 py-1 md:text-[30px]
          sm:text-[25px] xs:text-[20px] sm:leading-snug">Roadmap</h2>
      </div>
    </div>
    <div class="pt-2 pb-16 mb-16 md:mb-4 md:pb-10">
      <Swiper
          :slidesPerView="'auto'"
          :initialSlide="2"
          loop
          :centeredSlides="true"
          :spaceBetween="30"
          :freeMode="true"
          :pagination="{
                        clickable: true,
                    }"
          :modules="modules"
      >
        <SwiperSlide v-for="content in sliderContent" class="w-auto">
          <div class="w-[464px] h-auto py-8 px-6 rounded-xl bg-gray-400 md:py-6 md:px-4 md:w-[340px] xs:w-[300px]">
            <div class="flex flex-col items-center pb-4">
              <h5 class="text-center text-color-gradient font-bold text-[28px] md:text-[22px]">{{ content.title }}</h5>
              <h6 class="text-center text-white text-[26px] leading-[39px] font-medium md:text-lg"
                  v-if="content?.label?.length">{{ content.label }}</h6>
            </div>
            <img src="@/assets/images/slider-horizontal-divider.png" alt="slider">
            <div class="pt-6 px-2">
              <ul class="text-white pl-4 list-disc md:text-sm xs:text-xs">
                <li class="mb-2 sm:mb-1" v-for="item in content.items">{{ item }}</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<style>
.swiper-slide {
  width: auto;
}

.swiper {
  overflow: visible;
}

.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: -3.6rem;
  @media screen and (max-width: 876px) {
    display: none;
  }
}

.swiper-pagination-bullet {
  width: 48px;
  height: 2px;
  background: white;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background: url("@/assets/images/horizontal-divider.png") no-repeat;
}
</style>