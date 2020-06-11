// 添加到购物车的数据
const shopCarList = {
	state: {
		shopCarList: [],
	},
	mutations: {
		addShopCar (state, data) {
			state.shopCarList.unshift(data);
			//console.log(state.shopCarList)
		}
	},
	actions: {

	},
	modules: {
		
	}
}

export default shopCarList;