<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PLogo from '@/components/ui/PLogo.vue'
import PButton from '@/components/ui/PButton.vue'


</script>

<template>
  <header >
    <div class="bg-white w-full flex items-center justify-between bg-usual px-4 py-3 fixed top-0">
        <PLogo></PLogo>
        <div class="flex gap-3">
          <RouterLink to="/" v-slot="{isActive,navigate}" >
            <PButton variant="navigate" color="primary" :active="isActive" :clickHandler="(e: MouseEvent)=>{navigate();e.preventDefault();}">Intro</PButton>
          </RouterLink>
          <RouterLink to="/about" v-slot="{isActive,navigate}">
            <PButton variant="navigate" color="primary" :active="isActive" :clickHandler="(e: MouseEvent)=>{navigate();e.preventDefault();}">Solutions</PButton>
          </RouterLink>
          <RouterLink to="/dashboard" v-slot="{isActive,navigate}">
            <PButton variant="navigate" color="black" :active="isActive" :clickHandler="(e: MouseEvent)=>{navigate();e.preventDefault();}">Dashboard</PButton>
          </RouterLink>
        </div>
    </div>
  </header>
  <div class="bg-usual w-full h-screen max-h-screen fixed top-[60px]" style="height: calc(100vh - 60px)">
    <RouterView />
  </div>
  

</template>

<style scoped>

</style>
