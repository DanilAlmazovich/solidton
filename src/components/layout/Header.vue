<script setup lang="ts">
import {Button} from "primevue";
import {ref} from "vue";

const links = ref([
  {type: 'anchor', value: 'Wallet'},
  {type: 'anchor', value: 'Staking'},
  {type: 'anchor', value: 'Solidtrust'},
  {type: 'anchor', value: 'DEX'},
  {type: 'anchor', value: 'Tokenomics'},
  {type: 'anchor', value: 'Bridge'},
  {type: 'anchor', value: 'Block explorer'},
  {type: 'anchor', value: 'Pump pad'},
  {type: 'anchor', value: 'Defi'},
  {type: 'anchor', value: 'Roadmap'},
  {type: 'link', value: 'How To Buy'},
])

</script>

<template>
  <header class="bg-blue-800">
    <div class="container">
      <div class="flex items-center justify-between py-4">
        <div class="flex">
          <router-link to="/" class="text-white text-2xl">Logo</router-link>
        </div>
        <div class="flex gap-7 items-center pr-6">
          <template v-for="(link, i) in links" :key="`${link}-${i}`">
            <button class="text-white text-xs font-normal" v-if="link.type === 'anchor'">{{ link.value }}</button>
            <router-link to="#" class="text-white text-xs font-normal" v-if="link.type === 'link'">{{ link.value }}</router-link>
          </template>
        </div>
        <div class="flex items-center">
          <div class="mr-14">
            <Button class="button-gradient px-11" label="Join Presale" rounded size="large"/>
          </div>
          <div>
            <button class="text-white flex items-center">
              <i class="pi pi-bars text-xl"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
