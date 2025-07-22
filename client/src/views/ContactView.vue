<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-6 text-[#546E18] text-center">Get in Touch</h1>
    <p class="text-lg text-[#183928] mb-10 text-center">
      I'd love to hear from you! Feel free to ask questions, share feedback, or just say hello.
    </p>

    <form class="space-y-6 bg-white p-8 rounded-xl shadow-md">
      <div>
        <label for="name" class="block text-sm font-medium text-[#183928] mb-1">Name</label>
        <input
          id="name"
          type="text"
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2F059]"
          placeholder="Your name"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-[#183928] mb-1">Email</label>
        <input
          id="email"
          type="email"
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2F059]"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-[#183928] mb-1">Message</label>
        <textarea
          id="message"
          rows="5"
          class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2F059]"
          placeholder="Type your message here..."
        ></textarea>
      </div>

      <div class="text-right">
        <button
          type="submit"
          class="bg-[#546E18] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#3d4f12] transition-colors duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactView'
};
</script>

<style scoped>
body {
  font-family: 'Noto Sans', sans-serif;
}
</style>
