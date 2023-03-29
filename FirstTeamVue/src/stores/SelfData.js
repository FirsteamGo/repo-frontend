import { defineStore } from "pinia";
import { ref, reactive, onMounted } from "vue";
// import axios from "axios";

export const useSelfDataAtore = defineStore('SelfData', () => {

    const form = reactive({
        訂單編號: "",
        data: [],
        預計人數: 0,
        評論: "",
        評分: 0,
        露營天數: 0,
    });

    const CampDialogAll = reactive({})

    const MVCimages = ref("https://localhost:7120/images/")

    let sfitem = reactive([]);
    const ListTotal = ref(0)


    const az = ref("1") //測試用變數

    //測試用方法
    const NorthCampGet = async () => {
        az.value++
        alert(az.value + '***')
    };

    return {
        form, CampDialogAll, MVCimages, sfitem, ListTotal, //az, NorthCampGet,
    }

})