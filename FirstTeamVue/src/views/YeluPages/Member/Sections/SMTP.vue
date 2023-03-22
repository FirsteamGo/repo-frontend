<!-- 參考 -->
<!-- https://peng940825.github.io/2020/02/22/2020-02-22-emailjs/ -->
<!-- https://www.emailjs.com/docs/sdk/send-form/ -->
<!-- https://ithelp.ithome.com.tw/articles/10233023 -->

<template>
  <form @submit.prevent="sendEmail">
    <!-- 表單元素... -->
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
</script>
