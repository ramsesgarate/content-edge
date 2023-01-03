<script setup lang="ts">
const { params: { slug } } = useRoute()

const views = await useViews(slug[0])

</script>

<template>
    <div>
        <div>{{views}} views</div>
        <ContentDoc />
    </div>
</template>
