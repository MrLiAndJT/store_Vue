<template>
	<div>
		<!-- 用户 头像,简介 区域  -->
		<user-info></user-info>

		<!-- 订单区域 -->
		<my-order></my-order>

		<!-- 功能列表区域 -->
		<fun-list></fun-list>

	</div>
</template>

<script>
	import userInfo from 'views/profile/userInfo.vue';
	import myOrder from 'views/profile/myOrder.vue';
	import funList from 'views/profile/funList.vue';
	export default {
		data () {
			return {

			}
		},
		components: {
			userInfo,
			myOrder,
			funList
		}
	}
</script>

<style lang="less" scoped>
	
</style>