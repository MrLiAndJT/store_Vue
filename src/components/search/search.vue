<template>
	<div class="search-container">
		<!-- 头部 -->
		<navigator-title :title="'搜索'"></navigator-title>
		<el-autocomplete 
		placeholder="请输入内容"
		v-model="value"
		:clearable="true"
		:autofocus="true"
		:fetch-suggestions="querySearchAsync"
		>
			<el-button slot="append" icon="el-icon-search"></el-button>
		</el-autocomplete>
	</div>
</template>

<script>
	import navigatorTitle from '@/components/navigator/navigator.vue';
	export default {
		data () {
			return {
				value: '',
				restaurants: [],
			}
		},
		methods: {
			querySearchAsync (queryString, cb) {
				new Promise((resolve, reject) => {
					setTimeout(() => {
						console.log('定时器');
						resolve();
					},0);
				}).then(() => {
					let tempArr = [
						{
							value: '这是第一条',
							address: '广东'
						},
						{
							value: '这是第二天',
							address: '北京'
						},
						{
							value: '哈哈哈',
							address: '上海'
						}
					];
					let results = tempArr.filter((ele, index) => {
						return ele.value.indexOf(this.value) != -1 && this.value != '';
					});
					cb(results);
				});
			}
		},
		components: {
			navigatorTitle
		}
	}
</script>

<style lang="less" scoped>
	.search-container {
		margin-top: .8rem;
		.el-autocomplete {
			width: 100%;
		}
	}
</style>