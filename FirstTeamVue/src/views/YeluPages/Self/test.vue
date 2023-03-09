

<!-- 步驟條 -->
<script  setup>
  // import card1 from '../Self/Sections/card.vue'
 
  </script>

<script>
  import camp from '../Camp/CampView.vue'
  import select from '../Self/Sections/select.vue'
  import card from '../Self/Sections/card.vue'
  import { ref } from 'vue'
  
  const active = ref(0)
  // const step_data = ref({
  //   show_name: ""
  // })
  
  // const next = () => {
  //   changeContent();
  //   active.value++;
  //   if (active.value > 2) active.value = 0
  //   // if (active.value > 1) {
  //   //   step_data.value.show_name = "data1"
  //   // }else{
  //   //   step_data.value.show_name = "data2"
  //   // }    
  // }
    
  export default {
    components: {
      camp,
      select,
      card
    },
    data() {
      return {
        content: 'camp',
      }
    },
     methods: {
      next() {      
      active.value++;
       if (active.value > 2) active.value = 0
       
       if (active.value ==1){
         this.content = 'select';
      }else if(active.value ==2){
        this.content = 'card';
      }else{
        this.content = 'camp';
      }
        
    }
  }}
</script>

<!-- 標籤組件 -->
<!-- <script>
import card1 from '../Self/Sections/card.vue'
import select from '../Self/Sections/select.vue'
import card from '../Self/Sections/card.vue'

  
export default {
  components: {
    card1,
    select,
    card
  },
  data() {
    return {
      currentTab: 'card1',
      tabs: ['card1','select','card']

    }
  }
}
</script> -->

<template>
<!-- 步驟條 -->
  <el-steps :active="active" finish-status="success" >
    <el-step title="Step 1" />
    <el-step title="Step 2" />
    <el-step title="Step 3" />
  </el-steps>
  
  <el-button style="margin-top: 12px" @click="next" >Next step</el-button>
  <!-- <el-button style="margin-top: 12px" @click="next" v-model="step_data">Next step {{step_data.show_name}}</el-button> -->
  
  <!-- <card1/> -->
  <component :is="content"></component>

  <!-- 標籤 -->
  <!-- <div class="demo">
    <button
       v-for="tab in tabs"
       :key="tab"
       :class="['tab-button', { active: currentTab === tab }]"
       @click="currentTab = tab"
     >
      {{ tab }}
    </button>
	  <component :is="currentTab" class="tab"></component>
  </div> -->


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