<template>
	<div class="section">
		<div class="title">商品详情</div>
		<div class="intro" v-html="detail">
			
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {

			}
		},
		props: {
			detail: {
				type: String
			}
		}
	}
</script>

<style lang="less" scoped>
	.title {
		font-size: .32rem;
		
	}
</style>