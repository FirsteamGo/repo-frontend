
<!-- 步驟條 -->
<script  setup>
  // import card1 from '../Self/Sections/card.vue'
 
  </script>

<script >
  import step1 from './SetOD.vue'
  import step2 from './SetO.vue'
  import step3 from './SetShop.vue'
  import { ref,onMounted,reactive } from 'vue'
  
  const active = ref(0)
    
  export default {
    components: {
      step1,
      step2,
      step3
    },
    data() {
      return {
        content: 'step1',
      }
    },
     methods: {
      
      next() {
        active.value++;
      // console.log(active.value);
      if(active.value==0)
      {
        this.content='step1';
      }
      else if(active.value==1)
      {
        this.content='step2';
      }
      else if(active.value==2)
      {
        this.content='step3';
      }
      else
      {
        active.value=0; 
        this.content='step1';
      }     
      
      // console.log(active.value);  
       
        
    }
  }}
</script>


<template>
<!-- 步驟條 -->
  <el-steps :active="active" finish-status="success" >
    <el-step title="第一步: 套裝行程" />
    <el-step title="第二步: 填寫詳細資訊" />
    <el-step title="第三步: 訂單確認" />
  </el-steps>
  
  <el-button style="margin-top: 12px" @click="next" >下一步</el-button>
  <!-- <el-button style="margin-top: 12px" @click="next" v-model="step_data">Next step {{step_data.show_name}}</el-button> -->
  <p></p>

  <component :is="content"></component>


</template>





<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>