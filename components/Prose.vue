<template>
  <div class="prose md:prose-xl dark:prose-invert mb-8 md:mb-12">
    <slot />
  </div>
</template>

<style>
.prose h2 a,
.prose h3 a,
.prose h4 a,
.prose h5 a {
  @apply no-underline hover: border-none;
}

p a {
  @apply text-emerald-400 !important; 
}
</style>