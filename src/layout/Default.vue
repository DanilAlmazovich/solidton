<script setup lang="ts">
import {RouterView} from "vue-router";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
  <div class="relative">
    <Header/>
    <main>
      <RouterView/>
    </main>
    <Footer/>
  </div>
</template>