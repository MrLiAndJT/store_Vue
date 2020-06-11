const user = {
	state: {
		userInfo: null,		// 用户信息保存到这里，没登录就为 null
	},
	mutations: {
		saveUserInfo (state, data) {
			// 保存用户信息的函数
			state.userInfo = data;
			console.log('$sotre_user页面，用户信息保存成功');
		}
	},
	getters: {
		
	},
	actions: {
	},
	modules: {
		
	}
}

export default user;