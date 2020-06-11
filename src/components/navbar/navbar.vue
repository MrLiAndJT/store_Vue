<template>
	<div class="navbar">
		<slot name="left"></slot>
		<slot name="center"></slot>
		<slot name="right"></slot>
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
	.navbar {
		display: flex;
		align-items: center;
	}
</style>