<script setup lang="ts">
import {Button} from "primevue";
import {ref} from "vue";
import jump from 'jump.js'

const emits = defineEmits(['scroll'])

const links = ref([
  {type: 'anchor', id: '#wallet', value: 'Wallet'},
  {type: 'anchor', id: '#staking', value: 'Staking'},
  {type: 'anchor', id: '#solidtrust', value: 'Solidtrust'},
  {type: 'anchor', id: '#dex', value: 'DEX'},
  {type: 'anchor', id: '#tokenomics', value: 'Tokenomics'},
  {type: 'anchor', id: '#bridge', value: 'Bridge'},
  {type: 'anchor', id: '#block-explorer', value: 'Block explorer'},
  {type: 'anchor', id: '#pump-pad', value: 'Pump pad'},
  {type: 'anchor', id: '#defi', value: 'Defi'},
  {type: 'anchor', id: '#roadmap', value: 'Roadmap'},
  {type: 'link', id: '#', value: 'How To Buy'},
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
      <button @click.prevent="scrollTo(link.id)" class="text-white text-xs lg:text-base font-normal"
              v-if="link.type === 'anchor'">{{ link.value }}
      </button>
      <button class="text-white text-xs lg:text-base font-normal"
              v-if="link.type === 'link'">
        {{ link.value }}
      </button>
    </template>
  </div>
</template>
