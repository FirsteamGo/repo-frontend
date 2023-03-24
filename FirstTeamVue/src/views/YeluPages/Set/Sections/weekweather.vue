<template>
    <div>
        <h4>{{ data.datasetDescriptiontitle }}</h4>

        <el-card class="box-card" v-for="item in weather_data.value" :key="item.locationName">
            <h3 class="text" style="width: 50%;">{{ item.locationName }}</h3>
            <div style="width: 50%;">
                <el-button type="primary" round style="width: auto;margin:20px;" @click="showDetail(item)">
                    天氣詳細資訊
                </el-button>
            </div>
        </el-card>

        <el-dialog v-model="detailDialogVisible" title="天氣詳細資訊" width="50%" draggable>
            <div class="modal-header">
                <button type="button" class="btn-close" @click="detailDialogVisible = false"></button>
            </div>
            <div>
                <table style="width: 100%;">
                    <thead>
                        <tr>
                            <th style="background-color: black;" class="s">日期時間</th>
                            <th style="background-color: black;" class="s">天氣狀況</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="time in currentWeatherTimes" :key="time.startTime">
                            <td class="s">{{ new Date(time.startTime).toLocaleString() }}</td>
                            <td class="s">{{ time.elementValue[0].value }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </el-dialog>

    </div>
</template>
  
<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';

const weekweather = ref('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-62679C1E-8B6B-43DE-B121-6C9514A5F233&elementName=WeatherDescription')
const weather_data = reactive([])
const data = reactive({
    datasetDescriptiontitle: '',
})

const currentLocation = ref({})
const currentWeatherTimes = ref([])
const detailDialogVisible = ref(false)

onMounted(() => {
    axios.get(weekweather.value).then((res) => {
        weather_data.value = res.data.records.locations[0].location
        data.datasetDescriptiontitle = res.data.records.locations[0].datasetDescription
    })
})

function showDetail(item) {
    currentLocation.value = item
    currentWeatherTimes.value = item.weatherElement[0].time
    detailDialogVisible.value = true
}

</script>
<style>
.text {
    font-size: 14px;
}

.box-card {
    width: auto;
    height: auto;
}



.s {
    text-align: center;
    border: 1px solid #ccc;
    padding: 8px;
}
</style>