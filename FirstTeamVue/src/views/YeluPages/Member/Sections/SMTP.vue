<!-- <script>
import nodemailer from 'nodemailer';

const sendEmail = (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'skunk00605@gmail.com', //發送郵件的 GMail 帳號
      pass: 'uhenadyvizsgmfdx' // GMail 帳號的密碼
    }
  });

  const mailOptions = {
    from: 'skunk00605@gmail.com',
    to: 'skunk00605@yahoo.com.tw', //接收郵件的地址
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};


sendEmail('recipient@example.com', 'Test email', 'This is a test email');
</script>

<template>
  <div>
    <el-button @click="$event =>sendEmail ()">
    測試
    </el-button>
  </div>
</template> -->
