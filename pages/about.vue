<template>
  <div>
    <section class="py-20 sm:py-24">
      <h1 class="text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-left lg:text-6xl">
        Hi! I'm About
      </h1>

      <p class="mt-12 mb-6 font-medium md:text-left">
        This page corresponds to the `/about` route of your website. 
      </p>
      <div class="flex items-center justify-between gap-4 mt-12 sm:mt-10 flex-row sm:gap-6 lg:justify-start">
        <NuxtLink to="/blog" class="rounded-lg px-3 py-2 font-medium bg-black text-white hover:bg-gray-900 transition-colors duration-200">
          Go to blog
        </NuxtLink>
      </div>
    </section>
  </div>
</template> 