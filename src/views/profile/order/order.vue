<template>
	<div class="order-container">
		<!-- 订单头部 -->
		<navigator-title :title="'我的订单'"></navigator-title>

		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="全部" name="0">
				<order-null></order-null>
			</el-tab-pane>
			<el-tab-pane label="代付款" name="1">
				<order-null></order-null>
			</el-tab-pane>
			<el-tab-pane label="待收货" name="2">
				<order-null></order-null>
			</el-tab-pane>
			<el-tab-pane label="代发货" name="3">
				<order-null></order-null>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import navigatorTitle from '@/components/navigator/navigator.vue';
	import orderNull from 'views/profile/order/orderNull.vue';
	export default {
		data () {
			return {
				activeName: '0'
			}
		},
		activated () {
			// 根据路由传的参数，得出选择哪个模块展示
			this.activeName = this.index;
		},
		methods: {
			handleClick(tab, event) {
				// console.log(tab, event);
			}
		},
		components: {
			navigatorTitle,
			orderNull
		},
		props: ['index']
	}
</script>

<style lang="less">
	.order-container {
		margin-top: .8rem;
		.el-tabs__nav {
			width: 100%;
			.el-tabs__item {
				width: 25%;
				text-align: center;
				font-size: .32rem;
			}
		}
	}
</style>