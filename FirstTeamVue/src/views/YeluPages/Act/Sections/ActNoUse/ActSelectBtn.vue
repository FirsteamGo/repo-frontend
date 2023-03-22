<script setup>
// import { onMounted, onUnmounted, ref, reactive, computed } from "vue";
// import axios from "axios";
// // example components


// const webApiBaseAddr = ref("https://localhost:7108/api/ActDetails")


// let Act = reactive([])

// const getEmployeeDTOes = onMounted(() => {
//     axios.get(webApiBaseAddr.value).then(res => {
//         //console.log(res.data);
//         Act.splice(0, res.data.length, ...res.data)
//         console.log(Act);


//     }).catch(err => {
//         console.log(err);
//     })
// })

// const xxx = () => {
//     //alert("filter");
//     let _this = this;
//     var p = {
//         FirstName: _this.filter,
//         LastName: _this.filter,
//         Title: _this.filter,
//     };
//     axios.post(`${webApiBaseAddr}/api/Employees/Filter`, p).then(response => {
//         //alert(JSON.stringify(response.data));
//         _this.employeeDTOes = response.data;
//         var employeeList = [];
//         for (var i = 0; i < _this.employeeDTOes.length; i++) {
//             var item = _this.employeeDTOes[i];
//             item.Edit = false;
//             employeeList.push(item);
//         }
//         _this.employeeDTOes = employeeList;
//     });
// }
</script>

<template>
    <!-- <div class="demo">
            <el-button v-for=" tab in tabs" :key="tab" size="large" type="info" class="butonleft text-lg font-weight-bolder"
                @click="currentTab = tab">
                {{ tab }}
            </el-button>
            <component :is="currentTab" class=""></component>
            </div> -->
    <div class="">
        <el-button type="warning" disabled><el-text class="mx-1"><router-link to="/pages/Yelu-pages/act/Sections/ActHot"
                    style="font-weight:bolder; font-size:x-large;">熱門精選</router-link></el-text></el-button>
        <!-- <el-button type="warning" disabled><el-text class="mx-3"><router-link to="/pages/Yelu-pages/act/Sections/ActNorth"
                        style="font-weight:bolder; font-size:x-large;">北部</router-link></el-text></el-button>
                        <el-button type="warning" disabled><el-text class="mx-3"><router-link to="/pages/Yelu-pages/act/Sections/ActWest"
                        style="font-weight:bolder; font-size:x-large;">中部</router-link></el-text></el-button>
                        <el-button type="warning" disabled><el-text class="mx-3"><router-link to="/pages/Yelu-pages/act/Sections/ActSouth"
                        style="font-weight:bolder; font-size:x-large;">南部</router-link></el-text></el-button>
                        <el-button type="warning" disabled><el-text class="mx-3"><router-link to="/pages/Yelu-pages/act/Sections/ActEast"
                        style="font-weight:bolder; font-size:x-large;">東部</router-link></el-text></el-button> -->
    </div>
</template>