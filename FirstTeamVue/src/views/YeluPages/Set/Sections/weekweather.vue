<template>
    <div>
        <h2>{{ datasetDescriptiontitle }}</h2>
        <table>
            <thead>
                <tr>
                    <th>城市</th>
                    <th v-for="time in weather_time" :key="time">{{ time }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="city in weather_data" :key="city.locationName">
                    <td>{{ city.locationName }}</td>
                    <td v-for="time in weather_time" :key="time">{{ getWeather(city, time) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { ref, reactive, onMounted, computed } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const weekweather = ref('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-62679C1E-8B6B-43DE-B121-6C9514A5F233&elementName=WeatherDescription');
        const weather_time = reactive([]);
        const weather_data = reactive([]);
        const datasetDescriptiontitle = ref('');
        const setod = JSON.parse(localStorage.getItem('setorderdetail'));

        onMounted(() => {
            axios.get(weekweather.value).then(res => {
                const weatherElements = res.data.records.locations[0].location[0].weatherElement;

                weather_time.value = weatherElements.map(element => element.time[0].startTime);

                weather_data.value = res.data.records.locations[0].location;

                datasetDescriptiontitle.value = res.data.records.locations[0].datasetDescription;
                console.log(datasetDescriptiontitle.value);
            });
        });

        const getWeather = (city, time) => {
            const weatherElements = city.weatherElement.find(element => element.elementName === 'WeatherDescription');
            const weatherTime = weatherElements.time.find(element => element.startTime === time);
            return weatherTime.elementValue[0].value;
        };

        return {
            weather_time,
            weather_data,
            datasetDescriptiontitle,
            getWeather,
        };
    },
};
</script>
  
  