<template>
	<div>

		<!-- 购物车商品列表 -->
		<shopcar-list v-if="hasProducts"></shopcar-list>

		<!-- 还没添加东西到购物车的页面 -->
		<shopcar-null v-else="hasProducts"></shopcar-null>

		

	</div>
</template>

<script>
	import shopcarNull from 'views/shopCar/shopcarNull.vue';
	import shopcarList from 'views/shopCar/shopcarList.vue';
	export default {
		data () {
			return {
				hasProducts: true
			}
		},
		created () {
			
		},
		methods: {

		},
		activated () {
			// 因为 router-view 使用了 keep-alive, 所以不在create 函数里面执行此代码
			let len = this.$store.state.shopCarList.shopCarList.length;
			if(len == 0) {
				return this.hasProducts = false;
			}
			this.hasProducts = true;
		},
		computed: {
			listenLen () {
				return this.$store.state.shopCarList.shopCarList.length;
			}
		},
		watch: {
			listenLen (newVal, oldVal) {
				if(newVal == 0) {
					return this.hasProducts = false;
				}
			}
		},
		components: {
			shopcarNull,
			shopcarList
		},

	}
</script>

<style lang="less" scoped>
	
</style>
