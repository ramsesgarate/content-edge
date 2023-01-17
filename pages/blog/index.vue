<script setup lang="ts">
definePageMeta({
  title: 'Blog',
  description: 'Test description for blog',
})
</script>

<template>
  <div>
    <section class="pt-20 sm:pt-24">
      <div class="lg:col-span-2">
        <h1
          class="text-4xl font-extrabold tracking-tight text-black dark:(text-white) sm:text-5xl text-left lg:text-6xl">
          Hi! I'm Blog
        </h1>
        <p class="mt-8 text-2xl font-bold  text-dark-50 dark:(text-gray-400) lg:text-left">
          Posts, tutorials, snippets, notes and whatever.
        </p>
      </div>
    </section>
    <PostList />
  </div>
</template>