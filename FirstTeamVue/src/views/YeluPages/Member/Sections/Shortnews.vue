<!-- <template>
  <div>
    <label for="phone">電話號碼:</label>
    <input id="phone" type="tel" v-model="phoneNumber" />
    <button @click="sendSmsCode" v-if="!smsSent">發送簡訊驗證碼</button>
    <div v-if="smsSent">
      <label for="code">驗證碼:</label>
      <input id="code" type="text" v-model="verificationCode" />
      <button @click="verifyCode">驗證</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import twilio from 'twilio';
import { Buffer } from 'safe-buffer';

export default {
  name: 'SmsVerification',
  setup() {
    const phoneNumber = ref('');
    const smsSent = ref(false);
    const verificationCode = ref('');
    const accountSid = 'ACee4c84fb0c8bbd8aa734c86db8a8469e';
    const authToken = '8cc3030b6bdaf4f15c17d0c50479f426';
    const twilioClient = twilio(accountSid, authToken);

    const sendSmsCode = async () => {
  try {
    await twilioClient.verify.services('ACee4c84fb0c8bbd8aa734c86db8a8469e')
      .verifications.create({
        to: phoneNumber.value,
        channel: 'sms'
      });
    smsSent.value = true;
  } catch (error) {
    console.error(error);
  }
};

const verifyCode = async () => {
  try {
    const response = await twilioClient.verify.services('ACee4c84fb0c8bbd8aa734c86db8a8469e')
      .verificationChecks.create({
        to: phoneNumber.value,
        code: verificationCode.value
      });
    if (response.status === 'approved') {
      console.log('驗證碼正確');
    } else {
      console.log('驗證碼不正確');
    }
  } catch (error) {
    console.error(error);
  }
};

    return {
      phoneNumber,
      smsSent,
      verificationCode,
      sendSmsCode,
      verifyCode,
    };
  },
};
</script> -->
