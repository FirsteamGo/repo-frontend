import { defineStore } from "pinia";
import { ref, reactive, onMounted } from "vue";
// import axios from "axios";

export const useSelfDataAtore = defineStore('SelfData', () => {

    // form.data
    // form.預計人數
    // form.評論

    const az = ref("1")


    const form = reactive({
        訂單編號: "",
        data: [],
        預計人數: 0,
        評論: "",
        評分: 0,
        露營天數: 0,
    });


    // //個別獨立的變數
    // const MVCimages = ref("https://localhost:7120/images/")
    // const CampDialogAll = new CampAllVariable
    // let dialogVisibleArr = reactive(new Array(5).fill(false));
    // const North = reactive({ "北部": [], });
    // let Taitung = reactive({ "台東縣": [], });

    //北部營區Get
    const NorthCampGet = async () => {
        az.value++
        alert(az.value + '***')
    };


    return {
        form, az, NorthCampGet,
    }

})