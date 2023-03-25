import { defineStore } from "pinia";
import { ref, reactive, onMounted } from "vue";
import axios from "axios";

export const useSetPinia = defineStore('setpiana', () => {

    const webApi = ref("https://localhost:7108/api/SetOrderDetails");



})