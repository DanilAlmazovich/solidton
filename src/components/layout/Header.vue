<script setup lang="ts">
import {Button, Drawer} from "primevue";
import {ref, watch} from "vue";
import HeaderLinks from "@/components/layout/HeaderLinks.vue";
import {useRoute} from "vue-router";

const route = useRoute()

const menuVisible = ref<boolean>(false)

watch(() => route.path, () => {
  menuVisible.value = false
})
</script>

<template>
  <header class="bg-blue-800 fixed left-0 top-0 right-0 w-full z-[20]">
    <div class="container">
      <div class="flex items-center justify-between py-4">
        <div class="flex">
          <router-link to="/" class="text-white text-2xl sm:text-lg">
            <img class="w-12 h-12 sm:w-8 sm:h-8 md:w-10 md:h-10" src="@/assets/images/logo.png" alt="logo">
          </router-link>
        </div>
        <div class="flex gap-7 items-center px-3 xl:px-1 xl:gap-4 lg:hidden">
          <HeaderLinks/>
        </div>
        <div class="flex items-center">
          <div class="lg:hidden">
            <router-link :to="{name: 'presale'}">
              <Button class="button-gradient px-11 xl:px-6 xl:text-sm" label="Join Presale" rounded size="large"/>
            </router-link>
          </div>
          <div class="hidden lg:flex">
            <router-link :to="{name: 'presale'}">
              <Button class="button-gradient px-4 xl:px-4 lg:text-sm lg:py-1.5 sm:text-xs xs:px-3" label="Join Presale" rounded size="small"/>
            </router-link>
          </div>
          <div class="ml-6 hidden lg:block">
            <button class="text-white flex items-center" @click.prevent="menuVisible = true">
              <i class="pi pi-bars text-xl"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <Drawer v-model:visible="menuVisible" position="right" class="bg-black">
    <template #header>
      <router-link to="/" class="text-white text-2xl sm:text-lg">
        <img class="w-12 h-12 sm:w-8 sm:h-8 md:w-10 md:h-10" src="@/assets/images/logo.png" alt="logo">
      </router-link>
    </template>
    <div class="px-6 flex flex-col gap-6">
      <HeaderLinks @scroll="menuVisible = false" class="py-6"/>
      <Button class="button-gradient px-11 xl:px-6 xl:text-sm" label="Join Presale" rounded size="large"/>
    </div>
  </Drawer>
</template>
