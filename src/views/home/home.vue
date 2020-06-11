<template>
	<div>

		<!-- 搜索框区域 -->
		<home-search></home-search>
		
		<!-- 轮播图 -->
		<my-swiper :swiperList="swiperList"></my-swiper>

		<!-- 分类 -->
		<home-sort></home-sort>

		<!-- 商品列表 -->
		<home-shoplist :categories="categories" :categoryGroup="categoryGroup"></home-shoplist>

		
	</div>
</template>

<script>
	import navBar from '@/components/navbar/navbar.vue';
	import mySwiper from '@/components/swiper/swiper.vue';
	import homeSearch from 'views/home/search/home_search.vue';
	import homeSort from 'views/home/sort/home_sort.vue';
	import homeShoplist from 'views/home/shopList/home_shoplist.vue';
	export default {
		data () {
			return {
				swiperList: null,	// 轮播图数据
				sortList: null,		// 分类
				categories: null,	// 商品分类
				categoryGroup: null,	// 商品分组

			}
		},
		components: {
			mySwiper,
			homeSearch,
			homeSort,
			homeShoplist,
			navBar
		},
		created () {
			this.axios.get('http://www.phpillusion.xyz/api/shop/home')
				.then((data) => {
					let dataArr = data.data.data;
					this.swiperList = dataArr.banners;		// 轮播图数据
					this.categories = dataArr.categories;
					this.categoryGroup = dataArr.categoryGroup;
				});
		},
	}
</script>

<style lang="less" scoped>
	
</style>