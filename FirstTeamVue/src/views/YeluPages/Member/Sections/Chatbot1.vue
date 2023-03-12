<template>
  <div>
    <div v-for="msg in messages" :key="msg.id" class="message">
      <div class="bot" v-if="msg.sender === 'bot'">
        {{ msg.content }}
        <div v-if="msg.options">
          <div v-for="(option, index) in msg.options" :key="index">

            <button @click="selectOption(msg.id, option.value)">{{ option.label }}</button>
          
          
          </div>
        </div>
      </div>
      <div class="user" v-else>
        {{ msg.content }}
      </div>
    </div>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="newMessage" placeholder="Type a message...">
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Chatbot',
  setup() {
    const messages = reactive([
      { id: 1, sender: 'bot', content: '哈囉! 你想要做什麼呢?', options: [
        { label: '我想露營，我要怎麼做呢?', value: 'option1' },
        { label: '我想隨便看看~', value: 'option2' },
        //{ label: 'Option 3', value: 'option3' },
      ] },
    ])
    let newMessage = ''

    function submitForm() {
      if (!newMessage) return
      messages.push({ id: messages.length + 1, sender: 'user', content: newMessage })
      newMessage = ''
      scrollToBottom()
    }

    function selectOption(msgId, optionValue) {
      const msgIndex = messages.findIndex(msg => msg.id === msgId)
      messages[msgIndex].options = null
      messages.push({ id: messages.length + 1, sender: 'bot', content: `You selected ${optionValue}.` })
      scrollToBottom()
    }





    

    function scrollToBottom() {
      setTimeout(() => {
        const chatWindow = document.querySelector('.chat-window')
        chatWindow.scrollTop = chatWindow.scrollHeight
      }, 0)
    }

    return {
      messages,
      newMessage,
      submitForm,
      selectOption,
    }
  },
}
</script>

<style scoped>
.message {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.bot {
  background-color: #eee;
  border-radius: 10px;
  padding: 10px;
  max-width: 80%;
}
.bot button {
  margin: 5px;
  padding: 5px 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}
.user {
  align-self: flex-end;
  background-color: #007bff;
  color: #fff;
  border-radius: 10px;
  padding: 10px;
  max-width: 80%;
}
form {
  display: flex;
  margin-top: 10px;
}
input[type="text"] {
  flex-grow: 1;
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>