
<!-- 步驟條 -->
<script  setup>
  // import card1 from '../Self/Sections/card.vue'
 
  </script>

<script >
  import step1 from '../Self/Sections/step1.vue'
  import step2 from '../Self/Sections/step2.vue'
  // import step3 from '../Self/Sections/step3.vue'
  import step3 from '../Act/Sections/Actselectcard.vue'

  import { ref } from 'vue'
  
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
       if (active.value > 3) active.value = 0
       
       if (active.value ==1){
         this.content = 'step1';
      }else if(active.value ==2){
        this.content = 'step2';
      }else{
        this.content = 'step3';
      }
        
    }
  }}
</script>


<template>
<!-- 步驟條 -->
  <el-steps :active="active" finish-status="success" >
    <el-step title="第一步: 挑選營地" />
    <el-step title="第二步: 挑選飲食" />
    <el-step title="第三步: 挑選活動 完成" />
  </el-steps>
  
  <el-button style="margin-top: 12px" @click="next" >Next step</el-button>
  <!-- <el-button style="margin-top: 12px" @click="next" v-model="step_data">Next step {{step_data.show_name}}</el-button> -->
  

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