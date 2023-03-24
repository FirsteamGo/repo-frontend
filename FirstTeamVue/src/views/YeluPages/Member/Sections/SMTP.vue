<template>
  <form @submit.prevent="sendEmail">
    <div class="field">
      <label for="from_name">from_name</label>
      <input type="text" v-model="from_name" name="from_name" id="from_name">
    </div>
    <div class="field">
      <label for="to">to</label>
      <input type="text" v-model="to" name="to" id="to">
    </div>
    <div class="field">
      <label for="reply_to">reply_to</label>
      <input type="text" v-model="reply_to" name="reply_to" id="reply_to">
    </div>
  
    <button type="submit">Send Email</button>
  </form>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      from_name: '',
      to: '',
      reply_to: '',
    };
  },
  methods: {
    sendEmail() {
      emailjs.init('fX63Yjh2AO1BY_O5U');
      const template_params = {
        from_name: this.from_name,
        to: this.to,
        reply_to: this.reply_to,
      };
      emailjs.send('service_svzw01k', 'template_ofnap0e', template_params)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text); 
          alert ('寄信成功，請去收信')
        }, (error) => {
          console.log('FAILED...', error);
        });
        
    },
  },
};
</script>






<!-- 參考 -->
<!-- https://peng940825.github.io/2020/02/22/2020-02-22-emailjs/ -->
<!-- https://www.emailjs.com/docs/sdk/send-form/ -->
<!-- https://ithelp.ithome.com.tw/articles/10233023 -->
<!-- https://blog.csdn.net/weixin_30836221/article/details/113369258 -->


<!-- <template>
    
  
  <form @submit.prevent="sendEmail">
    
    <button type="submit">寄信功能</button>
  </form>


</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        
      }
    };
  },
  methods: {
    sendEmail() {
      const templateParams = {
        user: this.form.name,
        userMail: this.form.email,
        emailContent: '成功收到信件',
      };

      emailjs.send('service_svzw01k', 'template_ofnap0e', templateParams, 'fX63Yjh2AO1BY_O5U')
        .then(() => {
          console.log('success!');
        }, (error) => {
          console.log('failed...', error);
        });

      alert ('寄信成功，請去收信')
    }
  }
}
</script> -->
