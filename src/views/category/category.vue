<template>
	<div>
		<!-- 搜索栏 -->
		<home-search></home-search>

		<!-- 内容栏 -->
		<category-content></category-content>
		

	</div>
</template>

<script>
	//搜索栏
	import homeSearch from 'views/home/home_search/home_search.vue';

	//内容栏
	import categoryContent from 'views/category/category_content.vue';
	export default {
		data () {
			return {

			}
		},
		components: {
			homeSearch,
			categoryContent
		}
	}
</script>

<style lang="less" scoped>
	
</style>