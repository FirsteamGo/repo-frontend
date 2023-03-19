<template>
    <div>
        <el-aside width="100%">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in SetODID" :key="item">
            <img :src="`${mvc}${item.活動圖片}`" style=" height: 300px; display: block; margin: 0 auto;" />
          </el-carousel-item>
        </el-carousel>
      </el-aside>
    </div>
</template>


<script setup>

  import { values } from 'lodash';
  import axios from 'axios';
  import { reactive,ref,computed,onMounted } from 'vue';
  const webApi = ref("https://localhost:7108/api/SetOrderDetails");
  const mvc = ref("https://localhost:7120/images/");
  const SetODID = reactive([])
    const gitpricePerPerson = onMounted(()=>{
     axios.get(webApi.value)
    .then(res => {    
          
      SetODID.splice(0, res.data.length, ...res.data);
    })
    .catch((err) => {
      console.error(err);
    })
  })


</script>