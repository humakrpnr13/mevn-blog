<template>
  <div class="max-w-6xl mx-auto px-4 bg-[#F8F5F1] py-8">
    <h2 class="text-3xl font-bold text-center mb-8 text-[#183928]">
      Latest Blog Posts
    </h2>

    <div v-if="loading" class="text-center text-[#546E18] py-8">Loading posts...</div>
    <div v-else-if="error" class="text-center text-red-500 py-8">Error: {{ error }}</div>
    <div v-else-if="posts.length === 0" class="text-center text-[#546E18] py-8">No posts available yet.</div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="post in posts"
        :key="post._id"
        class="bg-[#FFFDF6] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
      >
         <div v-if="post.imageUrl" class="w-full h-48 bg-gray-200 overflow-hidden">
          <img
            :src="post.imageUrl"
            :alt="post.imageAlt || post.title"  class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2 text-[#183928]">
            {{ post.title }}
          </h3>
          <p class="text-sm text-[#546E18] mb-4">
            {{ new Date(post.createdAt).toLocaleDateString() }}
            <span
              v-if="post.category"
              class="ml-2 px-2 py-0.5 bg-[#D2F059] text-[#183928] text-xs font-semibold rounded-full"
            >
              {{ post.category }}
            </span>
          </p>
          <p class="text-[#333333] leading-relaxed mb-4">
            {{ truncateContent(post.content, 200) }}
          </p>
          <router-link
            :to="{ name: 'PostDetail', params: { id: post._id } }"
            class="inline-block bg-[#546E18] hover:bg-[#183928] text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
          >
            Read More
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',  
  data() {
    return {
      posts: [],
      loading: true,
      error: null
    };
  },
  async created() {
    await this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('http://localhost:3000/api/posts');
        this.posts = response.data;
      } catch (err) {
        console.error("Error fetching posts:", err);
        this.error = 'Failed to load posts. Please ensure your backend is running and accessible.';
      } finally {
        this.loading = false;
      }
    },
    truncateContent(content, maxLength) {
      if (content.length > maxLength) {
        return content.substring(0, maxLength) + '...';
      }
      return content;
    }
  }
};
</script>

<style scoped>
body {
  font-family: 'Noto Sans', sans-serif;
}
</style>