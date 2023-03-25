import { defineStore } from "pinia";
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import { viewport } from "@popperjs/core";

export const useActDataAtore = defineStore('ActData', () => {


    //每一個地區Get會取用的建構子
    class ActAllValue {
        constructor(營區id, 活動id, 營區名稱, 地區, 縣市, 活動方式, 活動種類, 活動名稱, 活動介紹, 活動圖片, 門票價格, 圖片, 營區地址, 單價) {

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
            this.圖片 = 圖片;
            this.營區地址 = 營區地址;
            this.單價 = 單價;
        }
    }

    //每一個區域的彈跳視窗會使用的變數
    class ActAllVariable {
        活動id = ref(0);
        營區id = ref(0);
        營區名稱 = ref('');
        地區 = ref('');
        縣市 = ref('');
        活動方式 = ref('');
        活動種類 = ref('');
        活動名稱 = ref('');
        活動介紹 = ref('');
        活動圖片 = ref('');
        門票價格 = ref(0);
        圖片 = ref('');
        營區地址 = ref('');
        單價 = ref(0);
    }

    //個別獨立的變數
    const MVCimages = ref("https://localhost:7120/images/")
    const ActDialogAll = new ActAllVariable
    const ActAllData = reactive([])
    const Event = reactive({ "活動": [], });
    const ViewPoint = reactive({ "景點": [], });
    const Sport = reactive({ "運動": [], });
    const Culture = reactive({ "文化": [], });
    const Water = reactive({ "水上": [], });
    const Tour = reactive({ "觀光": [], });

    const North = reactive({ "北部": [], });
    const West = reactive({ "中部": [], });
    const South = reactive({ "南部": [], });
    const East = reactive({ "東部": [], });

    let NewTp = reactive({ "新北市": [], });
    let Taoyuan = reactive({ "桃園市": [], });
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
    let dialogVisibleArr = reactive(new Array(9).fill(false))
    // 0.熱門 1.活動 2.景點 3.運動 4.文化 5.水上 6.觀光 7.北中南東 8.12縣市

    //熱門精選Get
    const HotActGet = async () => {
        try {
            const res = await axios.get(
                "https://localhost:7108/api/CampDetails"
            );
            res.data.forEach((Actdetail) => {
                const detail = new ActAllValue(Actdetail.營區id, Actdetail.活動id, Actdetail.營區名稱, Actdetail.地區, Actdetail.縣市, Actdetail.活動方式, Actdetail.活動種類, Actdetail.活動名稱, Actdetail.活動介紹, Actdetail.活動圖片, Actdetail.門票價格, Actdetail.圖片, Actdetail.營區地址, Actdetail.單價)
                ActAllData.push(detail);
            })

        } catch (error) {
            console.error(error);
        }
    };
    //活動Get
    const EventActGet = async () => {
        try {
            const res = await axios.get(
                "https://localhost:7108/api/CampDetails"
            );
            res.data.forEach((Actdetail) => {
                const EventDt = new ActAllValue(Actdetail.營區id, Actdetail.活動id, Actdetail.營區名稱, Actdetail.地區, Actdetail.縣市, Actdetail.活動方式, Actdetail.活動種類, Actdetail.活動名稱, Actdetail.活動介紹, Actdetail.活動圖片, Actdetail.門票價格, Actdetail.圖片, Actdetail.營區地址, Actdetail.單價)
                const AllEvent = EventDt.活動方式;
                if (Event[AllEvent]) {
                    Event[AllEvent].push(EventDt)
                } else {
                    console.log(`Unknown region: ${AllEvent}`);
                }

            })

        } catch (error) {
            console.error(error);
        }
    };
    //景點Get
    const ViewPointActGet = async () => {
        try {
            const res = await axios.get(
                "https://localhost:7108/api/CampDetails"
            );
            res.data.forEach((Actdetail) => {
                const ViewPointDt = new ActAllValue(Actdetail.營區id, Actdetail.活動id, Actdetail.營區名稱, Actdetail.地區, Actdetail.縣市, Actdetail.活動方式, Actdetail.活動種類, Actdetail.活動名稱, Actdetail.活動介紹, Actdetail.活動圖片, Actdetail.門票價格, Actdetail.圖片, Actdetail.營區地址, Actdetail.單價)
                const AllEvent = ViewPointDt.活動方式;
                if (ViewPoint[AllEvent]) {
                    ViewPoint[AllEvent].push(ViewPointDt)
                } else {
                    console.log(`Unknown region: ${AllEvent}`);
                }
            })

        } catch (error) {
            console.error(error);
        }
    };
    //運動Get 
    const SportActGet = async () => {
        try {
            const res = await axios.get(
                "https://localhost:7108/api/CampDetails"
            );
            res.data.forEach((Actdetail) => {
                const SportDt = new ActAllValue(Actdetail.營區id, Actdetail.活動id, Actdetail.營區名稱, Actdetail.地區, Actdetail.縣市, Actdetail.活動方式, Actdetail.活動種類, Actdetail.活動名稱, Actdetail.活動介紹, Actdetail.活動圖片, Actdetail.門票價格, Actdetail.圖片, Actdetail.營區地址, Actdetail.單價)
                const AllEvent = SportDt.活動方式;
                if (Sport[AllEvent]) {
                    Sport[AllEvent].push(SportDt)
                } else {
                    console.log(`Unknown region: ${AllEvent}`);
                }
            })

        } catch (error) {
            console.error(error);
        }
    };
    //文化Get
    const CultureActGet = async () => {
        try {
            const res = await axios.get(
                "https://localhost:7108/api/CampDetails"
            );
            res.data.forEach((Actdetail) => {
                const CultureDt = new ActAllValue(Actdetail.營區id, Actdetail.活動id, Actdetail.營區名稱, Actdetail.地區, Actdetail.縣市, Actdetail.活動方式, Actdetail.活動種類, Actdetail.活動名稱, Actdetail.活動介紹, Actdetail.活動圖片, Actdetail.門票價格, Actdetail.圖片, Actdetail.營區地址, Actdetail.單價)
                const AllEvent = CultureDt.活動方式;
                if (Culture[AllEvent]) {
                    Culture[AllEvent].push(CultureDt)
                } else {
                    console.log(`Unknown region: ${AllEvent}`);
                }
            })

        } catch (error) {
            console.error(error);
        }
    };
    //水上Get
    const WaterActGet = async () => {
        try {
            const res = await axios.get(
                "https://localhost:7108/api/CampDetails"
            );
            res.data.forEach((Actdetail) => {
                const WaterDt = new ActAllValue(Actdetail.營區id, Actdetail.活動id, Actdetail.營區名稱, Actdetail.地區, Actdetail.縣市, Actdetail.活動方式, Actdetail.活動種類, Actdetail.活動名稱, Actdetail.活動介紹, Actdetail.活動圖片, Actdetail.門票價格, Actdetail.圖片, Actdetail.營區地址, Actdetail.單價)
                const AllEvent = WaterDt.活動方式;
                if (Water[AllEvent]) {
                    Water[AllEvent].push(WaterDt)
                } else {
                    console.log(`Unknown region: ${AllEvent}`);
                }
            })

        } catch (error) {
            console.error(error);
        }
    };
    //觀光Get
    const TourActGet = async () => {
        try {
            const res = await axios.get(
                "https://localhost:7108/api/CampDetails"
            );
            res.data.forEach((Actdetail) => {
                const TourDt = new ActAllValue(Actdetail.營區id, Actdetail.活動id, Actdetail.營區名稱, Actdetail.地區, Actdetail.縣市, Actdetail.活動方式, Actdetail.活動種類, Actdetail.活動名稱, Actdetail.活動介紹, Actdetail.活動圖片, Actdetail.門票價格, Actdetail.圖片, Actdetail.營區地址, Actdetail.單價)
                const AllEvent = TourDt.活動方式;
                if (Tour[AllEvent]) {
                    Tour[AllEvent].push(TourDt)
                } else {
                    console.log(`Unknown region: ${AllEvent}`);
                }
            })

        } catch (error) {
            console.error(error);
        }
    };
    //北中南東部Get
    const AllAreaActGet = async () => {
        try {
            const res = await axios.get(
                "https://localhost:7108/api/CampDetails"
            );
            res.data.forEach((Actdetail) => {
                const AreaDt = new ActAllValue(Actdetail.營區id, Actdetail.活動id, Actdetail.營區名稱, Actdetail.地區, Actdetail.縣市, Actdetail.活動方式, Actdetail.活動種類, Actdetail.活動名稱, Actdetail.活動介紹, Actdetail.活動圖片, Actdetail.門票價格, Actdetail.圖片, Actdetail.營區地址, Actdetail.單價)
                const AllArea = AreaDt.地區;
                if (North[AllArea]) {
                    North[AllArea].push(AreaDt)
                } else if (West[AllArea]) {
                    West[AllArea].push(AreaDt)
                } else if (South[AllArea]) {
                    South[AllArea].push(AreaDt)
                } else if (East[AllArea]) {
                    East[AllArea].push(AreaDt)
                }
                else {
                    console.log(`Unknown region: ${AllArea}`);
                }
            })

        } catch (error) {
            console.error(error);
        }
    };
    //12縣市Get
    const AllCityCampGet = async () => {
        try {
            const res = await axios.get(
                "https://localhost:7108/api/CampDetails"
            );
            res.data.forEach((Actdetail) => {
                const AllDt = new ActAllValue(Actdetail.營區id, Actdetail.活動id, Actdetail.營區名稱, Actdetail.地區, Actdetail.縣市, Actdetail.活動方式, Actdetail.活動種類, Actdetail.活動名稱, Actdetail.活動介紹, Actdetail.活動圖片, Actdetail.門票價格, Actdetail.圖片, Actdetail.營區地址, Actdetail.單價)
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

    //=====================================================================================

    //熱門精選彈跳視窗
    let HotDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < ActAllData.length; i++) {

            let item = ActAllData[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        ActAllData.splice(0, ActD.length, ...ActD)

    }
    //活動彈跳視窗
    let EventDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < Event.活動.length; i++) {

            let item = Event.活動[i]

            if (item.活動id == 活動id) {

                item.Edit = true;

                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);

        }
        Event.活動.splice(0, ActD.length, ...ActD)
    }
    //景點彈跳視窗
    let ViewPointDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < ViewPoint.景點.length; i++) {

            let item = ViewPoint.景點[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        ViewPoint.景點.splice(0, ActD.length, ...ActD)

    }
    //運動彈跳視窗
    let SportDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < Sport.運動.length; i++) {

            let item = Sport.運動[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        Sport.運動.splice(0, ActD.length, ...ActD)

    }
    //文化彈跳視窗
    let CultureDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < Culture.文化.length; i++) {

            let item = Culture.文化[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        Culture.文化.splice(0, ActD.length, ...ActD)

    }
    //水上彈跳視窗
    let WaterDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < Water.水上.length; i++) {

            let item = Water.水上[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        Water.水上.splice(0, ActD.length, ...ActD)

    }
    //觀光彈跳視窗
    let TourDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < Tour.觀光.length; i++) {

            let item = Tour.觀光[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        Tour.觀光.splice(0, ActD.length, ...ActD)

    }
    //北部彈跳視窗
    let NorthDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < North.北部.length; i++) {

            let item = North.北部[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        North.北部.splice(0, ActD.length, ...ActD)

    }
    //中部彈跳視窗
    let WestDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < West.中部.length; i++) {

            let item = West.中部[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        West.中部.splice(0, ActD.length, ...ActD)

    }
    //南部彈跳視窗
    let SouthDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < South.南部.length; i++) {

            let item = South.南部[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        South.南部.splice(0, ActD.length, ...ActD)

    }
    //東部彈跳視窗
    let EastDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < East.東部.length; i++) {

            let item = East.東部[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        East.東部.splice(0, ActD.length, ...ActD)

    }
    //新北市彈跳視窗
    let NewTpDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < NewTp.新北市.length; i++) {

            let item = NewTp.新北市[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        NewTp.新北市.splice(0, ActD.length, ...ActD)

    }
    //桃園市彈跳視窗
    let TaoyuanDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < Taoyuan.桃園市.length; i++) {

            let item = Taoyuan.桃園市[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        Taoyuan.桃園市.splice(0, ActD.length, ...ActD)

    }
    //新竹縣彈跳視窗
    let HsinchuDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < Hsinchu.新竹縣.length; i++) {

            let item = Hsinchu.新竹縣[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        Hsinchu.新竹縣.splice(0, ActD.length, ...ActD)

    }
    //苗栗縣彈跳視窗
    let MiaoliDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < Miaoli.苗栗縣.length; i++) {

            let item = Miaoli.苗栗縣[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        Miaoli.苗栗縣.splice(0, ActD.length, ...ActD)

    }
    //南投縣彈跳視窗
    let NantouDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < Nantou.南投縣.length; i++) {

            let item = Nantou.南投縣[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        Nantou.南投縣.splice(0, ActD.length, ...ActD)

    }
    //台中市彈跳視窗
    let TaichungDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < Taichung.台中市.length; i++) {

            let item = Taichung.台中市[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        Taichung.台中市.splice(0, ActD.length, ...ActD)

    }
    //嘉義縣彈跳視窗
    let ChiayiDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < Chiayi.嘉義縣.length; i++) {

            let item = Chiayi.嘉義縣[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        Chiayi.嘉義縣.splice(0, ActD.length, ...ActD)

    }
    //台南市彈跳視窗
    let TainanDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < Tainan.台南市.length; i++) {

            let item = Tainan.台南市[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        Tainan.台南市.splice(0, ActD.length, ...ActD)

    }
    //高雄市彈跳視窗
    let KaohsiungDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < Kaohsiung.高雄市.length; i++) {

            let item = Kaohsiung.高雄市[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        Kaohsiung.高雄市.splice(0, ActD.length, ...ActD)

    }
    //宜蘭縣彈跳視窗
    let YilanDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < Yilan.宜蘭縣.length; i++) {

            let item = Yilan.宜蘭縣[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        Yilan.宜蘭縣.splice(0, ActD.length, ...ActD)

    }
    //花蓮縣彈跳視窗
    let HualienDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < Hualien.花蓮縣.length; i++) {

            let item = Hualien.花蓮縣[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        Hualien.花蓮縣.splice(0, ActD.length, ...ActD)

    }
    //台東縣彈跳視窗
    let TaitungDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < Taitung.台東縣.length; i++) {

            let item = Taitung.台東縣[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActDialogAll.營區id.value = item.營區id;
                ActDialogAll.營區名稱.value = item.營區名稱;
                ActDialogAll.地區.value = item.地區;
                ActDialogAll.縣市.value = item.縣市;
                ActDialogAll.活動方式.value = item.活動方式;
                ActDialogAll.活動種類.value = item.活動種類;
                ActDialogAll.活動名稱.value = item.活動名稱;
                ActDialogAll.活動介紹.value = item.活動介紹;
                ActDialogAll.活動圖片.value = item.活動圖片;
                ActDialogAll.門票價格.value = item.門票價格;
                ActDialogAll.圖片.value = item.圖片;
                ActDialogAll.營區地址.value = item.營區地址;
                ActDialogAll.單價.value = item.單價;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        Taitung.台東縣.splice(0, ActD.length, ...ActD)

    }

    return {
        HotActGet, EventActGet, ViewPointActGet, SportActGet, CultureActGet, WaterActGet, TourActGet, AllAreaActGet, AllCityCampGet,
        HotDialog, EventDialog, ViewPointDialog, SportDialog, CultureDialog, WaterDialog, TourDialog,
        NorthDialog, WestDialog, SouthDialog, EastDialog,
        NewTpDialog, TaoyuanDialog, HsinchuDialog, MiaoliDialog, NantouDialog, TaichungDialog, ChiayiDialog, TainanDialog, KaohsiungDialog, YilanDialog, HualienDialog, TaitungDialog,
        dialogVisibleArr, Event, ViewPoint, Sport, Culture, Water, Tour,
        North, West, South, East,
        NewTp, Taoyuan, Hsinchu, Miaoli, Nantou, Taichung, Chiayi, Tainan, Kaohsiung, Yilan, Hualien, Taitung,
        MVCimages, ActDialogAll, ActAllData,
    }
    //  ActEvent,ActViewPoint, ActSport, ActCulture, ActWater, ActTour,
})