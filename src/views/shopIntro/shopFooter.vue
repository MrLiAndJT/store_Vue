<template>
	<div class="shop-footer">
		<div class="content-l">
			<router-link class="item" to="/index" tag="div">
				<i class="fa fa-home"></i>
				<div class="text">主页</div>
			</router-link>
			<div class="item">
				<i class="fa fa-commenting"></i>
				<div class="text">客服</div>
			</div>
			<router-link class="item" to="/shopCar" tag="div">
				<i class="fa fa-shopping-cart"></i>
				<div class="text">购物车</div>
			</router-link>
		</div>
		<div class="btn-box">
			<div class="add-shopCar btn" @click="buy">加入购物车</div>
			<div class="buy btn" @click="buy">立即购买</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {

			}
		},
		methods: {
			buy: function () {
				this.$emit('buy', true);
			}
		}
	}
</script>

<style lang="less" scoped>
	.shop-footer {
		height: 1rem;
		background-color: #e4e4e4;
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0 1px 10px #8a8a8a;
		padding: 0 .2rem;
		.content-l {
			flex: 1;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.item {
				text-align: center;
				i {
					font-size: .4rem;
					color: #212121;
				}
				.text {
					font-size: .24rem;
					color: #666;
				}
			}
		}
		.btn-box {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 50%;
			.btn {
				background-color: yellow;
				width: 48%;
				text-align: center;
				line-height: 1;
				padding: .2rem 0;
				border-radius: .4rem;
				color: #fff;
				font-size: .24rem;
				&.add-shopCar {
					background: linear-gradient(45deg, #ec81e5, #d622c8);
				}
				&.buy {
					background: linear-gradient(45deg, #ff8585, #fd0202);
				}
			}
		}
	}
</style>