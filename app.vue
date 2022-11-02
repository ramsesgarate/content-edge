<template>
  <div>
    <header>
      <NuxtLink to="/">Home</NuxtLink>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
           <li>
            <NuxtLink to="/about">Sobre mi</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <NuxtPage />
  </div>
</template>
