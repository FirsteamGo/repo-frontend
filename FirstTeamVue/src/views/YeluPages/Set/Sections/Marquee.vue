<template>
    <div class="containe mt-5 px-5">
        <div class="marquee-container">
            <div id="ticker" class="ticker">
                <div v-for="(message, index) in messages" :key="index" class="message">{{ message }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            messages: [],
            pauseDuration: 0, // 停頓時間，單位毫秒
            pauseTimer: null // 停頓計時器
        };
    },
    mounted() {
        // 跑馬燈的速度（每秒顯示幾條資訊）
        const speed = 1;

        // 從中央氣象局 API 中獲取天氣警訊資料
        const url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-62679C1E-8B6B-43DE-B121-6C9514A5F233&format=JSON";
        axios
            .get(url)
            .then(response => {
                const data = response.data;
                // console.log(data);
                // 將資料格式化為跑馬燈可用的格式
                this.messages = data.records.location.map(location => `${location.locationName}: ${location.weatherElement[0].time[0].parameter.parameterName}`);

                // 啟動跑馬燈
                let currentMessageIndex = 0;
                setInterval(() => {
                    const ticker = document.querySelector("#ticker");
                    const tickerHeight = ticker.offsetHeight;
                    const messageHeight = ticker.querySelector(".message").offsetHeight;
                    const maxSteps = Math.ceil(tickerHeight / messageHeight);
                    if (this.messages.length > 0) {
                        if (this.pauseTimer) {
                            // 如果已經在停頓計時器中，不顯示下一條資訊
                            return;
                        }
                        ticker.style.marginTop = `-${currentMessageIndex * messageHeight}px`;
                        currentMessageIndex++;
                        if (currentMessageIndex >= this.messages.length) {
                            currentMessageIndex = 0;
                        }
                        if (currentMessageIndex % maxSteps === 0) {
                            this.pauseTimer = setTimeout(() => {
                                this.pauseTimer = null;
                            }, this.pauseDuration);
                        }
                    }
                }, 1000 / speed);
            })
            .catch(error => console.error(error));
    }
};
</script>
  
<style>
.marquee-container {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
    height: 30px;
    overflow: hidden;
}

.ticker {
    display: flex;
    width: 500px;
    align-items: center;
    flex-direction: column;
    transition: margin-top 2s ease-in-out;
    background-color: rgb(143, 237, 143);
}

.message {
    margin-bottom: 10px;
    font-size: 14px;
    /* 調整文字大小 */
    font-family: Arial, sans-serif;
    /* 調整字體 */
    color: rgb(237, 19, 19);
}
</style>
  