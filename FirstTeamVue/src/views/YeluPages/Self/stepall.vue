<script  setup>
import card1 from "../Self/Sections/card.vue";
import { reactive, ref, onMounted, onBeforeUpdate, onUpdated } from "vue";
import CampIndex from "../Camp/Sections/CampIndex.vue";
import step2 from "../Self/Sections/step2.vue";
import step3 from "../Self/Sections/step3.vue";
import selfshoppinglist from "../shoppingcart/selfshoppinglist.vue";
import { useRoute } from "vue-router";
const route = useRoute();

const dialogVisible = ref(false);
let sf = reactive([]);
let sfitem = reactive([]);
const routerLinkPath = ref("step1");

const getStorage = () => {
  // let itemString = localStorage.getItem("selfaddItemList");
  // sf = itemString.substring(0, itemString.length - 2).split(", ");
  // // sfitem.length = 0;
  // sfitem.splice(0, sfitem.length);
  // for (let i = 0; i < sf.length; i++) {
  //   sfitem.push(JSON.parse(localStorage.getItem("self" + sf[i])));
  // }
};

//在step3.vue的 飲食項目點擊選購 傳送細項資料
const getsf = (item) => {
  sfitem.push(item);
};

const content = ref("CampIndex");
const BtnCart = ref(false);
const BtnStep = ref(true);
const active = ref(0);

// let index = ref(0);
// const component = reactive([CampIndex, step2, step3]);

const next = () => {
  active.value++;
  if (active.value > 3) active.value = 0;

  if (active.value == 1) {
    // content.value = "step2";
    // index.value = 1;
    routerLinkPath.value = "step2";
  } else if (active.value == 2) {
    // content.value = "step3";
    // index.value = 2;
    routerLinkPath.value = "step3";
  } else if (active.value == 3) {
    // content.value = "step3";
    // index.value = 2;
    routerLinkPath.value = "step3";
  } else {
    // content.value = "CampIndex";
    // index.value = 0;
    // Step1.value = false;
    routerLinkPath.value = "step1";
  }
};

//畫面首次載入後執行
onMounted(() => {
  if (route.name == "step1") {
    routerLinkPath.value = "step1";
  } else if (route.name == "step2" || route.name == "step2-p") {
    routerLinkPath.value = "step2";
  } else if (route.name == "step3") {
    routerLinkPath.value = "step3";
  }
});

//畫面更新後執行
onUpdated(() => {
  if (route.name == "step1") {
    active.value = 0;
    BtnCart.value = false;
    BtnStep.value = true;
  } else if (route.name == "step2" || route.name == "step2-p") {
    active.value = 1;
    BtnCart.value = false;
    BtnStep.value = true;
  } else if (route.name == "step3") {
    active.value = 2;
    BtnCart.value = true;
    BtnStep.value = false;
  }
});
</script> 

<script >
// const active = ref(0);

// export default {
//   components: {
//     CampIndex,
//     step2,
//     step3,
//   },
//   data() {
//     return {
//       content: "CampIndex",
//       BtnCart: false,
//       BtnStep: true,
//     };
//   },
//   methods: {
//     next() {
//       active.value++;
//        if (active.value > 3) active.value = 0

//       if (active.value == 1) {
//         this.content = "step2";
//       } else if (active.value == 2) {
//         this.content = "step3";
//         this.BtnCart = !this.BtnCart;
//         this.BtnStep = !this.BtnStep;
//       } else if (active.value == 3) {
//         this.content = "step3";
//       } else {
//         this.content = "CampIndex";
//         this.BtnCart = false;
//         this.Step1 = false;
//         this.BtnStep = true;
//       }
//     },
//     // showBtnCart() {
//     //   this.BtnCart = !this.BtnCart;
//     // },
//     addcart() {
//       this.next(); // 觸發next方法
//       this.dialogVisible = false; // 彈跳視窗消失
//       alert("已加入購物車");
//       this.BtnCart = false;
//       this.Step1 = true;
//     },
//   },
// };
</script>

<template>
  <!-- 步驟條 -->
  <div class="container mt-5 px-5">
    <el-steps :active="active" finish-status="success">
      <el-step title="第一步: 營地/活動" />
      <el-step title="第二步: 填寫詳細資訊" />
      <el-step title="第三步: 選飲食 完成" />
    </el-steps>

    <router-link :to="{ name: routerLinkPath }">
      <!-- <router-link :to="{name:'step3'}"> -->
      <el-button v-if="BtnStep" style="margin-top: 25px" @click="next"
        >點我下一步</el-button
      >
    </router-link>

    <!-- Modal彈跳視窗裡面要顯示的東西 -->
    <el-dialog
      v-model="dialogVisible"
      title="確認購買清單"
      width="80%"
      draggable
    >
      <div class="modal-header">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <!-- 引用購物車組件(畫面) -->
      <!-- <selfshoppinglist :prop="dialogData"/> -->
      <selfshoppinglist :sfitem="sfitem" :sf="sf" />
    </el-dialog>

    <el-button
      v-if="BtnCart"
      style="margin-top: 25px"
      @click="dialogVisible = true"
      >檢視購物清單</el-button
    >
    <!-- <el-button v-if="Step1" style="margin-top: 25px" @click="next"
      >重新選擇</el-button
    > -->

    <!-- <component :is="component[index]"></component> -->
    <!-- <component :is="content"></component> -->
    <router-view @getsf="getsf"></router-view>
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