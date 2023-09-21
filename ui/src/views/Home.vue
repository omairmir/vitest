<template>
  <div>
    <div class="flex flex-col gap-6 items-center py-8">
        <h1 class="text-primary font-bold text-base">you need to get started!</h1>
       <div class="w-[80%] text-center mx-auto text-common font-extrabold text-4xl tracking-tight">a tool to <span class="text-secondary text-5xl">Optimize</span> your social media profiles~</div>
       <p class="w-[80%] text-center mx-auto text-common font-bold text-normal">Improve customer experience, grow recurring revenue, and reduce costs with a single unified platform for payments, subscriptions, invoicing, accounting, tax, and more. Companies like Zoom, Atlassian, and Slack work with us to move fast and scale globally.</p>
       <div class="">
        <PButton>Get Started</PButton>
       </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import PButton from '@/components/ui/PButton.vue'
import { defineComponent } from 'vue';
// export default defineComponent({
//     name: 'Home',
//     components: {
//         PButton
//     },
//     setup() {
//         return {
            
//         }
//     }
// })
</script>