<script setup>
import axios from "axios";
import { reactive, ref, computed, onUpdated, onMounted } from "vue";
import { useActDataAtore } from "../../../stores/ActData.js";
import { useCampDataAtore } from "../../../stores/CampData.js";
import { useSelfDataAtore } from "../../../stores/SelfData.js";
const ActData = useActDataAtore();
const CampData = useCampDataAtore();
const SelfData = useSelfDataAtore();
import { useRoute } from "vue-router";
const route = useRoute();
const MVCimages = ref("https://localhost:7120/images/");

// const selffood=ref()
// let sf = defineProps('dialogData')
// let sf = reactive([])
// let sfitem = reactive([])
// const ListTotal = ref(0)

// 從 Local Storage 讀取購物車資料
// sf=JSON.parse(localStorage.getItem('selfaddItemList'))
// let itemString = localStorage.getItem('selfaddItemList') // let itemString = storage['selfaddItemList']
// sf = itemString.substring(0, itemString.length - 2).split(', ')
// for (let i = 0; i < sf.length; i++) {
//         // let itemInfo = localStorage.getItem(sf[i])

// 		sfitem.push(JSON.parse(localStorage.getItem('self'+sf[i])))
//     }

const props = defineProps({
  sf: Array,
  sfitem: Array,
});
// console.log(props.sf);
// console.log(props.sfitem);

let ListTotal = computed(() => {
  let ListTotalData = 0;

  for (let i = 0; i < props.sfitem.length; i++) {
    ListTotalData += props.sfitem[i].單價 * props.sfitem[i].需求份數;
  }
  return ListTotalData;
});
// console.log(ListTotal);

const deleteItem = (index) => {
  props.sfitem.splice(index, 1);
};

const whoFunc = ref("");
const whoFuncImg = ref("");
onMounted(() => {
  if (route.name == "step3-p") {
    // alert(route.params.whoFunc)
    if (route.params.whoFunc == "Camp") {
      whoFunc.value = CampData.CampDialogAll;
      whoFuncImg.value = CampData;
    } else if (route.params.whoFunc == "Act") {
      whoFunc.value = ActData.ActDialogAll;
      whoFuncImg.value = ActData;
    }

    SelfData.CampDialogAll = whoFunc.value;
  }
});
</script>



<template>
  <div class="common-layout">
    <!-- 這裡放詳細資訊 -->
    <el-container>
      <el-aside width="100px">
        <div>
          <label class="form-lable"
            >入住日期：<label>{{ SelfData.form.data[0] }}</label></label
          >
        </div>
        <div>
          <label class="form-lable"
            >退住日期：<label>{{ SelfData.form.data[1] }}</label></label
          >
        </div>

        <div>
          <label class="form-lable"
            >預計人數：{{ SelfData.form.預計人數 }}</label
          >
        </div>
        <div>
          <label class="form-lable">備註：{{ SelfData.form.評論 }}</label>
        </div>
      </el-aside>

      <!-- 這裡放營區+活動 -->
      <el-container>
        <el-header height="450px">
          <div class="container w-75 px-2">
            <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <span class="badge bg-success"
                        ><span class="material-icons mx-2">task_alt</span
                        >已選營地</span
                      >
                    </h5>
                    <img
                      :src="`${whoFuncImg.MVCimages}${whoFunc.圖片}`"
                      style="
                        height: 200px;
                        width: 280px;
                        display: block;
                        margin: 0 auto;
                      "
                    />
                    <p class="m-3 myword">營區名稱 | {{ whoFunc.營區名稱 }}</p>
                    <p class="m-3 myword">營區地址 | {{ whoFunc.營區地址 }}</p>
                    <p class="m-3 myword">
                      <span class="material-icons">attach_money</span> TWD<span
                        class="text-primary"
                        >{{ whoFunc.單價 }}</span
                      >
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <span class="badge bg-success"
                        ><span class="material-icons mx-2">task_alt</span
                        >已選活動</span
                      >
                    </h5>
                    <img
                      :src="`${whoFuncImg.MVCimages}${whoFunc.活動圖片}`"
                      style="
                        height: 200px;
                        width: 280px;
                        display: block;
                        margin: 0 auto;
                      "
                    />
                    <p class="m-3 myword">活動種類 | {{ whoFunc.活動名稱 }}</p>
                    <p class="m-3 myword">活動名稱 | {{ whoFunc.活動種類 }}</p>
                    <p class="m-3 myword">
                      <span class="material-icons">attach_money</span> TWD<span
                        class="text-primary"
                        >{{ whoFunc.門票價格 }}</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-header>

        <!-- 這裡放飲食 -->
        <el-main>
          <div id="myCart">
            <header id="cartList">
              <table style="border-bottom: 1px solid #ddd">
                <tr class="itemHead">
                  <td style="width: 200px">商品圖片</td>
                  <td style="width: 200px">商品名稱</td>
                  <td style="width: 300px">商品內容</td>
                  <td style="width: 170px">單價($)</td>
                  <td style="width: 60px">數量</td>
                  <td style="width: 60px"></td>
                </tr>
              </table>

              <div>
                <table>
                  <tr
                    v-for="(item, index) in props.sfitem"
                    :key="item.自選飲食id"
                    :value="index"
                    class="item"
                  >
                    <td style="width: 200px">
                      <img
                        :src="`${MVCimages}${item.圖片}`"
                        style="width: 100px; height: 100px"
                      />
                    </td>
                    <td style="width: 200px">
                      <p>{{ item.商品名稱 }}</p>
                    </td>
                    <td style="width: 300px">
                      <p>{{ item.商品內容 }}</p>
                    </td>
                    <td style="width: 150px">
                      <p>{{ item.單價 }}</p>
                    </td>
                    <td style="width: 60px">
                      <p>{{ item.需求份數 }}</p>
                    </td>
                    <td style="width: 60px">
                      <el-button
                        class="p-1"
                        type="info"
                        @click="deleteItem(index)"
                        ><span class="material-icons">delete</span></el-button
                      >
                    </td>
                  </tr>
                </table>
              </div>
            </header>

            <footer style="text-align: right">
              總計 : <span id="total">{{ ListTotal }} 元</span>
            </footer>

            <RouterLink :to="{ name: 'totalcart' }">
              <button type="button" class="btn btn-secondary" @click="addcart">
                加入購物車
              </button>
            </RouterLink>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>








<style>
.addButton {
  border: 1px solid maroon;
  border-radius: 5px;
  padding: 1px 3px;
  cursor: pointer;
  color: maroon;
}
</style>