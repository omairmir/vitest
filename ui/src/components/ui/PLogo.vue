<template>
    <div class="flex items-center group cursor-pointer w-max mx-2">
      <img alt="tickting logo" class="mr-2 inline-block group-hover:rotate-180" src="@/assets/logo.svg" width="40" height="40" />
      <div class="inline-block font-extrabold text-transparent text-xl group-hover:scale-[1.05] bg-clip-text bg-gradient-to-r from-primary to-secondary">Profiler</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:'PLogo'
})
</script>