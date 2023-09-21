<script setup lang="ts">
import { useQuery, QueryClient, useQueryClient } from "@tanstack/vue-query";
import PSpinner from '@/components/ui/PSpinner.vue'
import { fetcher } from "@/mixos";
import PButton from "./ui/PButton.vue";
defineProps<{ msg: string }>();
const client = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 2,
    },
  },
});
interface PostDetils {
  id: number,
  title: string
}
interface Post{
  status: number,
  posts:PostDetils[]
}
// type Post = { status: string; posts:Array  };
const fetchAll = async (): Promise<Post> => {
  try {
    const res = await fetcher.get("/api/posts");
    return res.data
  } 
  catch (err) {
    console.debug('Error in fetch Post', err)
    // return `Error in fetch Post:'${err}`
    return {status:401,posts:[]};
  }
};
const { isLoading, isSuccess, data } = useQuery({
  queryKey: ["first"],
  queryFn: fetchAll,
  refetchOnWindowFocus: false,
});
</script>

<template>
  <div class="greetings p-8">
    <h1 class="green">{{ msg }}</h1>
    <h2 v-if="isLoading" class="green text-xl"><PButton :disabled="true"><PSpinner></PSpinner></PButton></h2>
    <template v-if="isSuccess">
      <code>
      <template v-for="post in data?.posts">
       {{ post }}
      </template>
    </code>
    </template>
    <!-- <h4 class="text-gray-400 text-2xl my-2">Using tailwind</h4> -->
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings {
    text-align: left;
  }
}
</style>
