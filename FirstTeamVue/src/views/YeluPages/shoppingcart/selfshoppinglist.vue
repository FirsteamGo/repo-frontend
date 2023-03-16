

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
					<tr v-for="(item, index) in sf " :key="item.自選飲食id" :value="index" class="item">
						<!-- <td style="width:200px;">
							<img :src="`${MVCimages}${sf.圖片}`" style="width:100px; height:100px">
						</td> -->
						<td style="width:200px;">
							<p> {{ item }}</p>
						</td>
						<!-- <td style="width:300px;">
							<p>{{ sf.商品內容 }}</p>
						</td>
						<td style="width:150px;">
							<p>{{ sf.單價 }}</p>
						</td>
						<td style="width:60px;">
							<p>{{ sf.需求份數 }}
							</p>
						</td> -->
					</tr>
				</table>
			</div> 
	
				</header>
				<footer style="text-align:right;">
					Total : <span id="total">0</span>
				</footer>
		
				<RouterLink :to="{ name: 'selfshoppingcart' }"> <button type="button" class="btn btn-secondary"  @click="addcart">加入購物車</button>
				</RouterLink>
			</div>
		</body>
		
		</template>
		
		
		
		
		<script setup>
		// 從 Local Storage 讀取購物車資料
		import { reactive, ref } from 'vue'
		const MVCimages = ref("https://localhost:7120/images/");
		
		const selffood=ref()
		let sf=reactive([])

		// const sf=JSON.parse(localStorage.getItem('selffood'))
		// sf=JSON.parse(localStorage.getItem('addItemList'))
        let itemString = localStorage.getItem('addItemList') // let itemString = storage['addItemList']
		sf = itemString.substring(0, itemString.length - 2).split(', ')
		
		</script>
		
		
		
		
		<style>
		.addButton {
			border: 1px solid maroon;
			border-radius: 5px;
			padding: 1px 3px;
			cursor: pointer;
			color: maroon;
		}
		
		
		
		</style>