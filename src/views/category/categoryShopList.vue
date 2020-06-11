<template>
	<div class="shopList">
		<router-link class="shop-item" 
		v-for="(item, index) in contentList"
		:to="`/shopIntro?id=${item.id}`" 
		tag="div">
			<figure>
				<img :src="item.image" :alt="item.title">
			</figure>
			<h1 class="title">{{item.title}}</h1>
			<p class="intro">{{item.description}}</p>
			<div class="price">￥{{item['min_price']}}</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		data () {
			return {

			}
		},
		props: {
			contentList: {
				type: Array
			}
		}
	}
</script>

<style lang="less" scoped>
	.shopList {
		display: flex;
		flex-wrap: wrap;
		padding-right: .2rem;
		.shop-item {
			width: 50%;
			padding-left: .2rem;
			margin-bottom: .2rem;
			figure {
				position: relative;
				padding-top: 100%;
				overflow: hidden;
				img {
					position: absolute;
					left: 0;
					top: 0;
					object-fit: cover;
				    width: 100%;
				    height: 100%;
				}
			}
			.title {
				font-size: .32rem;
			    font-weight: normal;
			    margin: .1rem 0;
			    display: block; // 如果不是block会无效
			    text-overflow: ellipsis;
			    overflow: hidden;
			    white-space: nowrap;
			}
			.intro {
				font-size: .24rem;
				margin-bottom: .1rem;
				display: block; // 如果不是block会无效
			    text-overflow: ellipsis;
			    overflow: hidden;
			    white-space: nowrap;
			}
			.price {
				color: #f40;
				font-size: .28rem;
			}
		}
	}
</style>