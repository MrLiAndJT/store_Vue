<template>
	<div class="setting-container">
		<!-- 设置头部 -->
		<navigator-title :title="'设置'"></navigator-title>
		<div class="logOut" @click="logOut">退出登录</div>
	</div>
</template>

<script>
	import navigatorTitle from '@/components/navigator/navigator.vue';
	export default {
		data () {
			return {

			}
		},
		methods: {
			logOut () {
				this.$confirm('是否退出登录?', '', {
					confirmButtonText: '是',
					cancelButtonText: '否'
				}).then(() => {
					this.$message({
						message: '退出成功',
						type: 'scuuess',
					}).catch(() => {
						this.$message({
							message: '取消退出',
							type: 'info'
						})
					})
				})
			}
		},
		components: {
			navigatorTitle
		}
	}
</script>

<style lang="less" scoped>
	.setting-container {
		margin-top: .8rem;
		.logOut {
			background: #e81919;
		    text-align: center;
		    color: #fff;
		    height: .8rem;
		    line-height: .8rem;
		    position: fixed;
		    width: 100%;
		    bottom: 0;
		}
	}
</style>