<template>
  
<body>
	<div id="myCart">
		<!-- <h1>
			Shopping Cart
		</h1> -->
		<header id="cartList">
			<table style="border-bottom:1px solid #ddd;">
				<tr class="itemHead">
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
					<tr class="item">
						<td style="width:200px;">
							<img src="@/assets/img/self/03.jpg" width="80px">
						</td>
						<td style="width:300px;">
							<p>Formosa</p>
							<button type="button" class="btn btn-outline-dark btn-sm" >Delete</button>
						</td>
						<td style="width:170px;">
							<p>5000</p>
						</td>
						<td style="width:60px;">
							<p>
								<input type="number" value="1" min="1">
							</p>
						</td>
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




<!-- 寫資料存入localStorage -->
<script>

// let storage = localStorage;
// // let storage1 = sessionStorage;
// function doFirst() {
//     // addItemList是key ; value是空字串(右邊)
//     // storage['addItemList'] = ''
//     // storage, setItem('addItemList', '') =>也可以這樣寫
//     if (storage['addItemList'] == null) {
//         storage['addItemList'] = ''
//         // storage.setItem('addItemList','')
//     }


//     //幫每個add cart建立事件聆聽

//     let list = document.querySelectorAll('.addButton')
//     //list是陣列，陣列用for迴圈
//     //class用. ; id用#
//     for (let i = 0; i < list.length; i++) {
//         list[i].addEventListener('click', function (e) {
//             // alert(e.target, id)
//             let teddyInfo = document.querySelector(`#${e.target.id} input`).value
//             // alert(teddyInfo)

//             addItem(e.target.id, teddyInfo) //先抓值再傳回值

//         })
//     }
//     //字串切割成陣列，split()
//     //陣列組成字串，join()
//     function addItem(itemId, itemValue) {
//         // alert(`${itemId},${itemValue}`)
//         let image = document.createElement('img')
//         image.src = 'imgs/' + itemValue.split('|')[1]


//         let title = document.createElement('span')
//         title.innerText = itemValue.split('|')[0]

//         let price = document.createElement('span')
//         price.innerText = itemValue.split('|')[2]


//         let newItem = document.getElementById('newItem') //shappongcart中建畫面
//         // 先確定此處是否已有物件，若有要先刪除
//         //alert(newItem.childNodes.length)
//         while (newItem.childNodes.length >= 1) {
//             newItem.removeChild(newItem.firstChild)
//         }

//         //再顯示新物件
//         newItem.appendChild(image)
//         newItem.appendChild(title)
//         newItem.appendChild(price)


//         // 存入 storage
//         if (storage[itemId]) {
//             alert(`You have checked.`)
//         } else {
//             storage['addItemList'] += `${itemId}, `
//             storage.setItem(itemId, itemValue)

//         }

//         // 計算購買數量和小計
//         let itemString = storage.getItem('addItemList') // let itemString = storage['addItemList']
//         let items = itemString.substring(0, itemString.length - 2).split(', ')//字串切割成陣列
//         console.log(items); //['A001','A005','A1006','A1002']

//         subtotal = 0
//         for (let i = 0; i < items.length; i++) {
//             let itemInfo = storage.getItem(items[i])
//             subtotal += parseInt(itemInfo.split('|')[2])
//         }


//         document.getElementById('itemCount').innerText = items.length
//         document.getElementById('subtotal').innerText = subtotal

//     }

// }
// window.addEventListener('load', doFirst);


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