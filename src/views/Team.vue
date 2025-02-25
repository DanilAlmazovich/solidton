<script setup lang="ts">
import SignUp from "@/components/home/SignUp.vue";
</script>

<template>
  <div class="relative overflow-hidden pt-[200px] bg-black">
    <section class="mb-32 md:mb-4">
      <div class="container">
        <div class="flex items-center lg:px-0 md:flex-col">
          <div class="w-[55%] md:w-full md:px-0 pr-4">
            <h2 v-scroll-reveal class="text-[36px] text-color-gradient font-semibold pt-2 mb-8 pr-16 leading-[3.3rem]
          md:px-0 lg:px-0 lg:text-[30px]
          sm:text-[20px] xs:text-[20px] md:leading-snug sm:mb-6 sm:pt-0">
              Meet the Solidchain Team
            </h2>
            <p class="text-white py-1 sm:text-sm">
              The Solidchain project is built by a team of experienced professionals dedicated to developing a powerful, secure, and innovative blockchain ecosystem. Each member brings unique expertise, ensuring the success and continuous evolution of Solidchain.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-10 md:mb-4 pt-28 sm:pt-20">
      <div class="container">
        <div class="grid grid-cols-4 gap-10 justify-items-center lg:grid-cols-2 sm:grid-cols-1 sm:gap-20">
          <div class="flex flex-col items-center">
            <div class="w-[275px] h-[275px] xl:w-[180px] xl:h-[180px] xs:w-[120px] xs:h-[120px] overflow-hidden rounded-full image-border-blue mb-6">
              <img class="w-full h-full object-cover"
                   src="@/assets/images/sandman.png"
                   alt="img">
            </div>
            <div class="flex flex-col items-center mb-6 gap-1 sm:mb-2">
              <span class="text-white text-xl font-bold text-center sm:text-base">Shadman</span>
              <span class="text-sm uppercase text-[#909090] text-center sm:text-xs">Founder & CEO</span>
            </div>
            <p class="text-white text-sm text-center leading-relaxed sm:text-xs">Shadman is the visionary behind Solidchain, leading the project’s strategic direction,
              innovation, and partnerships. With deep expertise in blockchain technology and
              decentralized finance, he drives Solidchain toward becoming a global leader in Web3
              solutions.</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-[275px] h-[275px] xl:w-[180px] xl:h-[180px] xs:w-[120px] xs:h-[120px] overflow-hidden rounded-full image-border-blue mb-6">
              <img class="w-full h-full object-cover"
                   src="@/assets/images/sandman-2.png"
                   alt="img">
            </div>
            <div class="flex flex-col items-center mb-6 gap-1 sm:mb-2">
              <span class="text-white text-xl font-bold text-center sm:text-base">Umar</span>
              <span class="text-sm uppercase text-[#909090] text-center sm:text-xs">Chief Technology Officer (CTO)</span>
            </div>
            <p class="text-white text-sm text-center leading-relaxed sm:text-xs">Umar oversees the entire technical development of
              Solidchain, ensuring its security, scalability, and efficiency. He leads the
              blockchain architecture team, optimizing consensus mechanisms and integrating
              cutting-edge technologies to enhance network performance.</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-[275px] h-[275px] xl:w-[180px] xl:h-[180px] xs:w-[120px] xs:h-[120px] overflow-hidden rounded-full image-border-blue mb-6">
              <img class="w-full h-full object-cover"
                   src="@/assets/images/sandman-3.png"
                   alt="img">
            </div>
            <div class="flex flex-col items-center mb-6 gap-1 sm:mb-2">
              <span class="text-white text-xl font-bold text-center sm:text-base">Nuris</span>
              <span class="text-sm uppercase text-[#909090] text-center sm:text-xs">Head of Marketing & Community</span>
            </div>
            <p class="text-white text-sm text-center leading-relaxed sm:text-xs">Nuris manages Solidchain’s marketing strategy and
              community engagement, building awareness and fostering a strong user base.
              He leads campaigns, partnerships, and educational initiatives to grow the
              Solidchain ecosystem and attract new developers and investors</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-[275px] h-[275px] xl:w-[180px] xl:h-[180px] xs:w-[120px] xs:h-[120px] overflow-hidden rounded-full image-border-blue mb-6">
              <img class="w-full h-full object-cover"
                   src="@/assets/images/sandman-4.png"
                   alt="img">
            </div>
            <div class="flex flex-col items-center mb-6 gap-1 sm:mb-2">
              <span class="text-white text-xl font-bold text-center sm:text-base">Dastan</span>
              <span class="text-sm uppercase text-[#909090] text-center sm:text-xs">Lead Blockchain Developer</span>
            </div>
            <p class="text-white text-sm text-center leading-relaxed sm:text-xs">Dastan is responsible for the core development of
              Solidchain, including smart contracts, consensus algorithms, and protocol
              improvements. His expertise in Solidity, Rust, and blockchain security ensures
              the reliability of the Solidchain ecosystem</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-28 sm:py-16">
      <div class="container">
        <div class="px-[105px] pt-16 pb-12 lg:px-0 lg:pt-10 md:pt-4 lg:pb-10 sm:pb-4">
          <h2 v-scroll-reveal class="text-[36px] font-semibold text-color-gradient leading-[3.255rem] text-center mb-14
        lg:text-[30px] lg:leading-[2.5rem] sm:text-[20px] lg:mb-8">A Team Committed to Innovation</h2>
          <div class="px-40 flex justify-center flex-col items-center lg:px-0">
            <ul class="flex flex-col items-center list-disc gap-y-6 justify-center text-center mb-16 lg:pl-4">
              <li class="text-center text-[#66B5FF] sm:text-sm">The Solidchain team is driven by a shared mission to
                create a decentralized, transparent, and scalable blockchain ecosystem.
                Together, they work on developing advanced DeFi solutions, seamless cross-chain
                integrations, and innovative blockchain tools that empower developers and users
                worldwide.
              </li>
            </ul>
            <p class="text-xl text-white text-center sm:text-sm leading-loose">Join Solidchain and Shape the Future of Decentralization!</p>
          </div>
        </div>
      </div>
    </section>
    <SignUp/>
  </div>
</template>

<style scoped lang="css">
.image-border-blue {
  background: linear-gradient(black, black) padding-box,
  linear-gradient(91.57deg, #0033FF 1.33%, #44D0EF 96.99%) border-box;
  border: 3px solid transparent;
}
</style>