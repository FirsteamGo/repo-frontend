<template>
  
	<div id="big_wrapper">
		<header>
			<div id="newItem"> <!--動態新增商品-->
				<!-- <img src="imgs/formosa.jpg" alt="">
				<span>Formosa</span>
				<span>5000</span> -->
			</div>
			<div id="content">
				<nav>
					Item : <span id="itemCount">0</span> item(s)
				</nav>
				<nav>
					Subtotal : $ <span id="subtotal">0</span>
				</nav>
			</div>
			<div id="shopButton">
				<span class="cartProcess"><a href="4_cartEdit.html">Edit Cart</a></span>
				<span class="cartProcess">Checkout</span>
			</div>
			<div style="clear:both;"></div>
		</header>
		<hr>
		<section>
			<ul>
				<li>
					<div>
						<img src="imgs/formosa.jpg">
						Formosa
					</div>
					<div>
						Price : $5000
					</div>
					<div>
						<span id="A1001" class="addButton">
							Add Cart
							<input type="hidden" value="Formosa|formosa.jpg|5000">
							<!-- <input type="hidden">不出現在前台但會抓值 -->
						</span>
					</div>
				</li>
				<li>
					<div>
						<img src="imgs/brown.jpg">
						Teddy Brown
					</div>
					<div>
						Price : $7000
					</div>
					<div>
						<span id="A1002" class="addButton">
							Add Cart
							<input type="hidden" value="Teddy Brown|brown.jpg|7000">
						</span>
					</div>
				</li>
				<li>
					<div>
						<img src="imgs/cinnamon.jpg">
						Teddy Cinnamon
					</div>
					<div>
						Price : $6800
					</div>
					<div>
						<span id="A1003" class="addButton">
							Add Cart
							<input type="hidden" value="Teddy Cinnamon|cinnamon.jpg|6800">
						</span>
					</div>
				</li>
				<li>
					<div>
						<img src="imgs/innocent.jpg">
						Innocent Bear
					</div>
					<div>
						Price : $7200
					</div>
					<div>
						<span id="A1004" class="addButton">
							Add Cart
							<input type="hidden" value="Innocent Bear|innocent.jpg|7200">
						</span>
					</div>
				</li>
			</ul>
			<ul>
				<li>
					<div>
						<img src="imgs/lion.jpg">
						Lion Bear
					</div>
					<div>
						Price : $8000
					</div>
					<div>
						<span id="A1005" class="addButton">
							Add Cart
							<input type="hidden" value="Lion Bear|lion.jpg|8000">
						</span>
					</div>
				</li>
				<li>
					<div>
						<img src="imgs/milk.jpg">
						Teddy Milk
					</div>
					<div>
						Price : $6000
					</div>
					<div>
						<span id="A1006" class="addButton">
							Add Cart
							<input type="hidden" value="Teddy Milk|milk.jpg|6000">
						</span>
					</div>
				</li>
				<li>
					<div>
						<img src="imgs/panda.jpg">
						Panda
					</div>
					<div>
						Price : $6800
					</div>
					<div>
						<span id="A1007" class="addButton">
							Add Cart
							<input type="hidden" value="Panda|panda.jpg|6800">
						</span>
					</div>
				</li>
				<li>
					<div>
						<img src="imgs/peterRabbit.jpg">
						Peter Rabbit
					</div>
					<div>
						Price : $5500
					</div>
					<div>
						<span id="A1008" class="addButton">
							Add Cart
							<input type="hidden" value="Peter Rabbit|peterRabbit.jpg|5500">
						</span>
					</div>
				</li>
			</ul>
		</section>
	</div>

</template>

<script>
let storage = localStorage;
function doFirst() {
    // addItemList是key ; value是空字串(右邊)
    // storage['addItemList'] = ''
    // storage, setItem('addItemList', '') =>也可以這樣寫
    if (storage['addItemList'] == null) {
        storage['addItemList'] = ''
        // storage.setItem('addItemList','')
    }


    //幫每個add cart建立事件聆聽

    let list = document.querySelectorAll('.addButton')
    //list是陣列，陣列用for迴圈
    //class用. ; id用#
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function (e) {
            // alert(e.target, id)
            let teddyInfo = document.querySelector(`#${e.target.id} input`).value
            // alert(teddyInfo)

            addItem(e.target.id, teddyInfo) //先抓值再傳回值

        })
    }
    //字串切割成陣列，split()
    //陣列組成字串，join()
    function addItem(itemId, itemValue) {
        // alert(`${itemId},${itemValue}`)
        let image = document.createElement('img')
        image.src = 'imgs/' + itemValue.split('|')[1]


        let title = document.createElement('span')
        title.innerText = itemValue.split('|')[0]

        let price = document.createElement('span')
        price.innerText = itemValue.split('|')[2]


        let newItem = document.getElementById('newItem')
        // 先確定此處是否已有物件，若有要先刪除
        //alert(newItem.childNodes.length)
        while (newItem.childNodes.length >= 1) {
            newItem.removeChild(newItem.firstChild)
        }

        //再顯示新物件
        newItem.appendChild(image)
        newItem.appendChild(title)
        newItem.appendChild(price)


        // 存入 storage
        if (storage[itemId]) {
            alert(`You have checked.`)
        } else {
            storage['addItemList'] += `${itemId}, `
            storage.setItem(itemId, itemValue)

        }

        // 計算購買數量和小計
        let itemString = storage.getItem('addItemList') // let itemString = storage['addItemList']
        let items = itemString.substring(0, itemString.length - 2).split(', ')//字串切割成陣列
        console.log(items); //['A001','A005','A1006','A1002']

        subtotal = 0
        for (let i = 0; i < items.length; i++) {
            let itemInfo = storage.getItem(items[i])
            subtotal += parseInt(itemInfo.split('|')[2])
        }


        document.getElementById('itemCount').innerText = items.length
        document.getElementById('subtotal').innerText = subtotal

    }

}
window.addEventListener('load', doFirst);
</script>

<style>

</style>