<script lang="ts" setup>
import { Post } from '../types/content';

interface Props {
  post: Post
}

defineProps<Props>()
</script>

<template>
  <div
    class="bg-light-100 border-gray-200 border transition-all duration-200 flex flex-col p-4 rounded-lg">
    <NuxtLink :to="post._path">
      <h3
        class="mb-4 text-gray-800 dark:(text-white) flex items-center flex-wrap font-bold text-xl tracking-wide leading-8 break-words">
        {{ post.title }}
      </h3>
      <p class="mb-4 line-clamp-4 flex-1">
        {{ post.description }}
      </p>
    </NuxtLink>
  </div>
</template>