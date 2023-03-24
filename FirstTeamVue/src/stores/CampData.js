import { defineStore } from "pinia";
import { ref, reactive, onMounted } from "vue";
import axios from "axios";

export const useCampDataAtore = defineStore('CampData', () => {


    //每一個地區Get會取用的建構子
    class CampAllValue {
        constructor(營區細項id, 營區id, 露營形式id, 活動id, 營區名稱, 營區介紹, 營區地址, 地區, 縣市, 詳細內容, 項目內容, 單價, 圖片, 活動名稱, 活動方式, 活動種類, 活動介紹, 門票價格, 活動圖片) {
            this.活動id = 活動id;
            this.營區id = 營區id;
            this.營區細項id = 營區細項id;
            this.露營形式id = 露營形式id;
            this.營區名稱 = 營區名稱;
            this.營區介紹 = 營區介紹;
            this.營區地址 = 營區地址;
            this.詳細內容 = 詳細內容;
            this.項目內容 = 項目內容;
            this.單價 = 單價;
            this.地區 = 地區;
            this.縣市 = 縣市;
            this.活動方式 = 活動方式;
            this.活動種類 = 活動種類;
            this.活動名稱 = 活動名稱;
            this.活動介紹 = 活動介紹;
            this.活動圖片 = 活動圖片;
            this.門票價格 = 門票價格;
            this.圖片 = 圖片;
        }
    }

    //每一個區域的彈跳視窗會使用的變數
    class CampAllVariable {
        活動id = ref(0);
        營區id = ref(0);
        營區細項id = ref(0);
        露營形式id = ref(0);
        營區名稱 = ref('');
        營區介紹 = ref('');
        營區地址 = ref('');
        詳細內容 = ref('');
        項目內容 = ref('');
        單價 = ref(0);
        地區 = ref('');
        縣市 = ref('');
        活動方式 = ref('');
        活動種類 = ref('');
        活動名稱 = ref('');
        活動介紹 = ref('');
        活動圖片 = ref('');
        門票價格 = ref(0);
        圖片 = ref('');
    }

    //個別獨立的變數
    const MVCimages = ref("https://localhost:7120/images/")
    const CampDialogAll = new CampAllVariable
    let dialogVisibleArr = reactive(new Array(5).fill(false));
    const North = reactive({ "北部": [], });
    const West = reactive({ "中部": [], });
    const South = reactive({ "南部": [], });
    const East = reactive({ "東部": [], });

    let Taoyuan = reactive({ "桃園市": [], });
    let NewTp = reactive({ "新北市": [], });
    let Hsinchu = reactive({ "新竹縣": [], });
    let Miaoli = reactive({ "苗栗縣": [], });
    let Nantou = reactive({ "南投縣": [], });
    let Taichung = reactive({ "台中市": [], });
    let Chiayi = reactive({ "嘉義縣": [], });
    let Tainan = reactive({ "台南市": [], });
    let Kaohsiung = reactive({ "高雄市": [], });
    let Yilan = reactive({ "宜蘭縣": [], });
    let Hualien = reactive({ "花蓮縣": [], });
    let Taitung = reactive({ "台東縣": [], });

    //北部營區Get
    const NorthCampGet = async () => {
        try {
            const res = await axios.get(
                "https://localhost:7108/api/CampDetails"
            );
            res.data.forEach((Alldetail) => {
                const NorthDt = new CampAllValue(Alldetail.營區細項id, Alldetail.營區id, Alldetail.露營形式id, Alldetail.活動id, Alldetail.營區名稱, Alldetail.營區介紹, Alldetail.營區地址, Alldetail.地區, Alldetail.縣市, Alldetail.詳細內容, Alldetail.項目內容, Alldetail.單價, Alldetail.圖片, Alldetail.活動名稱, Alldetail.活動方式, Alldetail.活動種類, Alldetail.活動介紹, Alldetail.門票價格, Alldetail.活動圖片)
                const AllArea = NorthDt.地區;
                if (North[AllArea]) {
                    North[AllArea].push(NorthDt)
                } else {
                    console.log(`Unknown region: ${AllArea}`);
                }
            })
        } catch (error) {
            console.error(error);
        }
    };
    //中部營區Get
    const WestCampGet = async () => {
        try {
            const res = await axios.get(
                "https://localhost:7108/api/CampDetails"
            );
            res.data.forEach((Alldetail) => {
                const WestDt = new CampAllValue(Alldetail.營區細項id, Alldetail.營區id, Alldetail.露營形式id, Alldetail.活動id, Alldetail.營區名稱, Alldetail.營區介紹, Alldetail.營區地址, Alldetail.地區, Alldetail.縣市, Alldetail.詳細內容, Alldetail.項目內容, Alldetail.單價, Alldetail.圖片, Alldetail.活動名稱, Alldetail.活動方式, Alldetail.活動種類, Alldetail.活動介紹, Alldetail.門票價格, Alldetail.活動圖片)
                const AllArea = WestDt.地區;
                if (West[AllArea]) {
                    West[AllArea].push(WestDt)
                } else {
                    console.log(`Unknown region: ${AllArea}`);
                }
            })
        } catch (error) {
            console.error(error);
        }
    };
    //南部營區Get
    const SouthCampGet = async () => {
        try {
            const res = await axios.get(
                "https://localhost:7108/api/CampDetails"
            );
            res.data.forEach((Alldetail) => {
                const SouthDt = new CampAllValue(Alldetail.營區細項id, Alldetail.營區id, Alldetail.露營形式id, Alldetail.活動id, Alldetail.營區名稱, Alldetail.營區介紹, Alldetail.營區地址, Alldetail.地區, Alldetail.縣市, Alldetail.詳細內容, Alldetail.項目內容, Alldetail.單價, Alldetail.圖片, Alldetail.活動名稱, Alldetail.活動方式, Alldetail.活動種類, Alldetail.活動介紹, Alldetail.門票價格, Alldetail.活動圖片)
                const AllArea = SouthDt.地區;
                if (South[AllArea]) {
                    South[AllArea].push(SouthDt)
                } else {
                    console.log(`Unknown region: ${AllArea}`);
                }
            })
        } catch (error) {
            console.error(error);
        }
    };
    //東部營區Get
    const EastCampGet = async () => {
        try {
            const res = await axios.get(
                "https://localhost:7108/api/CampDetails"
            );
            res.data.forEach((Alldetail) => {
                const EastDt = new CampAllValue(Alldetail.營區細項id, Alldetail.營區id, Alldetail.露營形式id, Alldetail.活動id, Alldetail.營區名稱, Alldetail.營區介紹, Alldetail.營區地址, Alldetail.地區, Alldetail.縣市, Alldetail.詳細內容, Alldetail.項目內容, Alldetail.單價, Alldetail.圖片, Alldetail.活動名稱, Alldetail.活動方式, Alldetail.活動種類, Alldetail.活動介紹, Alldetail.門票價格, Alldetail.活動圖片)
                const AllArea = EastDt.地區;
                if (East[AllArea]) {
                    East[AllArea].push(EastDt)
                } else {
                    console.log(`Unknown region: ${AllArea}`);
                }
            })
        } catch (error) {
            console.error(error);
        }
    };


    //======================================================================

    //北部彈跳視窗
    let NorthDialog = (營區細項id) => {
        var CampD = []

        for (let i = 0; i < North.北部.length; i++) {

            let item = North.北部[i]

            if (item.營區細項id == 營區細項id) {

                item.Edit = true;
                CampDialogAll.活動id.value = item.活動id;
                CampDialogAll.營區id.value = item.營區id;
                CampDialogAll.營區細項id.value = item.營區細項id;
                CampDialogAll.露營形式id.value = item.露營形式id;
                CampDialogAll.營區名稱.value = item.營區名稱;
                CampDialogAll.營區介紹.value = item.營區介紹;
                CampDialogAll.營區地址.value = item.營區地址;
                CampDialogAll.詳細內容.value = item.詳細內容;
                CampDialogAll.項目內容.value = item.項目內容;
                CampDialogAll.單價.value = item.單價;
                CampDialogAll.地區.value = item.地區;
                CampDialogAll.縣市.value = item.縣市;
                CampDialogAll.活動方式.value = item.活動方式;
                CampDialogAll.活動種類.value = item.活動種類;
                CampDialogAll.活動名稱.value = item.活動名稱;
                CampDialogAll.活動介紹.value = item.活動介紹;
                CampDialogAll.活動圖片.value = item.活動圖片;
                CampDialogAll.門票價格.value = item.門票價格;
                CampDialogAll.圖片.value = item.圖片;
            }
            else { item.Edit = false; }

            CampD.push(item);

        }
        North.北部.splice(0, CampD.length, ...CampD)
    }
    //中部彈跳視窗
    let WestDialog = (營區細項id) => {
        var CampD = []

        for (let i = 0; i < West.中部.length; i++) {

            let item = West.中部[i]

            if (item.營區細項id == 營區細項id) {

                item.Edit = true;
                CampDialogAll.活動id.value = item.活動id;
                CampDialogAll.營區id.value = item.營區id;
                CampDialogAll.營區細項id.value = item.營區細項id;
                CampDialogAll.露營形式id.value = item.露營形式id;
                CampDialogAll.營區名稱.value = item.營區名稱;
                CampDialogAll.營區介紹.value = item.營區介紹;
                CampDialogAll.營區地址.value = item.營區地址;
                CampDialogAll.詳細內容.value = item.詳細內容;
                CampDialogAll.項目內容.value = item.項目內容;
                CampDialogAll.單價.value = item.單價;
                CampDialogAll.地區.value = item.地區;
                CampDialogAll.縣市.value = item.縣市;
                CampDialogAll.活動方式.value = item.活動方式;
                CampDialogAll.活動種類.value = item.活動種類;
                CampDialogAll.活動名稱.value = item.活動名稱;
                CampDialogAll.活動介紹.value = item.活動介紹;
                CampDialogAll.活動圖片.value = item.活動圖片;
                CampDialogAll.門票價格.value = item.門票價格;
                CampDialogAll.圖片.value = item.圖片;
            }
            else { item.Edit = false; }

            CampD.push(item);

        }
        West.中部.splice(0, CampD.length, ...CampD)
    }
    //南部彈跳視窗
    let SouthDialog = (營區細項id) => {
        var CampD = []

        for (let i = 0; i < South.南部.length; i++) {

            let item = South.南部[i]

            if (item.營區細項id == 營區細項id) {

                item.Edit = true;
                CampDialogAll.活動id.value = item.活動id;
                CampDialogAll.營區id.value = item.營區id;
                CampDialogAll.營區細項id.value = item.營區細項id;
                CampDialogAll.露營形式id.value = item.露營形式id;
                CampDialogAll.營區名稱.value = item.營區名稱;
                CampDialogAll.營區介紹.value = item.營區介紹;
                CampDialogAll.營區地址.value = item.營區地址;
                CampDialogAll.詳細內容.value = item.詳細內容;
                CampDialogAll.項目內容.value = item.項目內容;
                CampDialogAll.單價.value = item.單價;
                CampDialogAll.地區.value = item.地區;
                CampDialogAll.縣市.value = item.縣市;
                CampDialogAll.活動方式.value = item.活動方式;
                CampDialogAll.活動種類.value = item.活動種類;
                CampDialogAll.活動名稱.value = item.活動名稱;
                CampDialogAll.活動介紹.value = item.活動介紹;
                CampDialogAll.活動圖片.value = item.活動圖片;
                CampDialogAll.門票價格.value = item.門票價格;
                CampDialogAll.圖片.value = item.圖片;
            }
            else { item.Edit = false; }

            CampD.push(item);

        }
        South.南部.splice(0, CampD.length, ...CampD)
    }
    //東部彈跳視窗
    let EastDialog = (營區細項id) => {
        var CampD = []

        for (let i = 0; i < East.東部.length; i++) {

            let item = East.東部[i]

            if (item.營區細項id == 營區細項id) {

                item.Edit = true;
                CampDialogAll.活動id.value = item.活動id;
                CampDialogAll.營區id.value = item.營區id;
                CampDialogAll.營區細項id.value = item.營區細項id;
                CampDialogAll.露營形式id.value = item.露營形式id;
                CampDialogAll.營區名稱.value = item.營區名稱;
                CampDialogAll.營區介紹.value = item.營區介紹;
                CampDialogAll.營區地址.value = item.營區地址;
                CampDialogAll.詳細內容.value = item.詳細內容;
                CampDialogAll.項目內容.value = item.項目內容;
                CampDialogAll.單價.value = item.單價;
                CampDialogAll.地區.value = item.地區;
                CampDialogAll.縣市.value = item.縣市;
                CampDialogAll.活動方式.value = item.活動方式;
                CampDialogAll.活動種類.value = item.活動種類;
                CampDialogAll.活動名稱.value = item.活動名稱;
                CampDialogAll.活動介紹.value = item.活動介紹;
                CampDialogAll.活動圖片.value = item.活動圖片;
                CampDialogAll.門票價格.value = item.門票價格;
                CampDialogAll.圖片.value = item.圖片;
            }
            else { item.Edit = false; }

            CampD.push(item);

        }
        East.東部.splice(0, CampD.length, ...CampD)
    }



    const AllCityCampGet = async () => {
        try {
            const res = await axios.get(
                "https://localhost:7108/api/CampDetails"
            );
            res.data.forEach((Alldetail) => {
                const AllDt = new CampAllValue(Alldetail.營區細項id, Alldetail.營區id, Alldetail.露營形式id, Alldetail.活動id, Alldetail.營區名稱, Alldetail.營區介紹, Alldetail.營區地址, Alldetail.地區, Alldetail.縣市, Alldetail.詳細內容, Alldetail.項目內容, Alldetail.單價, Alldetail.圖片, Alldetail.活動名稱, Alldetail.活動方式, Alldetail.活動種類, Alldetail.活動介紹, Alldetail.門票價格, Alldetail.活動圖片)
                const AllCity = AllDt.縣市;
                if (NewTp[AllCity]) {
                    NewTp[AllCity].push(AllDt)
                } else if (Taoyuan[AllCity]) {
                    Taoyuan[AllCity].push(AllDt)
                } else if (Hsinchu[AllCity]) {
                    Hsinchu[AllCity].push(AllDt)
                } else if (Miaoli[AllCity]) {
                    Miaoli[AllCity].push(AllDt)
                } else if (Nantou[AllCity]) {
                    Nantou[AllCity].push(AllDt)
                } else if (Taichung[AllCity]) {
                    Taichung[AllCity].push(AllDt)
                } else if (Chiayi[AllCity]) {
                    Chiayi[AllCity].push(AllDt)
                } else if (Tainan[AllCity]) {
                    Tainan[AllCity].push(AllDt)
                } else if (Kaohsiung[AllCity]) {
                    Kaohsiung[AllCity].push(AllDt)
                } else if (Yilan[AllCity]) {
                    Yilan[AllCity].push(AllDt)
                } else if (Hualien[AllCity]) {
                    Hualien[AllCity].push(AllDt)
                } else if (Taitung[AllCity]) {
                    Taitung[AllCity].push(AllDt)
                }
                else {
                    console.log(`Unknown region: ${AllCity}`);
                }
            })
        } catch (error) {
            console.error(error);
        }
    };
    return {
        dialogVisibleArr, MVCimages, CampDialogAll,
        North, West, South, East,
        NewTp, Taoyuan, Hsinchu, Miaoli, Nantou, Taichung, Chiayi, Tainan, Kaohsiung, Yilan, Hualien, Taitung,
        NorthCampGet, WestCampGet, SouthCampGet, EastCampGet, AllCityCampGet,
        NorthDialog, WestDialog, SouthDialog, EastDialog,
    }

})