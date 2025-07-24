<template>
  <div class="flex min-h-screen bg-[#F8F5F1] text-[#333333] font-sans">

    <aside class="w-52 px-4 py-6 flex flex-col fixed h-full bg-[#F8F5F1] text-[#183928] z-10 border-r border-[#D2F059]">
      <h1 class="text-xl font-bold mb-6">Hüma's Blog</h1>
      <nav class="space-y-3 flex-grow">
        <router-link to="/" class="block hover:text-[#546E18] transition text-lg font-medium">Home</router-link>
        <router-link to="/about" class="block hover:text-[#546E18] transition text-lg font-medium">About Me</router-link>
        <router-link to="/contact" class="block hover:text-[#546E18] transition text-lg font-medium">Contact</router-link>
      </nav>
      <div class="mt-auto pt-6 text-sm text-[#546E18]">
        © 2025 Z. Hüma Karapınar
      </div>
    </aside>

    <div class="ml-52 flex flex-col w-full">
      <header class="w-full py-4 px-6 border-b border-[#D2F059] bg-[#F8F5F1] shadow-sm z-0">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold text-[#183928]">🎧 Recommended Podcasts</h2>
          <span class="text-sm text-[#546E18]">Updated: {{ currentDate }}</span>
        </div>
      </header>

      <main class="flex-grow px-6 py-8 space-y-6 bg-[#F8F5F1]">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentDate: new Date().toLocaleDateString(),
    };
  }
};
</script>

<style>
body {
  font-family: 'Noto Sans', sans-serif;
  overflow-y: scroll;
  background-color: #F8F5F1;
}
</style>
