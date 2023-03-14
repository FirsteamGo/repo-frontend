<style>
.book {
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 200px;
    height: 350px;
    margin: 10px;
    padding: 10px;
    background-color: black;
    color: white;


}
.a{
    width: 50p x;
    height: 50px;
}
</style>

<template>
    <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
            <div class="row">
                <div class="col-md-4 position-relative book" v-for="item in ActDetail">


                    <p hidden>{{ item.活動id }}</p>
                    <img :src="`${imagelocal}${item.活動圖片}`" alt="" class="a">
                    <p>{{ item.活動介紹 }}</p>



                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, reactive, onMounted, computed } from 'vue'
import axios from "axios";

const webApiBaseAddr = ref("https://localhost:7108/api/ActDetails");
const imagelocal = ref("https://localhost:7120/images/")

let ActDetail = reactive([])


// const filter = ref("")
// const employeeId = ref(null)
// const firstName = ref(null)
// const lastName = ref(null)
// const title = ref(null)
// const firstNameOld = ref(null)
// const lastNameOld = ref(null)
// const titleOld = ref(null)
 let ActDetailList = reactive([])

const getEmployeeDTOes = onMounted(() => {
    axios
        .get(webApiBaseAddr.value)
        .then(res => {
            console.log(res.data)
            
            // for(var i=0;i<res.data.length;i++)
            // { 
            //     var item = res.data[i];
            //     item.活動圖片 = imagelocal.value+item.活動圖片;
            //     ActDetailList.push(item);
            // }
            // console.log(ActDetailList.data);

                ActDetail.splice(0,res.data.length,...res.data)

            //ActDetail.splice(0, ActDetailList.length, ...ActDetailList)

        })
        .catch((err) => {
            console.error(err);
        })

})

</script>


