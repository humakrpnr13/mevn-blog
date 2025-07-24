<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-6 text-[#546E18] text-center">Get in Touch</h1>
    <p class="text-lg text-[#183928] mb-10 text-center">
      I'd love to hear from you! Feel free to ask questions, share feedback, or just say hello.
    </p>

    <form @submit.prevent="submitForm" class="space-y-6 bg-white p-8 rounded-xl shadow-md">
      <div v-if="statusMessage" :class="messageClass" class="p-3 rounded-md text-center">
        {{ statusMessage }}
      </div>

      <div>
        <label for="name" class="block text-sm font-medium text-[#183928] mb-1">Name</label>
        <input
          id="name"
          type="text"
          v-model="form.name"
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2F059]"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-[#183928] mb-1">Email</label>
        <input
          id="email"
          type="email"
          v-model="form.email"
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2F059]"
          placeholder="you@example.com"
          required
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-[#183928] mb-1">Message</label>
        <textarea
          id="message"
          rows="5"
          v-model="form.message"
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2F059]"
          placeholder="Type your message here..."
          required
        ></textarea>
      </div>

      <div class="text-right">
        <button
          type="submit"
          :disabled="isSubmitting"
          class="bg-[#546E18] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#3d4f12] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitting: false,
      statusMessage: '',
      messageClass: ''
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.statusMessage = '';
      this.messageClass = '';
      try {
        const response = await axios.post('http://localhost:3000/api/contact/send', this.form);
        this.statusMessage = response.data.message;
        this.messageClass = 'bg-green-100 text-green-700';
      
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      } catch (error) {
        console.error("Error sending message:", error);
        this.statusMessage = error.response?.data?.message || 'Failed to send message. Please try again later.';
        this.messageClass = 'bg-red-100 text-red-700';
      } finally {
        this.isSubmitting = false;
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