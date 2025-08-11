<template>
  <div class="fixed bottom-6 right-6 z-50">
    <button
      v-if="!isOpen"
      @click="isOpen = true"
      class="w-14 h-14 rounded-full bg-[#183928] text-[#F8F5F1] shadow-xl flex items-center justify-center transition-transform duration-300 transform hover:scale-110"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.896 9.896 0 01-4.243-1.071L3 21l1.636-4.909A9.896 9.896 0 013 12C3 7.582 7.03 4 12 4s9 3.582 9 8z" />
      </svg>
    </button>

    <div 
      v-else 
      class="w-80 h-96 bg-[#F8F5F1] text-[#333333] border-2 border-[#183928] rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-500 ease-in-out"
    >
      <div class="flex justify-between items-center bg-[#183928] text-white p-3">
        <span class="font-bold">Hüma's Chatbot</span>
        <button @click="isOpen = false" class="text-white hover:text-[#D2F059]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div ref="chatContainer" class="flex-grow p-4 overflow-y-auto space-y-4">
  <div 
    v-for="(msg, index) in messages" 
    :key="index"
    :class="{'self-end text-right': msg.isUser, 'self-start text-left': !msg.isUser}"
    class="flex flex-col max-w-xs"
  >
    <span 
      :class="{'bg-[#D2F059] text-[#183928] rounded-br-none': msg.isUser, 'bg-white text-[#333333] rounded-bl-none': !msg.isUser}"
      class="p-3 rounded-xl shadow-md text-sm whitespace-pre-wrap"
    >
      {{ msg.text }}
    </span>
  </div>
</div>

      <div class="p-3 border-t border-[#D2F059]">
        <form @submit.prevent="sendMessage" class="flex items-center">
          <input 
            v-model="currentMessage"
            :disabled="isLoading"
            type="text" 
            placeholder="Type your message..." 
            class="flex-grow p-2 rounded-lg border border-[#D2F059] bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#183928]"
          />
          <button 
            type="submit" 
            :disabled="!currentMessage || isLoading"
            class="ml-2 p-2 bg-[#183928] text-[#F8F5F1] rounded-lg hover:bg-[#546E18] disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l.649-.299A1 1 0 005.58 16H15.42a1 1 0 00.932-1.482l-.649-.299a1 1 0 00-1.169-1.409l-7 14z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isOpen: false,
      messages: [
        { text: 'Hi! How can I help you?', isUser: false },
      ],
      currentMessage: '',
      isLoading: false,
    };
  },
  methods: {
    async sendMessage() {
      if (!this.currentMessage.trim()) return;

      const userMessage = this.currentMessage;
      this.messages.push({ text: userMessage, isUser: true });
      this.currentMessage = '';
      this.isLoading = true;

      this.$nextTick(() => {
        this.scrollToBottom();
      });

      try {
        const response = await axios.post('http://localhost:3000/api/chatbot', { message: userMessage });
        
        this.messages.push({ text: response.data.reply, isUser: false });

      } catch (error) {
        console.error("Error retrieving response from API:", error);
        this.messages.push({ 
          text: "Sorry, I can't provide a response at the moment. Please try again later.", 
          isUser: false 
        });
      } finally {
        this.isLoading = false;
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }
    },
    scrollToBottom() {
      const container = this.$refs.chatContainer;
      container.scrollTop = container.scrollHeight;
    }
  }
};
</script>