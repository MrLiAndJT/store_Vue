<template>
	<div :style="showFooter ? 'margin-bottom: 1rem;' : 'margin-bottom: 0;' ">
		<keep-alive exclude="shopDetail">
			<router-view></router-view>
		</keep-alive>
		<!-- <router-view></router-view> -->
		<tab-bar :showFooter="showFooter">
			<tabbar-item v-for="(item, index) in tabbarList" 
			:key="index" 
			:intro="item"
			>
			</tabbar-item>
		</tab-bar>
	</div>
</template>

<script>
	import '@/assets/css/common.less';
	import resetRootSize from '@/assets/js/reset_fontSize.js';
	import tabBar from '@/components/tabbar/tabbar_container.vue';
	import tabbarItem from '@/components/tabbar/tabbar_item.vue';

	export default {
		data () {
			return {
				showFooter: true,
				tabbarList: [
					{
						to: '/index',
						icon: 'fa-home',
						text: '主页'
					},
					{
						to: '/category',
						icon: 'fa-list-ul',
						text: '分类'
					},
					{
						to: '/shopCar',
						icon: 'fa-shopping-cart',
						text: '购物车'
					},
					{
						to: '/profile',
						icon: 'fa-user',
						text: '我的'
					}
				]
			}
		},
		components: {
			tabBar,
			tabbarItem
		},
		created () {	
			window.localStorage.setItem('isLogin', false);
			console.log('App.vue中临时设置每次刷新都是退出登录状态')		
		},
		mounted () {
			//根据视口大小设置根字体大小(适配不同的移动端)
			resetRootSize(document, window, 750);		
			window.onresize = function () {
				resetRootSize(document, window, 750);
			}
		},
		watch: {
			'$route' (to, from) {
				let path = to.path;
				if(path == '/index' || path.indexOf('/category') != -1 || path == '/shopCar' || path == '/profile') {
					return this.showFooter = true;
				}
				this.showFooter = false;

			}

		}
	}
</script>

<style lang="less" scoped>
	
</style>