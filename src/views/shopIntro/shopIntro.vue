<template>
	<div class="shop-main-container">
		<!-- 头部导航条 -->
		<navigator-title :title="'商品详情'"></navigator-title>

		<!-- 轮播图 -->
		<my-swiper :swiperList="swiperList"></my-swiper>

		<!-- 商品信息 -->
		<shop-intro :allData="allData"></shop-intro>

		<!-- 商品规格 -->
		<shop-size ref="showSelect" 
		:shopId="$route.query.id" 
		:size="size" 
		:title="title"></shop-size>

		<!-- 商品详情 -->
		<shop-info :detail="detail"></shop-info>

		<!-- 底部加入购物车 客服 栏 -->
		<shop-footer @buy="show"></shop-footer>

	</div>
</template>

<script>

	import navigatorTitle from '@/components/navigator/navigator.vue';
	import mySwiper from '@/components/swiper/swiper.vue';
	import shopIntro from 'views/shopIntro/intro.vue';
	import shopSize from 'views/shopIntro/shopSize.vue';
	import shopInfo from 'views/shopIntro/shopInfo.vue';
	import shopFooter from 'views/shopIntro/shopFooter.vue';

	export default {
		data () {
			return {
				swiperList: [],		// 轮播图
				detail: null,		// 商品详情介绍
				allData: {},		// 商品的所有数据
				size: [],			// 商品规格数据
				title: '',			// 商品名字
			}
		},
		methods: {
			show (flag) {
				// 调用兄弟组件的方法(出现规格选择栏)
				this.$refs.showSelect.show();
			}
		},
		created () {
			// 获取商品的基本信息, 商品id为:{this.$route.query.id}
			this.axios.get(`http://www.phpillusion.xyz/api/store/product/detail/${this.$route.query.id}`)
				.then((data) => {
					let d = data.data.data;
					let arr = [];
					if(d['more_image']) {
						d['more_image'].forEach((ele, index) => {
							arr.push({id: index, image: ele});
						});
					}
					
					this.swiperList = arr;			// 轮播图
					this.detail = d.detail;			// 商品详情介绍
					this.allData = d;				// 商品的所有数据
					this.size = d['product_skus'];	//商品规格数据
					this.product_sku_id = d['product_sku_id'];		//商品sku_id, 不是sku_no
					this.title = d.title;			// 商品名字
				});
		},
		components: {
			navigatorTitle,
			mySwiper,
			shopIntro,
			shopSize,
			shopInfo,
			shopFooter
		}
	}
</script>

<style lang="less" scoped>
	.shop-main-container {
		margin: .8rem 0 1rem;
	}
</style>