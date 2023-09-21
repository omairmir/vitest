<script setup>
import PSkeleton from "@/components/ui/PSkeleton.vue";
</script>
<template>
    <div class="grid grid-cols-3 gap-x-4 gap-y-4 w-full">
      <div class="border bg-gradient-to-r from-primary to-secondary rounded-lg text-white">
        <PSkeleton></PSkeleton>
      </div>
      <div class="border bg-gradient-to-r from-primary to-secondary rounded-lg text-white">
        <PSkeleton></PSkeleton>
      </div>
      <div class="border bg-gradient-to-r from-primary to-secondary rounded-lg text-white">
        <PSkeleton></PSkeleton>
      </div>
    </div>
</template>