<!-- <template>
	<div>
		<swiper ref="mySwiper" :options="swiperOptions" touch-action: none>
			<swiper-slide>slide1</swiper-slide>
			<swiper-slide>slide2</swiper-slide>
			<swiper-slide>slide3</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
	import 'swiper/css/swiper.css'; 
	export default {
		name: 'mySlider',
		data () {
			return {
				swiperOptions: {
					pagination: {
						el: '.swiper-pagination'
					}
				}
			}
		},
		computed: {
			swiper () {
				return this.$refs.mySwiper.$swiper;
			}
		},
		mounted () {
			// console.log('当前swiper实例对象', this.swiper);
			// this.swiper.slideTo(3, 1000, true);
		},
		components: {
			Swiper,
			SwiperSlide,
			directive
		}
	}
</script>

<style lang="less" scoped>
	.swiper-container {
		height: 300px;
	}
</style> -->
<template>
	<div>
		<swiper :options="swiperOptions" :auto-update="true" :auto-destroy="true">
			<swiper-slide v-for="item in swiperList" :key="">
				<img :src="item.image" alt="">
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
	import 'swiper/css/swiper.css'; 
	export default {
		name: 'mySlider',
		data () {
			return {
				swiperOptions: {
					pagination: {
						el: '.swiper-pagination',
					},
					autoplay: {
						delay: 3000
					},
					loop: true
				}
			}
		},
		created () {
			// this.axios.get('http://localhost:8080/slider.json')
			// 	.then((data) => {
			// 		this.sliderList = data.data.list;
			// 	})
		},
		computed: {
			// swiper () {
			// 	return this.$refs.mySwiper.$swiper;
			// }
		},
		mounted () {
			// console.log('当前swiper实例对象', this.swiper);
			// this.swiper.slideTo(3, 1000, true);
		},
		components: {
			Swiper,
			SwiperSlide,
			directive
		},
		props: {
			swiperList : {
				type: Array
			}
		}
	}
</script>

<style lang="less" scoped>
	.swiper-container {
		height: 3.5rem;
		font-size: 0;
	}
</style>