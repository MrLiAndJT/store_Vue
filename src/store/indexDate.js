import Vue from 'vue';
const indexData = {
	state: {
		
	},
	mutations: {
		saveHomeShopList (state, data) {
			// 保存主页请求过来的商品列表数据
			// 把首页请求过来的数据保存到 state 的 homeShopList 中
			Vue.set(state, 'homeShopList', data);
		},
	},
	actions: {

	},
	modules: {
		
	}
}

export default indexData;