import Vue from 'vue';
import Vuex from 'vuex';

// 首页请求过来的数据
import indexDate from './indexDate.js';

// 用户登录信息
import user from './user.js';	

// 购物车数据
import shopCarList from './shopCarList.js';


Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		loginToken: null,			// 用户登录后，会有一个 唯一的 token，后面用户请求的数据都是通过token来验证某一个人的
	},
	mutations: {
		saveLoginToken (state, date) {
			// console.log('state:', state)
			// console.log('state.loginToken初始值为: ', state.loginToken);
			state.loginToken = date;
			// console.log('state.loginToken修改成功');
			// console.log('state.loginToken修改后的值为: ', state.loginToken);
		}
	},
	getters: {
		
	},
	actions: {
	},
	modules: {
		indexDate,		// 首页请求过来的数据
		shopCarList,	// 添加到购物车的数据
		user
	}
})
