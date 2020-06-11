<template>
	<div class="navigator">
		<div class="last" @click="back">
			<i class="fa fa-angle-left" aria-hidden="true"></i>
		</div>
		<div class="title">{{title}}</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {

			}
		},
		watch: {
		},
		methods: {
			back () {
				// 返回上一级页面
				this.$router.go(-1);
			}
		},
		props: {
			title: {
				type: String
			}
		}
	}
</script>

<style lang="less" scoped>
	.navigator {
		position: fixed;
		z-index: 10;
		top: 0;
		width: 100%;
		display: flex;
		align-items: center;
		height: .8rem;
		padding: 0 .3rem;
		background-color: #eee;
		.last {
			font-size: .5rem;
		}
		.title {
			flex: 1;
			text-align: center;
			font-size: .32rem;
		}
	}
</style>