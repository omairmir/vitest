
<script setup lang="ts">
/** Infinite quieries */
import { useInfiniteQuery } from "@tanstack/vue-query";
import PButton from "@/components/ui/PButton.vue";
import PSpinner from "@/components/ui/PSpinner.vue";
import CardLoading from '@/components/ui/CardLoading.vue'
import { cardApi } from '@/api/CardsApi'
import { useRouter } from 'vue-router';
const router = useRouter()
const {
  data,
  error,
  fetchNextPage,
  hasNextPage,
  isFetching,
  isFetchingNextPage,
  isLoading,
  isError,
} = useInfiniteQuery({
      queryKey: ["getCards"],
      queryFn: async ({ pageParam = 0 }) => {
        const res = await cardApi.getCards(pageParam)
        return res;
      },
      getNextPageParam: (lastPage) => lastPage.nextCursor,
});

const getCardByID = (value:string) => {
  console.log('reached', value)
  router.push({ name: 'profile', params: { id:value } })
}    
</script>

<template>
  <div class="px-3 py-6 overflow-y-scroll h-full">
    {{ router.currentRoute }}
    <div v-if="isLoading">
      <PSpinner class="text-center py-2"></PSpinner>
      <CardLoading></CardLoading>
    </div>
    <span v-else-if="isError">Error: {{ error }}</span>
    <div v-else-if="data">
      <!-- <span v-if="isFetching && !isFetchingNextPage">Fetching...</span> -->
      <div class="grid grid-cols-3 gap-y-4 gap-x-3 px-0 lg:px-12">
        <template v-for="(group, index) in data.pages" :key="index">
          <template v-for="card in group.cards" :key="card.id">
            <div class="border bg-gradient-to-r from-primary to-secondary rounded-xl text-white text-center cursor-pointer hover:scale-[1.02] p-1" @click="getCardByID(card.id)">
              <div class="p-2">
                <img :src="card.imageUrl" class="w-full" alt="card" />
              </div>
              <div class="flex justify-between px-1">
                <p class="font-bold underline">{{ card.name }}</p>
              <p class="font-bold underline">{{ card.artist }}</p>
              </div>
            </div>
          </template>
        </template>
      </div>
      <template v-if="isFetchingNextPage"> <CardLoading class="px-0 lg:px-12"></CardLoading> </template>
      <div v-if="hasNextPage" class="flex justify-center p-2 w-full">
        <PButton
          :click-handler="() => fetchNextPage()"
          :disabled="!hasNextPage || isFetchingNextPage"
        >
          <PSpinner v-if="isFetchingNextPage"></PSpinner>
          <span v-else>Load More</span>
        </PButton>
      </div>
      <div v-else class="text-center">Nothing more to load</div>
    </div>
  </div>
</template>
