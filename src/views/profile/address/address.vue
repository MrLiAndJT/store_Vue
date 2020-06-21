<template>
	<div class="address-congtainer">
		<navigator-title :title="'地址管理'"></navigator-title>

		<div class="container">
			<div class="selcet-box">

				<div class="title">请选择省份: </div>
				<el-select 
				v-model="value" 
				placeholder="请选择 / 搜索省份" 
				filterable clearable 
				@change="selectChanged">
					<el-option 
					v-for="item in stateList"
					:key="item.id"
					:clearable="true"
					:value="item.name">
						
					</el-option>
				</el-select>

				<div class="area" v-if="show">
					<div class="title">请选择区域: </div>
					<el-select v-model="area">
						<el-option
						v-for="item in areaList"
						:key="item.id"
						:clearable="true"
						:value="item.name"
						>
						</el-option>
					</el-select>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
	import navigatorTitle from '@/components/navigator/navigator.vue';
	export default {
		data () {
			return {
				token: "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9teXNlcnZlclwvYXBpXC9sb2dpbiIsImlhdCI6MTU5MjcyMjU3NCwiZXhwIjoxNTkyNzI2MTc0LCJuYmYiOjE1OTI3MjI1NzQsImp0aSI6IjdRUnhWZVBoeHNpT2RETWoiLCJzdWIiOjIsInBydiI6ImY2YjcxNTQ5ZGI4YzJjNDJiNzU4MjdhYTQ0ZjAyYjdlZTUyOWQyNGQifQ.NGGCd3ZJWz335nC0jhJBOKacLK8LTPPRJg5h2UjfQe8",
				stateList: [],
				areaList: [],
				value: '',
				area: '',
				id: 1,
				show: false,
			}
		},
		created () {
			let token = this.$store.state.userToken;
			this.axios.post('http://www.phpillusion.xyz/api/address/provinces', {}, {
				headers: {
					Authorization: token
				}
			}).then((res) => {
				// console.log(res.data.data)
				this.stateList = res.data.data;
			}, (err) => {
				console.log(err.message)
			});
		},
		methods: {
			selectChanged (value) {
				this.show = false;
				this.areaList = [];
				let token = this.$store.state.userToken;
				let arr = this.stateList.filter((ele, index) => {
					return ele.name == value;
				});
				this.areaList = []
				this.axios.post('http://www.phpillusion.xyz/api/address/all_nest', {
					id: arr[0].id
				}, {
					headers: {
						Authorization: token
					}
				}).then((res) => {
					this.areaList = res.data.data[0].children;
					this.show = true;
				});
			},
			selectId (e, i) {
				console.log(e, i)
			}
		},
		components: {
			navigatorTitle
		},
	}
</script>

<style lang="less" scoped>
	.address-congtainer {
		margin-top: .8rem;
		overflow: hidden;	// 解决margin塌陷
		.container {
			padding: 0 .2rem;
			.selcet-box {
				margin-top: .2rem;
				.el-select {
					width: 100%;
				}
			}
		}
	}
</style>