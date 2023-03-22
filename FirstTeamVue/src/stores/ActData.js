import { defineStore } from "pinia";
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import { viewport } from "@popperjs/core";

export const useActDataAtore = defineStore('ActData', () => {


    //每一個地區Get會取用的建構子
    class ActAllValue {
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

    //每一個區域的彈跳視窗會使用的變數
    class ActAllVariable {
        dialogVisible = ref(false)
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
    }

    //個別獨立的變數
    const MVCimages = ref("https://localhost:7120/images/")
    //const dialogVisible = ref(false)
    const ActHot = new ActAllVariable
    const ActEvent = new ActAllVariable
    const ActViewPoint = new ActAllVariable
    const ActSport = new ActAllVariable
    const ActCulture = new ActAllVariable
    const ActWater = new ActAllVariable
    const ActTour = new ActAllVariable
    const ActAllData = reactive([])
    const Event = reactive({ "活動": [], });
    const ViewPoint = reactive({ "景點": [], });
    const Sport = reactive({ "運動": [], });
    const Culture = reactive({ "文化": [], });
    const Water = reactive({ "水上": [], });
    const Tour = reactive({ "觀光": [], });

    //熱門精選Get
    const HotActGet = async () => {
        try {
            const res = await axios.get(
                "https://localhost:7108/api/ActDetails"
            );
            res.data.forEach((Actdetail) => {
                const detail = new ActAllValue(Actdetail.營區id, Actdetail.活動id, Actdetail.營區名稱, Actdetail.地區, Actdetail.縣市, Actdetail.活動方式, Actdetail.活動種類, Actdetail.活動名稱, Actdetail.活動介紹, Actdetail.活動圖片, Actdetail.門票價格)
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
                "https://localhost:7108/api/ActDetails"
            );
            res.data.forEach((Eventdetail) => {
                const EventDt = new ActAllValue(Eventdetail.營區id, Eventdetail.活動id, Eventdetail.營區名稱, Eventdetail.地區, Eventdetail.縣市, Eventdetail.活動方式, Eventdetail.活動種類, Eventdetail.活動名稱, Eventdetail.活動介紹, Eventdetail.活動圖片, Eventdetail.門票價格)
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
                "https://localhost:7108/api/ActDetails"
            );
            res.data.forEach((Eventdetail) => {
                const ViewPointDt = new ActAllValue(Eventdetail.營區id, Eventdetail.活動id, Eventdetail.營區名稱, Eventdetail.地區, Eventdetail.縣市, Eventdetail.活動方式, Eventdetail.活動種類, Eventdetail.活動名稱, Eventdetail.活動介紹, Eventdetail.活動圖片, Eventdetail.門票價格)
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
                "https://localhost:7108/api/ActDetails"
            );
            res.data.forEach((Eventdetail) => {
                const SportDt = new ActAllValue(Eventdetail.營區id, Eventdetail.活動id, Eventdetail.營區名稱, Eventdetail.地區, Eventdetail.縣市, Eventdetail.活動方式, Eventdetail.活動種類, Eventdetail.活動名稱, Eventdetail.活動介紹, Eventdetail.活動圖片, Eventdetail.門票價格)
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
                "https://localhost:7108/api/ActDetails"
            );
            res.data.forEach((Eventdetail) => {
                const CultureDt = new ActAllValue(Eventdetail.營區id, Eventdetail.活動id, Eventdetail.營區名稱, Eventdetail.地區, Eventdetail.縣市, Eventdetail.活動方式, Eventdetail.活動種類, Eventdetail.活動名稱, Eventdetail.活動介紹, Eventdetail.活動圖片, Eventdetail.門票價格)
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
                "https://localhost:7108/api/ActDetails"
            );
            res.data.forEach((Eventdetail) => {
                const WaterDt = new ActAllValue(Eventdetail.營區id, Eventdetail.活動id, Eventdetail.營區名稱, Eventdetail.地區, Eventdetail.縣市, Eventdetail.活動方式, Eventdetail.活動種類, Eventdetail.活動名稱, Eventdetail.活動介紹, Eventdetail.活動圖片, Eventdetail.門票價格)
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
                "https://localhost:7108/api/ActDetails"
            );
            res.data.forEach((Eventdetail) => {
                const TourDt = new ActAllValue(Eventdetail.營區id, Eventdetail.活動id, Eventdetail.營區名稱, Eventdetail.地區, Eventdetail.縣市, Eventdetail.活動方式, Eventdetail.活動種類, Eventdetail.活動名稱, Eventdetail.活動介紹, Eventdetail.活動圖片, Eventdetail.門票價格)
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

    //=====================================================================================

    //熱門精選彈跳視窗
    let HotDialog = (活動id) => {
        var ActD = []

        for (let i = 0; i < ActAllData.length; i++) {

            let item = ActAllData[i]

            if (item.活動id == 活動id) {

                item.Edit = true;
                ActHot.營區id.value = item.營區id;
                ActHot.營區名稱.value = item.營區名稱;
                ActHot.地區.value = item.地區;
                ActHot.縣市.value = item.縣市;
                ActHot.活動方式.value = item.活動方式;
                ActHot.活動種類.value = item.活動種類;
                ActHot.活動名稱.value = item.活動名稱;
                ActHot.活動介紹.value = item.活動介紹;
                ActHot.活動圖片.value = item.活動圖片;
                ActHot.門票價格.value = item.門票價格;
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
                ActEvent.營區id.value = item.營區id;
                ActEvent.營區名稱.value = item.營區名稱;
                ActEvent.地區.value = item.地區;
                ActEvent.縣市.value = item.縣市;
                ActEvent.活動方式.value = item.活動方式;
                ActEvent.活動種類.value = item.活動種類;
                ActEvent.活動名稱.value = item.活動名稱;
                ActEvent.活動介紹.value = item.活動介紹;
                ActEvent.活動圖片.value = item.活動圖片;
                ActEvent.門票價格.value = item.門票價格;
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
                ActViewPoint.營區id.value = item.營區id;
                ActViewPoint.營區名稱.value = item.營區名稱;
                ActViewPoint.地區.value = item.地區;
                ActViewPoint.縣市.value = item.縣市;
                ActViewPoint.活動方式.value = item.活動方式;
                ActViewPoint.活動種類.value = item.活動種類;
                ActViewPoint.活動名稱.value = item.活動名稱;
                ActViewPoint.活動介紹.value = item.活動介紹;
                ActViewPoint.活動圖片.value = item.活動圖片;
                ActViewPoint.門票價格.value = item.門票價格;
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
                ActSport.營區id.value = item.營區id;
                ActSport.營區名稱.value = item.營區名稱;
                ActSport.地區.value = item.地區;
                ActSport.縣市.value = item.縣市;
                ActSport.活動方式.value = item.活動方式;
                ActSport.活動種類.value = item.活動種類;
                ActSport.活動名稱.value = item.活動名稱;
                ActSport.活動介紹.value = item.活動介紹;
                ActSport.活動圖片.value = item.活動圖片;
                ActSport.門票價格.value = item.門票價格;
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
                ActCulture.營區id.value = item.營區id;
                ActCulture.營區名稱.value = item.營區名稱;
                ActCulture.地區.value = item.地區;
                ActCulture.縣市.value = item.縣市;
                ActCulture.活動方式.value = item.活動方式;
                ActCulture.活動種類.value = item.活動種類;
                ActCulture.活動名稱.value = item.活動名稱;
                ActCulture.活動介紹.value = item.活動介紹;
                ActCulture.活動圖片.value = item.活動圖片;
                ActCulture.門票價格.value = item.門票價格;
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
                ActWater.營區id.value = item.營區id;
                ActWater.營區名稱.value = item.營區名稱;
                ActWater.地區.value = item.地區;
                ActWater.縣市.value = item.縣市;
                ActWater.活動方式.value = item.活動方式;
                ActWater.活動種類.value = item.活動種類;
                ActWater.活動名稱.value = item.活動名稱;
                ActWater.活動介紹.value = item.活動介紹;
                ActWater.活動圖片.value = item.活動圖片;
                ActWater.門票價格.value = item.門票價格;
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
                ActTour.營區id.value = item.營區id;
                ActTour.營區名稱.value = item.營區名稱;
                ActTour.地區.value = item.地區;
                ActTour.縣市.value = item.縣市;
                ActTour.活動方式.value = item.活動方式;
                ActTour.活動種類.value = item.活動種類;
                ActTour.活動名稱.value = item.活動名稱;
                ActTour.活動介紹.value = item.活動介紹;
                ActTour.活動圖片.value = item.活動圖片;
                ActTour.門票價格.value = item.門票價格;
            }
            else { item.Edit = false; }

            ActD.push(item);
        }
        Tour.觀光.splice(0, ActD.length, ...ActD)

    }

    return {
        HotActGet, EventActGet, ViewPointActGet, SportActGet, CultureActGet, WaterActGet, TourActGet, HotDialog, EventDialog, ViewPointDialog, SportDialog, CultureDialog, WaterDialog, TourDialog,
        ActAllData, ActEvent, Event, ViewPoint, Sport, Culture, Water, Tour, MVCimages, ActHot, ActViewPoint, ActSport, ActCulture, ActWater, ActTour,
    }
    // 活動id, 營區id, 營區名稱, 地區, 縣市, 活動方式, 活動種類, 活動名稱, 活動介紹, 活動圖片, 門票價格
})