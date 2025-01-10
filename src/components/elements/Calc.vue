<script setup lang="ts">
import {Button} from "primevue";
import {ref} from "vue";
const selected = ref('ton')

const select = (value) => {
  selected.value = value
}
</script>

<template>
    <section>
        <div class="container">
            <div class="px-[105px]">
                <h2 class="font-extrabold text-[32px] text-white mb-1">Select a network</h2>
                <div class="flex gap-4 justify-between items-center mb-5">
                  <div class="flex gap-4">
                    <Button @click.prevent="select('ton')"
                            :class="selected === 'ton' ? 'button-gradient' : 'bg-transparent'"
                            class="py-1 px-3 h-[44px] rounded-full flex items-center">
                      <img class="w-24 h-auto object-cover" src="@/assets/images/presale/ton.png" alt="image">
                    </Button>
                    <Button @click.prevent="select('bnb-chain')"
                            :class="selected === 'bnb-chain' ? 'button-gradient' : 'bg-transparent'"
                            class="py-1 px-3 h-[44px] rounded-full flex items-center">
                      <img class="h-auto object-cover" src="@/assets/images/presale/bnb-chain.png" alt="image">
                    </Button>
                    <Button @click.prevent="select('solana')"
                            :class="selected === 'solana' ? 'button-gradient' : 'bg-transparent'"
                            class="py-1 px-3 h-[44px] rounded-full flex items-center">
                      <img class="h-auto object-cover" src="@/assets/images/presale/solana.png" alt="image">
                    </Button>
                    <Button @click.prevent="select('ethereum')"
                            :class="selected === 'ethereum' ? 'button-gradient' : 'bg-transparent'"
                            class="py-1 px-3 h-[44px] rounded-full flex items-center">
                      <img class="h-auto object-cover" src="@/assets/images/presale/ethereum.png" alt="image">
                    </Button>
                  </div>
                  <div class="flex gap-6">
                    <div class="flex flex-col items-center">
                      <span class="text-[32px] text-white font-extrabold leading-snug">$7,248,145.52</span>
                      <span class="text-sm text-gray-300">USDT Raised</span>
                    </div>
                    <div class="flex flex-col items-center">
                      <span class="text-[32px] text-white font-extrabold leading-snug">10,827</span>
                      <span class="text-sm text-gray-300">Holders</span>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-700 border border-solid border-[#323232] rounded-xl">
                  <div class="flex justify-between">
                    <div>

                    </div>
                    <div>

                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
</template>
