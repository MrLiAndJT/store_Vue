<template>
	<div class="intro-container">
		<div class="section">
			<div class="intro-wrap">
				<div class="content-l">
					<div class="title">{{allData.title}}</div>
					<div class="intro">{{allData.description}}</div>
				</div>
				<div class="content-r">
					<i class="fa fa-share-square-o" aria-hidden="true"></i>
					<span>分享</span>
				</div>
			</div>
			<div class="pay-wrap">
				<div class="pay">￥{{allData['min_price']}}</div>
				<div class="repertory">
					<span class="inventory">库存100</span>
					<span>已售{{allData['sale_count']}}份</span>
				</div>
			</div>
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
		},
		props: {
			allData: {
				type: Object
			}
		}
	}
</script>

<style lang="less" scoped>
	.intro-wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: .2rem;
		border-bottom: 1px solid #e2e2e2;
		.content-l {
			.title {
				font-size: .28rem;
			}
			.intro {
				font-size: .24rem;
			}
		}
		.content-r {
			display: flex;
			align-items: center;
			width: 40%;
    		justify-content: flex-end;
			i {
				font-size: .32rem;
			}
			span {
				font-size: .24rem;
				color: #777;
			}
		}
	}
	.pay-wrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: .1rem 0;
		.pay {
			font-size: .24rem;
			color: red;
		}
		.repertory {
			color: #777;
			font-size: .24rem;
			.inventory {
				margin-right: .3rem;
			}
		}
	}
</style>