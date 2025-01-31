<script setup lang="ts">
import {Button} from "primevue";
import {ref} from "vue";
import jump from 'jump.js'

const emits = defineEmits(['scroll'])

const links = ref([
  {to: 'example', type: 'anchor', id: '#wallet', value: 'Wallet'},
  {to: 'example', type: 'anchor', id: '#staking', value: 'Staking'},
  {to: 'example', type: 'anchor', id: '#solidtrust', value: 'Solidtrust'},
  {to: 'dex', type: 'anchor', id: '#dex', value: 'DEX'},
  {to: 'example', type: 'anchor', id: '#tokenomics', value: 'Tokenomics'},
  {to: 'bridge', type: 'anchor', id: '#bridge', value: 'Bridge'},
  {to: 'example', type: 'anchor', id: '#block-explorer', value: 'Block explorer'},
  {to: 'example', type: 'anchor', id: '#pump-pad', value: 'Pump pad'},
  {to: 'example', type: 'anchor', id: '#defi', value: 'Defi'},
  {to: 'example', type: 'anchor', id: '#roadmap', value: 'Roadmap'},
  {to: 'presale', type: 'link', id: '#', value: 'How To Buy'},
])

const scrollTo = (to) => {
  jump(to, {
    offset: -90
  })
  emits('scroll')
}

</script>

<template>
  <div class="flex gap-7 items-center px-3 xl:px-1 xl:gap-4 lg:flex-col lg:items-start">
    <template v-for="(link, i) in links" :key="`${link}-${i}`">
      <router-link :to="{name: link.to}" class="text-white text-xs lg:text-base font-normal">{{ link.value }}
      </router-link>
<!--      <button class="text-white text-xs lg:text-base font-normal"-->
<!--              v-if="link.type === 'link'">-->
<!--        {{ link.value }}-->
<!--      </button>-->
    </template>
  </div>
</template>
