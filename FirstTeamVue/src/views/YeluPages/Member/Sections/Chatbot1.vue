
<template>
  <div id="chatbot">
    <div id="chatbox">

      <div v-for="message in messages" :key="message.id">


        <div v-if="message.sender === 'bot'" class="bot">{{ message.text }}</div>
        <div v-else class="user">{{ message.text }}</div>


        <div v-if="message.options" class="options">
          <div v-for="option in message.options" :key="option.id" @click="selectOption(option)">{{ option.text }}</div>
        </div>
      </div>

    <!-- *使用 v-for 指令來渲染聊天記錄。
      *messages 是一個數組，它包含所有的聊天記錄。
      *使用 v-if 指令來區分發送者是機器人還是用戶。如果發送者是機器人，使用 "bot" 類名來標記樣式；如果是用戶，使用 "user" 類名來標記樣式。
        *用 v-for 指令渲染每一個選項，並為每個選項設置點擊事件，當用戶點擊選項時，會調用 selectOption 方法。 -->

    </div>

  <!-- <div id="inputbox">
      <input type="text" v-model="newMessage" @keyup.enter="sendMessage" />
      <button @click="sendMessage">Send</button>
      </div> -->

    <!-- id 是 "inputbox"，它包含一個輸入框和一個發送按鈕，用戶可以在這裡輸入聊天內容。 -->


  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      messages: [
        {
          id: 1,
          sender: 'bot',
          text: '嗨，你今天想做什麼?',
          options: [
            { id: 1, text: '我想去露營', nextStep: 2, redirectUrl: 'https://www.example.com/camping' },
            { id: 2, text: '我想買一些露營用品', nextStep: 2, redirectUrl: 'https://www.example.com/camping' },
            { id: 3, text: '你幫我推薦', nextStep: 2, redirectUrl: 'https://www.example.com/camping' },
          ],
        },
      ],
      newMessage: '',
      currentStep: 1,
    });

    const sendMessage = () => {
      state.messages.push({ sender: 'user', text: state.newMessage });
      switch (state.currentStep) {
        case 1:
          if (state.newMessage.toLowerCase() === 'bye') {
            state.messages.push({ sender: 'bot', text: 'Goodbye!' });
            state.newMessage = '';
          } else {
            const selectedOption = state.messages[state.currentStep - 1].options.find(
              (option) => option.text.toLowerCase() === state.newMessage.toLowerCase(),
            );
            if (selectedOption) {
              state.currentStep = selectedOption.nextStep;
              state.messages.push({ sender: 'bot', text: 'Please select one of the following options:', options: state.messages[state.currentStep - 1].options });
            } else {
              state.messages.push({ sender: 'bot', text: 'I\'m sorry, I don\'t understand. Could you please repeat that?', options: state.messages[state.currentStep - 1].options });
            }
            state.newMessage = '';
          }
          break;
        case 2:
          // handle product inquiry
          break;
        case 3:
          // handle payment inquiry
          break;
        case 4:
          // handle other inquiry
          break;
        default:
          break;
      }
    };





    const selectOption = (option) => {
      state.messages.push({ sender: 'user', text: option.text });
      state.currentStep = option.nextStep;
      if (option.redirectUrl) {
        window.location.href = option.redirectUrl;
      } else {
        state.messages.push({ sender: 'bot', text: 'Please select one of the following options:', options: state.messages[state.currentStep - 1].options });
      }
    };




    return {
      messages: state.messages,
      newMessage: state.newMessage,
      sendMessage,
      selectOption,
    };
  },
};
</script>

<style>
#chatbot {
  width: 400px;
  margin: 20px auto;
}

#chatbox {
  height: 300px;
  border: 1px solid grey;
  overflow-y: scroll;
}

.bot {
  margin-bottom: 10px;
  padding: 10px;
  background-color: lightgrey;
  border-radius: 5px;
  max-width: 70%;
}

.user {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #0077ff;
  color: white;
  border-radius: 5px;
  max-width: 70%;
  align-self: flex-end;
}

.options {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}

.options div {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #0077ff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

#inputbox {
  display: flex;
  margin-top: 10px;
}

#inputbox input[type='text'] {
  flex-grow: 1;
  padding: 10px;
  border-radius: 5px;
  border: none;
}

#inputbox button {
  margin-left: 10px;
  padding: 10px;
  background-color: #0077ff;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>



