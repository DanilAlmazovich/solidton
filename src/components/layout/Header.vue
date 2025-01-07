<script setup lang="ts">
import {Button} from "primevue";
import {ref} from "vue";
import jump from 'jump.js'

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
    jump(to)
}

</script>

<template>
    <header class="bg-blue-800 fixed left-0 top-0 right-0 w-full z-[20]">
        <div class="container">
            <div class="flex items-center justify-between py-4">
                <div class="flex">
                    <router-link to="/" class="text-white text-2xl sm:text-lg">Logo</router-link>
                </div>
                <div class="flex gap-7 items-center px-3 xl:px-1 xl:gap-4 lg:hidden">
                    <template v-for="(link, i) in links" :key="`${link}-${i}`">
                        <button @click.prevent="scrollTo(link.id)" class="text-white text-xs font-normal"
                                v-if="link.type === 'anchor'">{{ link.value }}
                        </button>
                        <button class="text-white text-xs font-normal"
                                v-if="link.type === 'link'">
                            {{ link.value }}
                        </button>
                    </template>
                </div>
                <div class="flex items-center">
                    <div class="lg:hidden">
                        <Button class="button-gradient px-11 xl:px-6 xl:text-sm" label="Join Presale" rounded size="large"/>
                    </div>
                    <div class="ml-14 hidden lg:block">
                      <button class="text-white flex items-center">
                        <i class="pi pi-bars text-xl"/>
                      </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
