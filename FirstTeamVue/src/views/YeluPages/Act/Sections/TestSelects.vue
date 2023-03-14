<script setup>
const { reactive, computed, watch } = Vue;
const app = {
    setup(){
        const state = reactive({
            frameworksIdx: 0, // 記錄第一層選單的被選取項目
            contentsIdx: 0, // 記錄第二層選單的被選取項目
            frameworks : [
                {
                    type: 'Frontend',
                    contents: [
                        { name: 'Vue', website: 'https://vuejs.org/' },
                        { name: 'React', website: 'https://reactjs.org/' },
                        { name: 'Angular', website: 'https://angular.io/' },
                    ],
                },
                {
                    type: 'Backend',
                    contents: [
                        { name: 'Laravel', website: 'https://laravel.com/' },
                        { name: 'CakePHP', website: 'https://cakephp.org/' },
                        { name: 'Django', website: 'https://www.djangoproject.com/' },
                        { name: 'Ruby on Rails', website: 'https://rubyonrails.org/' },
                    ],
                },
            ],
        })
        const pickContents = computed(() => {
            return state.frameworks[state.frameworksIdx].contents;
        })
        watch(() => state.frameworksIdx, (value) =>{
            state.contentsIdx = 0;
        })
        return { state, pickContents };
    }
}

</script>

<template>
<div id="app">
    <h3>Please select your favorite framework:</h3>
    <p>
        Type:
        <select v-model="state.frameworksIdx">
            <option v-for="(item, index) in state.frameworks" :value="index">
                {{item.type}}
            </option>
        </select>
    </p>
    <p>
        Name:
        <select v-model="state.contentsIdx">
            <option v-for="(item, index) in pickContents" :value="index">
                {{item.name}}
            </option>
        </select>
    </p>
    <div class="noteText">
        <p>
            你選擇的框架類型是：{{ state.frameworks[state.frameworksIdx].type }} - 
            {{ state.frameworks[state.frameworksIdx].contents[state.contentsIdx].name }}
        </p>
        <p>官方網站：{{ state.frameworks[state.frameworksIdx].contents[state.contentsIdx].website }}</p>
    </div>
</div>
</template>

