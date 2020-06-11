<template>
	<router-link class="search" to="/search" tag="div">
		<i class="el-icon-search"></i>
		<span>输入你想搜索的东西</span>
	</router-link>
</template>

<script>
	export default {
		name: 'home_search',
		data () {
			return {

			}
		},
	}
</script>

<style lang="less" scoped>
	.search {
		height: .8rem;
		background-color: #f1f1f1;
		padding: .2rem;
		box-shadow: inset 0px 0px 2px #988e8e;
		// margin-bottom: rem;
		i {
			font-size: .28rem;
    		vertical-align: middle;
    		margin-right: .15rem;
		}
		span {
			font-size: .24rem;
		}
	}
</style>