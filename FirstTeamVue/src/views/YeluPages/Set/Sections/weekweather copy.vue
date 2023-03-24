<template>
    <div>
        <h3>{{ data.datasetDescriptiontitle }}</h3>

        <el-card class="box-card" v-for="item in weather_data.value">
            <div class="text" style="width: 30%;">{{ item.locationName }}</div>
            <div style="width: 70%;">

            </div>

        </el-card>
        <table>
            <th>
                <tr>{{ item.weatherElement[0].time[0].startTime }}</tr>
                <tr>{{ item.weatherElement[0].time[2].startTime }}</tr>
                <tr>{{ item.weatherElement[0].time[4].startTime }}</tr>
                <tr>{{ item.weatherElement[0].time[6].startTime }}</tr>
                <tr>{{ item.weatherElement[0].time[8].startTime }}</tr>
                <tr>{{ item.weatherElement[0].time[10].startTime }}</tr>
                <tr>{{ item.weatherElement[0].time[12].startTime }}</tr>
            </th>
            <td>
                <tr>{{ item.weatherElement[0].time[0].elementValue[0].value }}</tr>
                <tr>{{ item.weatherElement[0].time[2].elementValue[0].value }}</tr>
                <tr>{{ item.weatherElement[0].time[4].elementValue[0].value }}</tr>
                <tr>{{ item.weatherElement[0].time[6].elementValue[0].value }}</tr>
                <tr>{{ item.weatherElement[0].time[8].elementValue[0].value }}</tr>
                <tr>{{ item.weatherElement[0].time[10].elementValue[0].value }}</tr>
                <tr>{{ item.weatherElement[0].time[12].elementValue[0].value }}</tr>
            </td>
        </table>


    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';


const weekweather = ref('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-62679C1E-8B6B-43DE-B121-6C9514A5F233&elementName=WeatherDescription')
const weather_time = reactive([])
const weather_data = reactive([])
const datasetDescriptiontitle = ref('')
const setod = JSON.parse(localStorage.getItem('setorderdetail'))
const data = reactive({
    datasetDescriptiontitle: '',
})
onMounted(() => {
    axios
        .get(weekweather.value)
        .then(res => {
            weather_data.value = res.data.records.locations[0].location
            data.
                datasetDescriptiontitle = res.data.records.locations[0].datasetDescription
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
</style>