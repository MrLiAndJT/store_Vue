<template>
	<div class="shopcar-container">
		<div class="icon">
			<i class="fa fa-shopping-cart"></i>
		</div>
		<div class="intro">购物车空空如也 ~ </div>
		<router-link to="/index" tag="div" class="add">
			<span>去逛逛</span>
		</router-link>
	</div>
</template>

<script>
	export default {
		data () {
			return {

			}
		},
	}
</script>

<style lang="less" scoped>
	.shopcar-container {
		margin-top: 3rem;
		.icon {
			text-align: center;
			font-size: 1rem;
			color: #999;
		}
		.intro {
			margin: .5rem 0;
			font-size: .32rem;
			text-align: center;
			color: #777;
		}
		.add {
			text-align: center;
			span {
				display: inline-block;
				padding: .2rem 1rem;
				background-color: #e85a26;
				color: #fff;
				font-size: .28rem;
				letter-spacing: 2px;
			}
		}
	}
</style>