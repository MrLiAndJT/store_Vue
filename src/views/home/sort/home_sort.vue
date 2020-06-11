<template>
	<div class="section">
		<div class="sort-container">
			<router-link class="sort-item" to="/" tag="div">
				<i class="el-icon-mobile-phone"></i>
				<h4>手机</h4>
			</router-link>
			<router-link class="sort-item" to="/" tag="div">
				<i class="el-icon-watch"></i>
				<h4>手表</h4>
			</router-link>
			<router-link class="sort-item" to="/" tag="div">
				<i class="el-icon-service"></i>
				<h4>耳机</h4>
			</router-link>
			<router-link class="sort-item" to="/" tag="div">
				<i class="el-icon-coffee-cup"></i>
				<h4>饮品</h4>
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
		created () {
			
		}
	}
</script>

<style lang="less" scoped>
	.section {
		background: #f9f9f9;
    	padding: .2rem;
	}
	.sort-container {
		display: flex;
		justify-content: space-around;
		.sort-item {
			text-align: center;
			i {
				font-size: .6rem;
			}
			h4 {
				font-size: .24rem;
				color: #333;
				margin-top: .1rem;
			}
		}
	}
</style>