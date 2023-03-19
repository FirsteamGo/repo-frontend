<template>
    <div>
      <input type="file" ref="fileInput" accept="image/*">
      <button @click="uploadImage">上傳圖片</button>
    </div>
  </template>

<script>
import axios from 'axios';
import {ref,reactive,onMounted} from 'vue';
const webApi = ref("https://localhost:7108/api/SetOrders/api/upload");
const mvc = ref("https://localhost:7120/images/"); 
const imagedata = reactive([])
const file = reactive({
    name:'',
})


export default {
  methods: {
    async uploadImage() {
      const file = this.$refs.fileInput.files[0];     

      const formData = new FormData();
      formData.append('image', file, file.name);
      

      const response = await axios.post(webApi.value, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
    }
  }
}


</script>