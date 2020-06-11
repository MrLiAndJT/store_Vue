<template>
	<router-link class="shop-item" :data-id="list.id" :to="`shopIntro?id=${list.id}`" tag="div">
		<figure>
			<img :src="list.image" alt="">
		</figure>
		<h2 class="intro">{{list.title}}</h2>
		<div class="price">￥{{list.min_price}}</div>
	</router-link>
</template>

<script>
	export default {
		data () {
			return {

			}
		},
		props: {
			list: {
				title: Array,
				default: []
			}
		}
	}
</script>

<style lang="less" scoped>
	.shop-item {
		width: 2.3rem;
		margin-top: .2rem;
		font-size: 0;
		figure {
			width: 2.3rem;
			height: 2.3rem;
			overflow: hidden;
			border-radius: 0.1rem;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		h2 {
			font-size: .24rem;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			padding: .1rem;
		}
		.price {
			color: #fb4808;
			font-size: .24rem;
			padding-left: .1rem;
			font-weight: bold;
		}
	}
</style>