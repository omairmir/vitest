<template>
    <div class="flex flex-row max-h-full" style="border-top:2px solid black">
      <div class="w-[30%] bg-white flex-col flex gap-8 h-screen px-4 py-2 border">
          <PButton color="secondary" @click="$router.push({path:'/dashboard/view'})">Profile List</PButton>
          <PButton color="black" @click="$router.push({path:'/dashboard/view'})">Add New</PButton>
          <PButton color="black" @click="$router.push({path:'/dashboard/view'})">View All</PButton>
          <PButton @click="$router.push({path:'/dashboard/view'})">Manage</PButton>
          <PButton @click="$router.push({name:'cards'})">Poke</PButton>
      </div>
      <div class="w-full">
        <RouterView/>
      </div>
      
    </div>
  </template>
  <script lang="ts">
  // import { useRouter } from 'vue-router';
  import PButton from '@/components/ui/PButton.vue'
  import PSkeleton from '@/components/ui/PSkeleton.vue'
  import { defineComponent } from 'vue';
  export default defineComponent({
      name: 'Dashboard',
      components: {
          PButton,
          PSkeleton
      }
  })
  </script>