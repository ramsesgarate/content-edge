<script lang="ts" setup>
const { data } = await usePostList()

</script>

<template>
  <section class="my-8 sm:my-24">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
      <PostCard v-for="(post, index) in data" :key="index" :post="post" />
    </div>
  </section>
</template>