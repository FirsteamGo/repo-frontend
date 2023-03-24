<!-- <template>
  <div>
    <div v-for="message in messages" :key="message.id">
      <div v-if="message.role === 'system'" class="system-message">{{ message.content }}</div>
      <div v-else-if="message.role === 'user'" class="user-message">{{ message.content }}</div>
      <div v-else-if="message.role === 'assistant'" class="assistant-message">{{ message.content }}</div>
    </div>
    <div class="input-box">
      <input type="text" v-model="userMessage" @keyup.enter="sendMessage">
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { create } from 'openai';

export default {
  setup() {
    const messages = ref([
      { id: 1, role: 'system', content: 'You are a knowledgeable and helpful assistant.' },
    ]);
    const userMessage = ref('');

    openai.api_key = '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';

    async function sendMessage() {
      if (!userMessage.value.trim()) {
        return;
      }

      messages.value.push({ id: messages.value.length + 1, role: 'user', content: userMessage.value });
      userMessage.value = '';

      const chat = await create({
        engine: 'davinci',
        prompt: messages.value.map((message) => `${message.role}: ${message.content}`).join('\n'),
        temperature: 0.5,
        max_tokens: 1024,
      });

      console.log(chat)

      const assistantMessage = chat.choices[0].text.trim();
      messages.value.push({ id: messages.value.length + 1, role: 'assistant', content: assistantMessage });
    }

    return {
      messages,
      userMessage,
      sendMessage,
    };
  },
};
</script>

<style scoped>
.system-message {
  color: blue;
}

.user-message {
  color: green;
}

.assistant-message {
  color: red;
}

.input-box {
  display: flex;
}
</style> -->

<!-- <template>
  <div>
    <div v-for="message in messages" :key="message.id">
      <div v-if="message.role === 'system'" class="system-message">{{ message.content }}</div>
      <div v-else-if="message.role === 'user'" class="user-message">{{ message.content }}</div>
      <div v-else-if="message.role === 'assistant'" class="assistant-message">{{ message.content }}</div>
    </div>
    <div class="input-box">
      <input type="text" v-model="userMessage" @keyup.enter="sendMessage">
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import openai from 'openai';

export default {
  setup() {
    const messages = ref([
      { id: 1, role: 'system', content: 'You are a knowledgeable and helpful assistant.' },
    ]);
    const userMessage = ref('');

    openai.api_key = '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';

    async function sendMessage() {
      if (!userMessage.value.trim()) {
        return;
      }

      messages.value.push({ id: messages.value.length + 1, role: 'user', content: userMessage.value });
      userMessage.value = '';

      const chat = await openai.ChatCompletion.create({
        model: 'davinci',
        prompt: messages.value.map((message) => `${message.role}: ${message.content}`).join('\n'),
        temperature: 0.5,
        max_tokens: 1024,
      });

      const assistantMessage = chat.choices[0].text.trim();
      messages.value.push({ id: messages.value.length + 1, role: 'assistant', content: assistantMessage });
    }

    return {
      messages,
      userMessage,
      sendMessage,
    };
  },
};
</script>

<style scoped>
.system-message {
  color: blue;
}

.user-message {
  color: green;
}

.assistant-message {
  color: red;
}

.input-box {
  display: flex;
}
</style> -->


 