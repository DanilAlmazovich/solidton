<script setup lang="ts">
import {Select} from "primevue";
import {ref} from "vue";

const options = ref(['Русский', 'Английский'])
const selected = ref(options.value[0])
</script>

<template>
  <header>
    <div class="container">
      <div class="grid grid-cols-[1fr_3fr_1fr] py-12 items-center justify-items-center">
        <div></div>
        <div class="bg-rgba-100 rounded-[1.625rem] border border-solid border-[#C0CCF84D]/30 px-16 py-8 w-auto">
          <ul class="grid grid-cols-4 gap-10">
            <li class="text-center block">
              <router-link class="text-blue-300" to="#">Главная</router-link>
            </li>
            <li class="text-center block">
              <router-link class="text-blue-100" to="#">О нас</router-link>
            </li>
            <li class="text-center block">
              <router-link class="text-blue-100" to="#">Белая бумага</router-link>
            </li>
            <li class="text-center block">
              <router-link class="text-blue-100" to="#">Аудит</router-link>
            </li>
          </ul>
        </div>
        <div class="flex justify-end w-full">
          <Select class="border-none bg-transparent text-white outline-none custom-select shadow-none"
                  :options="options" overlay-class="custom-select-overlay" v-model="selected">
            <template #value="{value}">
              <span class="text-white font-normal">{{ value }}</span>
            </template>
          </Select>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="css">
  .custom-select .p-select-dropdown-icon {
    color: #00D1FF;
  }
  .custom-select .p-select-label {
    padding: 6px;
  }
  .custom-select-overlay {
    background: theme('colors.gray.800');
    padding: 0;
  }
  .p-select-option-label {
    font-size: 14px;
  }

</style>