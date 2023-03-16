<template>
  <el-upload action="#" list-type="picture-card" :auto-upload="false" :on-change="onChangeUpload">
    <el-icon><Plus /></el-icon>

    <template #file="{ file }">
      <div>
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <el-icon><zoom-in /></el-icon>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <el-icon><Download /></el-icon>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <el-icon><Delete /></el-icon>
          </span>
        </span>
      </div>
    </template>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'

import type { UploadFile } from 'element-plus'
import { removeGlobalNode } from 'element-plus/es/utils';

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file: UploadFile) => {
  console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  localStorage.setItem('imagePath', dialogImageUrl.value) // 將圖片路徑存入 local storage
  dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}

const onChangeUpload = (file, fileList)  => {
  const self = this
  const reader = new FileReader()
  reader.onload = function(e) {
    self.beforeUpdateImg.push(
      {
        uid: file.uid,
        photo: reader.result
      }
    )
  }
  // reader.readAsDataURL(file.raw)
  console.log('hii0ii');
  console.log(reader.readAsDataURL(file.raw));
  
  
}

// const on_change = (file: UploadFile, filelist) => {
  
//   const reader = new FileReader();

//   reader.readAsDataURL(file)

//     reader.onload = function (){
//     // imgResult = reader.result
//   }
//   reader.onerror = function (error){
//     // reject(error)
//   }
//   reader.onloadend = function (){
//     // resolve(imgResults)
//   }
//   console.log('hiii');
  

  // var tmp = new Promise(
//     function (resolve, reject){
//   const reader = new FileReader();
//   let imgResult = '';
//   reader.readAsDataURL(file.raw)
//   reader.onload = function (){
//     imgResult = reader.result
//   }
//   reader.onerror = function (error){
//     reject(error)
//   }
//   reader.onloadend = function (){
//     resolve(imgResults)
//   }
// }

// )





  // this.getBase64(file.raw).then(res => {
  //   const params = res.split(',')
  //   console.log(params, 'params');
  //   if (params.length > 0){
  //     this.proofImage = params[1];
  //   }
  // })
  // console.log(file)
// }
// getBase64(file_raw){
//   return new Promise(function (resolve, reject){
//   const reader = new FileReader()
//   let imgResult = '';
//   reader.readAsDataURL(file_raw)
//   reader.onload = function (){
//     imgResult = reader.result
//   }
//   reader.onerror = function (error){
//     reject(error)
//   }
//   reader.onloaded = function (){
//     resolve(imgResults)
//   }
// })
// }
</script>
