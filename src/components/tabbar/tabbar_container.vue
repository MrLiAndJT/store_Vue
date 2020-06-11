<template>
	<div>
		<footer class="footer" :style="showFooter ? 'display: flex;' : 'display: none;' ">
			<slot></slot>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'tabbarContainer',
		data () {
			return {
				
			}
		},
		props: {
			showFooter: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style lang="less" scoped>
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 1rem;
		background-color: #f4f4f4;
	}
</style>