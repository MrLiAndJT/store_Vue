<template>
	<div>
		<ul class="list-container">
			<router-link tag="li" v-for="(item, index) in list" :to="item.to">
				<div class="icon-box-left">
					<i :class="item.icon" aria-hidden="true"></i>
				</div>
				<div class="content-box">
					<div class="content">{{item.content}}</div>
					<div class="more">
						<i class="fa fa-angle-right" aria-hidden="true"></i>
					</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				list: [
				// 渲染 li 列表的内容 icon => 左边的字体图标, content => 文字内容, to => 路由链接
					{
						icon: 'fa fa-map-marker',
						content: '地址管理',
						to: ''
					},
					{
						icon: 'fa fa-shopping-cart',
						content: '购物车',
						to: '/shopCar'
					},
					{
						icon: 'fa fa-star',
						content: '收藏',
						to: ''
					},
					{
						icon: 'fa fa-cog',
						content: '设置',
						to: ''
					}
				]
			}
		},
	}
</script>

<style lang="less" scoped>

	.list-container {
		margin-top: .4rem;
		li {
			display: flex;
			align-items: center;
			// background-color: #eee;
			.icon-box-left {
				margin: 0 .2rem;
				i {
					width: .3rem;
				    display: block;
				    text-align: center;
				    font-size: .32rem;
				}
			}
			.content-box {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: .2rem 0;
				border-bottom: 1px solid #d2cbcb;
				.content {
					font-size: .32rem;
				}
				.more {
					margin-right: .2rem;
					font-size: .4rem;
				}
			}
		}
	}
</style>