<template>
  <el-row>
    <el-col>
      <el-card :body-style="{ padding: '0px' }">
        <img
          :src="imageUrl"
          class="image"
        />
        <div style="padding: 14px">
          <h3>會員照片</h3>
          <el-row class="mb-4">
            <input type="file" ref="fileInput" accept="image/*" @change="handleFileChange" style="width: 180px;height: 120px; font-size: small;margin-left:10px;margin-right: 10px;"/>
            <el-button type="primary" @click="uploadImage" class="btn-sm">上傳圖片</el-button>
          </el-row>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

const webApi = ref("https://localhost:7108/api/MemberInfoes/api/upload");

export default {
  data() {
    return {
      imageUrl: ""
    };
  },
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
      alert("上傳成功")
    },
    handleFileChange() {
      const file = this.$refs.fileInput.files[0];
      this.imageUrl = URL.createObjectURL(file);
    }
  }
}
</script>
