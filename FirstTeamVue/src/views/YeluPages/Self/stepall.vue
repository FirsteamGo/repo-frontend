<script  setup>
import card1 from '../Self/Sections/card.vue'

</script> 

<script >
//<!-- 步驟條 -->
import { ref } from 'vue'
import CampIndex from '../Camp/Sections/CampIndex.vue'
import step2 from '../Self/Sections/step2.vue'
import step3 from '../Self/Sections/step3.vue'
import selfshoppinglist from '../shoppingcart/selfshoppinglist.vue'



const active = ref(0)
const dialogVisible = ref(false)

export default {
  components: {
    CampIndex,  
    step2,
    step3
  },
  data() {
    return {
      content: 'CampIndex',
      BtnCart: false,
      BtnStep: true,
    }
  },
  methods: {
    next() {
      active.value++;
       if (active.value > 3) active.value = 0
       
       if (active.value ==1){
         this.content = 'step2';
      }else if(active.value ==2){
        this.content = 'step3';
        this.BtnCart = !this.BtnCart;
        this.BtnStep = !this.BtnStep;
      }else if(active.value ==3){
        this.content = 'step3';
      }else{
        this.content = 'CampIndex';
        this.BtnCart=false;
        this.Step1=false;
        this.BtnStep = true;
      }

    },
    // showBtnCart() {
    //   this.BtnCart = !this.BtnCart;
    // },
    addcart() {
    this.next(); // 觸發next方法
    this.dialogVisible = false; // 彈跳視窗消失
    alert('已加入購物車');
    this.BtnCart=false;
    this.Step1=true;
  },
  
  }
}

</script>


<template>
  <!-- 步驟條 -->
  <div class="container mt-5 px-5">
    <el-steps :active="active" finish-status="success">
      <el-step title="第一步: 挑選營地" />
      <el-step title="第二步: 相關活動" />
      <el-step title="第三步: 挑選飲食 完成" />
    </el-steps>

    <el-button v-if="BtnStep" style="margin-top: 25px" @click="next" >點我下一步</el-button>

   
  <!-- Modal彈跳視窗裡面要顯示的東西 --> 
  <el-dialog v-model="dialogVisible" title="確認購買清單" width="90%" draggable>
    <div class="modal-header">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <!-- 引用購物車組件(畫面) -->
    <selfshoppinglist/>
  </el-dialog>


   
    <el-button v-if="BtnCart" style="margin-top: 25px" @click="dialogVisible = true" >檢視購物清單</el-button>

    <el-button v-if="Step1" style="margin-top: 25px" @click="next" >重新選擇</el-button>
    
    <component :is="content"></component>


  </div>
</template>

<!-- <el-button v-if="showButtonA" style="margin-top: 25px" @click="dialogVisible = true" >檢視購物清單</el-button> -->



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