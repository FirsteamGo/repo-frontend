<template>
    <div>
      <h1>歡迎使用選擇對話機器人</h1>
      <div v-if="!chatStarted">
        <p>機器人：你好，我是一個對話機器人，你可以從以下選項中選擇一個來開始對話。</p>
        <ul>
          <li><button @click="startConversation('音樂')">音樂</button></li>
          <li><button @click="startConversation('運動')">運動</button></li>
          <li><button @click="startConversation('飲食')">飲食</button></li>
        </ul>
      </div>
      <div v-else>
        <p>機器人：<span>{{ botMessage }}</span></p>
        <p>你：<span>{{ userMessage }}</span></p>
        <form @submit.prevent="sendMessage">
          <label for="user-response">回覆：</label>
          <input type="text" id="user-response" v-model="userResponse">
          <button type="submit">發送</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          chatStarted: false,
          topic: '',
          botMessage: '',
          userMessage: '',
          userResponse: ''
        }
      },
      methods: {
        startConversation(topic) {
          this.topic = topic;
          this.botMessage = `你選擇了${topic}話題，我可以回答一些關於${topic}的問題。`;
          this.chatStarted = true;
        },
        sendMessage() {
          this.userMessage = this.userResponse;
          this.botMessage = this.generateResponse(this.userResponse);
          this.userResponse = '';
        },
        generateResponse(userInput) {
          if (this.topic === '音樂') {
            return '你喜歡什麼樣的音樂？';
          } else if (this.topic === '運動') {
            return '你喜歡哪些運動項目？';
          } else if (this.topic === '飲食') {
            return '你喜歡哪些食物？';
          }
        }
      }
    }
  </script>
  