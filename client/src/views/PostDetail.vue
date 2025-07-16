<template>
  <div class="container mx-auto p-4">
    <div v-if="loading" class="text-center text-gray-600 py-8">Loading post...</div>
    <div v-else-if="error" class="text-center text-red-500 py-8">Error: {{ error }}</div>
    <div v-else-if="!post" class="text-center text-gray-600 py-8">Post not found.</div>

    <div v-else class="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold mb-4 text-gray-900">{{ post.title }}</h1>
      <p class="text-sm text-gray-600 mb-6">
        By <span class="font-medium">{{ post.author }}</span> on {{ new Date(post.createdAt).toLocaleDateString() }}
        <span v-if="post.category" class="ml-4 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">{{ post.category }}</span>
      </p>
      
      <div class="prose max-w-none text-gray-800 leading-relaxed mb-8">
        <p>{{ post.content }}</p>
      </div>

      <div v-if="post.tags && post.tags.length" class="mb-8">
        <span v-for="tag in post.tags" :key="tag" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{{ tag }}
        </span>
      </div>

      <div class="flex justify-between items-center mt-8 pt-4 border-t border-gray-200">
        <router-link to="/" class="inline-block text-blue-500 hover:text-blue-800 font-bold transition-colors duration-300">
          &larr; Back to All Posts
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PostDetail',
  props: ['id'],
  data() {
    return {
      post: null,
      loading: true,
      error: null
    };
  },
  async created() {
    await this.fetchPost();
  },
  watch: {
    id: 'fetchPost'
  },
  methods: {
    async fetchPost() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`http://localhost:3000/api/posts/${this.id}`);
        this.post = response.data;
      } catch (err) {
        console.error("Error fetching post:", err);
        this.error = 'Failed to load post. It might not exist or there was a server error.';
        this.post = null;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
/* Tailwind CSS is used for styling */
</style>