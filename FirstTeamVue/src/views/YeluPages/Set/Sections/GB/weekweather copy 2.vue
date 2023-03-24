<template>
    <div>
        <h3>{{ data.datasetDescriptiontitle }}</h3>

        <el-card class="box-card" v-for="item in weather_data.value">
            <div class="text" style="width: 50%;">{{ item.locationName }}</div>
            <div style="width: 50%;">
                <el-button type="primary" round style="width: 15%;margin:20px;" @click="Setdetail = true">
                    天氣詳細資訊
                </el-button>
            </div>
            <el-dialog v-model="Setdetail" title="天氣詳細資訊" width="50%" draggable>
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>日期時間</th>
                                <th>天氣狀況</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="time in item.weatherElement[0].time" :key="time.startTime">
                                <td>{{ new Date(time.startTime).toLocaleString() }}</td>
                                <td>{{ time.elementValue[0].value }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </el-dialog>
        </el-card>
    </div>
</template>
  
<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
const Setdetail = ref(false)

const weekweather = ref('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-62679C1E-8B6B-43DE-B121-6C9514A5F233&elementName=WeatherDescription')
const weather_time = reactive([])
const weather_data = reactive([])
const datasetDescriptiontitle = ref('')
const setod = JSON.parse(localStorage.getItem('setorderdetail'))
const data = reactive({
    datasetDescriptiontitle: '',
})
onMounted(() => {
    axios.get(weekweather.value).then((res) => {
        weather_data.value = res.data.records.locations[0].location
        data.datasetDescriptiontitle = res.data.records.locations[0].datasetDescription
        console.log(weather_data.value);
    })
})
</script>
  
<style>
.text {
    font-size: 14px;
}

.box-card {
    width: auto;
    height: auto;
}

table {
    width: 100%;
}

th,
td {
    text-align: center;
    border: 1px solid #ccc;
    padding: 8px;
}

th {
    background-color: #eee;
}
</style>
  