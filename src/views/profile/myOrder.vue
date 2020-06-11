<template>
	<div class="section">
		<router-link to="" tag="div" class="order">
			<div class="content-l">
				<div class="line"></div>
				<span>我的订单</span>
			</div>
			<div class="content-r">
				<span>查看全部订单</span>
				<i class="fa fa-angle-right"></i>
			</div>
		</router-link>
		<div class="category">
			<router-link to="" tag="div" class="item">
				<i class="el-icon-truck"></i>
				<div class="category_name">代收货</div>
			</router-link>
			<router-link to="" tag="div" class="item">
				<i class="el-icon-truck"></i>
				<div class="category_name">代收货</div>
			</router-link>
			<router-link to="" tag="div" class="item">
				<i class="el-icon-truck"></i>
				<div class="category_name">代收货</div>
			</router-link>
		</div>
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
	.flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.section {
		margin-top: .2rem;
	}
	.order {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: .2rem;
	    border-bottom: 1px solid #e0e0e0;
	    margin-top: .3rem;
		.content-l {
			display: flex;
			align-items: center;
			.line {
				width: .06rem;
				height: 0.3rem;
			    background-color: red;
			    margin-right: .1rem;
			}
		}
		.content-r {
			display: flex;
    		align-items: center;
    		span {
    			font-size: .28rem;
    			color: #868383;
    		}
    		i {
    			font-size: .4rem;
    			margin-left: .1rem;
    		}
		}
	}
	.category {
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: .1rem 0;
		.item {
			text-align: center;
			i {
				font-size: .6rem;
			}
			.category_name {
				font-size: .28rem;
			}
		}
	}
</style>