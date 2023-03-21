import { defineStore } from "pinia";
import { ref, reactive, onMounted } from "vue";
import axios from "axios";

export const useFilterData = defineStore('ActData', () => {
    const ActAllData = reactive([]);
    class xxx {
        constructor(營區id, 活動id, 營區名稱, 地區, 縣市, 活動方式, 活動種類, 活動名稱, 活動介紹, 活動圖片, 門票價格) {

            this.活動id = 活動id;
            this.營區id = 營區id;
            this.營區名稱 = 營區名稱;
            this.地區 = 地區;
            this.縣市 = 縣市;
            this.活動方式 = 活動方式;
            this.活動種類 = 活動種類;
            this.活動名稱 = 活動名稱;
            this.活動介紹 = 活動介紹;
            this.活動圖片 = 活動圖片;
            this.門票價格 = 門票價格;
        }
    }

    const dialogVisible = ref(false)
    const 活動id = ref(0)
    const 營區id = ref(0)
    const 營區名稱 = ref('')
    const 地區 = ref('')
    const 縣市 = ref('')
    const 活動方式 = ref('')
    const 活動種類 = ref('')
    const 活動名稱 = ref('')
    const 活動介紹 = ref('')
    const 活動圖片 = ref('')
    const 門票價格 = ref(0)
    const MVCimages = ref("https://localhost:7120/images/")

    const FilterAct = async () => {
        try {
            const response = await axios.get(
                "https://localhost:7108/api/ActDetails"
            );
            response.data.forEach((Actdetail) => {
                const detail = new xxx(Actdetail.營區id, Actdetail.活動id, Actdetail.營區名稱, Actdetail.地區, Actdetail.縣市, Actdetail.活動方式, Actdetail.活動種類, Actdetail.活動名稱, Actdetail.活動介紹, Actdetail.活動圖片, Actdetail.門票價格)
                ActAllData.push(detail);
            })
            alert(ActAllData)
            //console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    let Actdetail = (活動id) => {
        var ActD = []

        for (let i = 0; i < ActAllData.length; i++) {

            let item = ActAllData[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                營區id.value = item.營區id;
                營區名稱.value = item.營區名稱;
                地區.value = item.地區;
                縣市.value = item.縣市;
                活動方式.value = item.活動方式;
                活動種類.value = item.活動種類;
                活動名稱.value = item.活動名稱;
                活動介紹.value = item.活動介紹;
                活動圖片.value = item.活動圖片;
                門票價格.value = item.門票價格;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        ActAllData.splice(0, ActD.length, ...ActD)
    }

    onMounted(FilterAct);
    return { ActAllData, FilterAct, Actdetail, dialogVisible, MVCimages }
})