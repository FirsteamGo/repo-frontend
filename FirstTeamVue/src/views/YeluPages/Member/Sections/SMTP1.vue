<!-- <template>
  <div>
    <form @submit.prevent="registerUser">
      <input type="text" v-model="username" placeholder="Username">
      <input type="email" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import nodemailer from 'nodemailer';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      message: ''
    };
  },
  methods: {
    registerUser() {
      axios.post('/register', {
        username: this.username,
        email: this.email,
        password: this.password
      })
        .then(response => {
          if (response.status === 200) {
            // Send verification email
            const transporter = nodemailer.createTransport({
              service: 'Gmail',
              auth: {
                user: 'your_email@gmail.com',
                pass: 'your_password'
              }
            });

            const mailOptions = {
              from: 'your_email@gmail.com',
              to: this.email,
              subject: 'Verification Email',
              text: `Hi ${this.username}, thank you for registering. Please click the link to verify your email: http://localhost:3000/verify?email=${this.email}`
            };

            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.log(error);
                this.message = 'Error sending verification email';
              } else {
                console.log('Verification email sent: ' + info.response);
                this.message = 'Verification email sent';
              }
            });
          }
        })
        .catch(error => {
          console.log(error);
          this.message = 'Error registering user';
        });
    }
  }
};
</script> -->
