<template>
  <div id="app" class="min-h-screen flex flex-col">
    <!-- Header Section -->
    <header class="bg-white shadow-md py-4">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <router-link to="/" class="text-3xl font-extrabold text-blue-600 hover:text-blue-700 transition-colors duration-300">
          My Personal Blog
        </router-link>
        <nav>
          <router-link to="/" class="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md transition-colors duration-300">Home</router-link>
        </nav>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="flex-grow container mx-auto px-4 py-8">
      <router-view/>
    </main>

    <!-- Footer Section -->
    <footer class="bg-gray-800 text-white py-6 mt-8">
      <div class="container mx-auto px-4 text-center text-sm">
        &copy; {{ currentYear }} My Personal Blog. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style>
/* Global styles, including font import */
/* Tailwind CSS is loaded via CDN in public/index.html */
</style>