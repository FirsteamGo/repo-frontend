<script setup>
// 從 Local Storage 讀取購物車資料
import { reactive, ref, computed } from 'vue'
const MVCimages = ref("https://localhost:7120/images/");

// const selffood=ref()
// let sf = defineProps('dialogData')
// let sf = reactive([])
// let sfitem = reactive([])
// const ListTotal = ref(0)

let ListTotal = computed(() => {
	let ListTotalData = 0

	for (let i = 0; i < props.sfitem.length; i++) {
		ListTotalData += props.sfitem[i].單價 * props.sfitem[i].需求份數
	}
	return ListTotalData
})

console.log(ListTotal);


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
</script>



<template>
	<body>
		<div id="myCart">
			<!-- <h1>
																																											Shopping Cart
																																				</h1> -->
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
			<!-- 動態新增 -->
			<!-- 會重複做的視為功能，功能要寫成函數 -->
			<!-- 這邊寫飲食按下選購後的東西 -->
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
				總計 : <span id="total">{{ ListTotal }} 元</span>
			</footer>

			<RouterLink :to="{ name: 'selfshoppingcart' }"> <button type="button" class="btn btn-secondary"
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