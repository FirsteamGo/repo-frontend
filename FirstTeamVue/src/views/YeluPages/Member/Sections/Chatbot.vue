
<!--聊天機器人-->
<script >
export default {
    data() {
        return {
            messages: [],
            newMessage: ''
        }
    },
    methods: {
        sendMessage() {
            this.messages.push({ sender: 'user', text: this.newMessage });
            if (this.newMessage.toLowerCase() === 'bye') {
                this.messages.push({ sender: 'bot', text: 'Goodbye!' });
            } else if (this.newMessage.toLowerCase() === 'hi' || this.newMessage.toLowerCase() === 'hello') {
                this.messages.push({ sender: 'bot', text: 'Hi there! How can I assist you today?' });
            } else if (this.newMessage.toLowerCase() === 'what is the time now?') {
                this.messages.push({ sender: 'bot', text: 'The current time is ' + new Date().toLocaleTimeString() + '.' });
            } else {
                this.messages.push({ sender: 'bot', text: 'I\'m sorry, I don\'t understand. Could you please repeat that?' });
            }
            this.newMessage = '';
        }
    }
}
</script>
  
<template>
    <div id="app">
        <div id="chatbox">
            <div v-for="message in messages">
                <div v-if="message.sender === 'bot'" class="bot">{{ message.text }}</div>
                <div v-else class="user">{{ message.text }}</div>
            </div>
        </div>
        <div>
            <input type="text" v-model="newMessage" @keyup.enter="sendMessage">
            <button @click="sendMessage">Send</button>
        </div>
    </div>
</template>




<style>
#chatbox {
    width: 400px;
    height: 500px;
    border: 1px solid black;
    overflow-y: scroll;
    padding: 10px;
}

.bot {
    text-align: left;
    margin-bottom: 10px;
}

.user {
    text-align: right;
    margin-bottom: 10px;
}
</style>