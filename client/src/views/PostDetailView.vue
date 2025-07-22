<template>
  <div class="container mx-auto p-4 bg-[#F8F5F1]">
    <div v-if="loading" class="text-center text-[#546E18] py-8">Loading post...</div>
    <div v-else-if="error" class="text-center text-red-500 py-8">Error: {{ error }}</div>
    <div v-else-if="!post" class="text-center text-[#546E18] py-8">Post not found.</div>

    <div v-else class="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold mb-4 text-[#183928]">{{ post.title }}</h1>

      <p class="text-sm text-[#546E18] mb-6">
        Writed on {{ new Date(post.createdAt).toLocaleDateString() }}
        <span v-if="post.category" class="ml-4 px-2 py-1 bg-[#D2F059] text-[#183928] text-xs font-semibold rounded-full">{{ post.category }}</span>
      </p>

      <div v-if="post.imageUrl" class="mb-6">
        <img :src="post.imageUrl" :alt="post.imageAlt || post.title" class="w-full h-auto rounded-lg shadow-md object-cover" />
        <p v-if="post.imageAlt" class="text-center text-sm text-gray-500 mt-2">{{ post.imageAlt }}</p>
      </div>

      <div class="prose max-w-none text-[#333333] leading-relaxed mb-8">
        <p>{{ post.content }}</p>
      </div>

      <div v-if="post.tags && post.tags.length" class="mb-8">
        <span v-for="tag in post.tags" :key="tag" class="inline-block bg-[#D2F059] rounded-full px-3 py-1 text-sm font-semibold text-[#183928] mr-2 mb-2">
          #{{ tag }}
        </span>
      </div>

      <div class="flex justify-between items-center mt-8 pt-4 border-t border-[#D2F059]">
        <router-link to="/" class="inline-block text-[#546E18] hover:text-[#183928] font-bold transition-colors duration-300">
          ← Back to All Posts
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PostDetailView',
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
        this.error = 'Failed to load post.';
        this.post = null;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
body {
  font-family: 'Noto Sans', sans-serif;
}
</style>
