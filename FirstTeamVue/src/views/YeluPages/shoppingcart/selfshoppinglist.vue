<script setup>
import axios from 'axios';
// 從 Local Storage 讀取購物車資料
import { reactive, ref } from 'vue'
const MVCimages = ref("https://localhost:7120/images/");

// const selffood=ref()
// let sf = defineProps('dialogData')
// let sf = reactive([])
// let sfitem = reactive([])

const props = defineProps({
	sf: Array,
	sfitem: Array,
})
console.log(props.sf);
console.log(props.sfitem);
// sf=JSON.parse(localStorage.getItem('selfaddItemList'))
// let itemString = localStorage.getItem('selfaddItemList') // let itemString = storage['selfaddItemList']
// sf = itemString.substring(0, itemString.length - 2).split(', ')
// for (let i = 0; i < sf.length; i++) {
//         // let itemInfo = localStorage.getItem(sf[i])

// 		sfitem.push(JSON.parse(localStorage.getItem('self'+sf[i])))
//     }

// 詳細資訊





</script>



<template>
<body>
<!-- 這裡放詳細資訊 -->
	<div>
	<label class="form-lable">預計參加人數: {{ Selfo.numberOfPeople }}</label>
	</div>
	<div>
	<label class="form-lable">入住時間:{{ formatDate(Selfo.data[0]) }}</label>
	</div>
	<div>
	<label class="form-lable">退住時間:{{ formatDate(Selfo.data[1]) }}</label>
	</div>
	<!-- <div>
	<label class="form-lable">合計總價: {{ Selfo.合計總價 }}</label>
	</div> -->
	<div>
	<label class="form-lable">評分: {{ Selfo.評分 }}</label>
	</div>
	<div>
	<label class="form-lable">評論: {{ Selfo.評論 }}</label>
	</div>


<!-- 這裡放飲食 -->
<div id="myCart">
	<header id="cartList">
		<table style="border-bottom:1px solid #ddd;">
			<tr class="itemHead">
				<td style="width:200px;">商品圖片</td>
				<td style="width:200px;">商品名稱</td>
				<td style="width:300px;">商品內容</td>
				<td style="width:170px;">單價($)</td>
				<td style="width:60px;">數量</td>
			</tr>
		</table>

	<div>
		<table>
			<tr v-for="(item, index) in props.sfitem " :key="item.自選飲食id" :value="index" class="item">
				<td style="width:200px;">
					<img :src="`${MVCimages}${item.圖片}`" style="width:100px; height:100px">
				</td>
				<td style="width:200px;">
					<p> {{ item.商品名稱 }}</p>
				</td>
				<td style="width:300px;">
					<p>{{ item.商品內容 }}</p>
				</td>
				<td style="width:150px;">
					<p>{{ item.單價 }}</p>
				</td>
				<td style="width:60px;">
					<p>{{ item.需求份數 }}
						</p>
					</td>
				</tr>
			</table>




			<!-- <table>
					<tr v-for="(item, index) in sf " :key="item.自選飲食id" :value="index" class="item">
						<td style="width:200px;">
							<img :src="`${MVCimages}${sfitem[index].圖片}`" style="width:100px; height:100px">
						</td>
						<td style="width:200px;">
							<p> {{ sfitem[index].商品名稱 }}</p>
						</td>
						<td style="width:300px;">
							<p>{{ sfitem[index].商品內容 }}</p>
						</td>
						<td style="width:150px;">
							<p>{{ sfitem[index].單價 }}</p>
						</td>
						<td style="width:60px;">
							<p>{{ sfitem[index].需求份數 }}
							</p>
						</td>
					</tr>
				</table> -->
		</div>

	</header>
	<footer style="text-align:right;">
		Total : <span id="total">0</span>
	</footer>

	<RouterLink :to="{ name: 'totalcart' }"> <button type="button" class="btn btn-secondary"
			@click="addcart">加入購物車</button>
	</RouterLink>
</div>
</body>
</template>








<style>
.addButton {
	border: 1px solid maroon;
	border-radius: 5px;
	padding: 1px 3px;
	cursor: pointer;
	color: maroon;
}
</style>