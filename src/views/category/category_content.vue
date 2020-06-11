<template>
	<div class="category-container">
		<!-- 左边选择栏 -->
		<div class="select-box">
			<ul class="sort-list" ref="shopList">

				<li :class="current == 0 ? 'sort-item active' : 'sort-item' " @click="changeClass(0, 0)">全部</li>
				<li :class="current == index + 1 ? 'sort-item active' : 'sort-item' " 
				v-for="(item, index) in homeShopList" 
				:key="item.id"
				@click="changeClass(index + 1, item.id)">{{item.title}}</li>
				
			</ul>
		</div>

		<!-- 右边内容栏 -->
		<shop-list class="content-box" :contentList="contentList"></shop-list>


	</div>
</template>

<script>
	import ShopList from 'views/category/categoryShopList.vue';
	export default {
		data () {
			return {
				homeShopList: [],		//把首页请求过来的数据保存，然后把各个分类循环遍历出来
				current: 0,				// 判断点击了哪个li的索引
				categoryId: 0,			//分类的id, 每次点击不同的分类，都会根据分类的id去后端请求数据
				contentList: [],
				currentPage: 1,			// 第几页的数据
			}
		},
		created () {
			// console.log('请求过来的首页数据: ', this.$store.state.homeShopList)
			// this.homeShopList = this.$store.state.homeShopList;

			// 请求渲染左侧分类列表
			this.axios.get('http://www.phpillusion.xyz/api/store/product/category')
				.then((data) => {
					this.homeShopList = data.data.data;
				});

			// 分类为全部的右侧内容列表
			this.allShop();
			
		},
		mounted () {
		},
		methods: {
			changeClass (index, id) {
				//把点击的dom元素的index传进来，然后判断current和dom身上的index是否一样，一样就添加 active类名
				this.current = index;
				this.categoryId = id;	//把分类的id传过来


				// console.log('应该请求id为' + this.categoryId + '的分类')
				// http://www.phpillusion.xyz/api/store/products/list?id={1}
				if(id == 0) {
					// 如果是选择全部商品的，则直接用全部的API，而不是根据id来选
					return this.allShop();
				}
				this.axios.get(`http://www.phpillusion.xyz/api/store/products/list?id=${this.categoryId}`)
					.then((data) => {
						this.contentList = data.data.data.data;
						console.log(this.contentList)
					});
				
			},
			allShop () {
				// 请求渲染右边内容列表 (分类为所有的)
				this.axios.get('http://www.phpillusion.xyz/api/store/products/list')
					.then((data) => {
						this.contentList = data.data.data.data;
					})

			}
		},
		components: {
			ShopList
		}
	}
</script>

<style lang="less" scoped>
	.category-container {
		display: flex;
		.select-box {
			width: 20%;
			padding-top: .2rem;
			.sort-list {
				background-color: skyblue;
				.sort-item {
					text-align: center;
					padding: .2rem .1rem;
					font-size: .28rem;
					&.active {
						color: #fff;
						font-size: .32rem;
					}
				}
			}
		}
		.content-box {
			width: 80%;
			padding-top: .2rem;
		}
	}
</style>
