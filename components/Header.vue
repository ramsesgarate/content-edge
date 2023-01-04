<template>
  <div>
    <header class="sticky top-0 flex justify-center w-full max-w-full min-h-16 z-99 bg-backdrop px-4 md:px-8">
      <div class="flex items-center justify-center text-black dark:(text-white) font-bold">
        <NuxtLink to="/" class="bg-black text-white dark:(bg-white text-black) px-2 py-1 rounded text-xl font-bold font-sans tracking-widest text-shadow-sm">
          Home
        </NuxtLink>
      </div>
      <nav class="flex flex-1 justify-center items-center m-0 w-full font-medium">
        <ul class="flex items-center lg:(space-x-7) sm:space-x-2 space-x-1">
          <li class="!inline-flex items-center group">
            <NuxtLink v-slot="{ isActive }" to="/blog" >
              <div
                class="md:(px-3) text-black px-1 py-1 rounded hover:(bg-gray-300)"
                :class="isActive ? ['bg-gray-300 dark:(bg-neutral-800)'] : []">

                Blog
                </div>
            </NuxtLink>
          </li>
          <li class="!inline-flex items-center group">
            <NuxtLink to="/about" v-slot="{ isActive }">
              <div
                class="md:(px-3) text-black px-1 py-1 rounded hover:(bg-gray-300)"
                :class="isActive ? ['bg-gray-300 dark:(bg-neutral-800)'] : []">

                About
                </div>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>