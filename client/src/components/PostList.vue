<template>
  <div class="p-6 bg-white rounded-xl shadow-lg">
    <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">Latest Blog Posts</h2>
    
    <div v-if="loading" class="text-center text-gray-600 py-8">Loading posts...</div>
    <div v-else-if="error" class="text-center text-red-500 py-8">Error: {{ error }}</div>
    <div v-else-if="posts.length === 0" class="text-center text-gray-600 py-8">No posts available yet.</div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="post in posts" :key="post._id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2 text-gray-900">{{ post.title }}</h3>
          <p class="text-sm text-gray-600 mb-4">
            By <span class="font-medium">{{ post.author }}</span> on {{ new Date(post.createdAt).toLocaleDateString() }}
            <span v-if="post.category" class="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              {{ post.category }}
            </span>
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            {{ truncateContent(post.content, 200) }}
          </p>
          <router-link 
            :to="{ name: 'PostDetail', params: { id: post._id } }" 
            class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
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
  name: 'PostList',
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
/* Tailwind CSS is used for styling */
</style>
