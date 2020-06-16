<template>
	<div class="orderNull-container">
		<i class="fa fa-file-text-o"></i>
		<div class="null">您目前没有相关的订单</div>
		<router-link tag="div" to="/index">
			<el-button type="info">去逛逛</el-button>
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
	.orderNull-container {
		height: 100%;
		text-align: center;
    	margin-top: 1rem;
    	.fa {
    		font-size: 2rem;
    		color: #777;
    	}
    	.null {
    		font-size: .32rem;
    		color: #999;
    		margin: .2rem 0;
    	}
	}
</style>