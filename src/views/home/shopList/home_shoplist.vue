<template>
	<div>
		<div class="section" v-for="(item, index) in categoryGroup" :key="index">
			<!-- 头部背景图 -->
			<div class="title-bg border-radius" :style="`background-image: url(${item.image});`">
				<div class="title">{{item.title}}</div>
				<div class="box-shadow"></div>
			</div>

			<!-- 商品列表 -->
			<div class="shop-container">

				<shop-item v-for="(ele, index2) in item.products" :key="ele.id" :list="ele"></shop-item>

			</div>

		</div>
	</div>
</template>

<script>
	import shopItem from 'views/home/shopList/shop_item.vue';
	export default {
		data () {
			return {
			}
		},
		created () {
			
		},
		computed: {
			list () {
				return this.$store.state.indexDate.homeShopList;
			}
		},
		watch: {
			list (newVal, oldVal) {
				console.log('newVal: ' + newVal)
			}
		},
		components: {
			shopItem
		},
		props: ['categories', 'categoryGroup']
	}
</script>

<style lang="less" scoped>
	.title-bg {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 1.5rem;
		background-image: url(~public/category/desk/desk1.jpg);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		overflow: hidden;
		.box-shadow {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			background-color: rgba(0, 0, 0, 0.3);
		}
		.title {
			color: #fff;
			z-index: 2;
		}
	}
	.shop-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		
	}
</style>