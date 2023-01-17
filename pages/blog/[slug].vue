import { ProseA } from '../../.nuxt/components';
<script setup lang="ts">
const route = useRoute()
const views = await useViews(route.params.slug)

const path = route.path

const { data: article } = await useAsyncData(`content:blog-${path}`, () => queryContent(path).findOne());

definePageMeta({
  title: 'Post',
  description: 'Post description about test',
})
</script>

<template>
    <div class="py-20">
        <h1
            class="text-4xl font-bold tracking-tight text-black dark:(text-white) sm:text-5xl text-center lg:text-6xl mb-4">
            {{ article.title }}
        </h1>
        <div class="flex items-center justify-center flex-wrap font-semibold">
            <time>{{ article.publishedAt }}</time>
            <span class="mx-1"> · </span>
            {{ views }} views
        </div>
        <Prose>
            <ContentRenderer :value="article"></ContentRenderer>
        </Prose>
    </div>
</template>
