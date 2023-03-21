
<!-- 步驟條 -->
<script  setup>
  // import card1 from '../Self/Sections/card.vue'

</script>

<script >
import step1 from './SetOD.vue'
import step2 from './SetO.vue'
import step3 from './SetShop.vue'

import { ref, onMounted, reactive } from 'vue'
import { RouterLink } from "vue-router";

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
      active: 0,
    }
  },
  methods: {

    next() {

      if (active.value == 0) {
        const member = JSON.parse(localStorage.getItem('customerData'))
        const SetOD = JSON.parse(localStorage.getItem('setorderdetail'))
        if (!member || !SetOD) {
          alert("麻煩請登入會員與選擇其一套裝行程");
          // console.log("麻煩請登入會員")
          return;
        }
      } else if (active.value == 1) {
        const setodData = JSON.parse(localStorage.getItem('setorder'))
        if (!setodData) {
          alert("麻煩請填寫下列所需資訊及確認套裝形成方案!");
          console.log("麻煩請填寫下列所需資訊及確認套裝形成方案")
          return;
        }
      } else if (active.value == 2) {


      }
      active.value++;
      if (this.active === 3) {
        this.active = 0;
      }
      this.content = `step${active.value + 1}`;
    },
    back() {
      this.active--;
      if (this.active === 0) {
        this.content = 'step1';
      } else if (this.active === 1) {
        this.content = 'step2';
      } else if (this.active === 2) {
        this.content = 'step3';
      }
    }
  }
}
</script>


<template>
  <!-- 步驟條 -->
  <div class="container mt-5 px-5">
    <el-steps :active="active" finish-status="success">
      <el-step title="第一步: 套裝行程" />
      <el-step title="第二步: 填寫詳細資訊" />
      <el-step title="第三步: 訂單確認" />
    </el-steps>

    <div style="margin-top: 12px">
      <el-button v-if="active > 0" @click="back">上一步</el-button>
      <el-button v-if="active < 2" @click="next">下一步</el-button>

    </div>

    <p></p>

    <component :is="content"></component>

  </div>
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