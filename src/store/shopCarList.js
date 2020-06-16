import axios from 'axios';
import Vue from 'vue';
// 添加到购物车的数据
const shopCarList = {
	state: {
		shopCarList: [],
		flag: true,
		totalPrice: 0,	//选中的商品总价
		isSelectAll: false,	// 是否选择全部商品
	},
	mutations: {
		initShopCarList (state, data) {
			// 在登录的时候初始化一下购物车的数据
			// 把用户的购物车数据从数据库里取出来
			state.shopCarList = data;
			state.shopCarList.forEach((ele, index) => {
				Vue.set(ele, 'selected', false);
				Vue.set(ele, 'totalPrice', parseFloat(ele.price));
			});
		},
		addShopCar (state, data) {
			state.shopCarList.unshift(data);
		},
		clearShopCar(state, data) {
			// 清空购物车
			state.shopCarList = [];
		},
		calcPrict (state) {
			// 计算价格
			state.totalPrice = 0;
			console.log('state.shopCarList: ', state.shopCarList)
				state.shopCarList.forEach((ele, index) => {
					if(ele.selected) {
						state.totalPrice = parseFloat(state.totalPrice);		// 刚刚加的
						state.totalPrice += parseFloat(ele.totalPrice)
					} 
				});
		},
		add(state, i) {
			// 增加商品数量
			// i 为增加哪一件商品的下标
			// state.shopCarList[i].totalPrice = parseFloat(state.shopCarList[i].totalPrice);
			state.shopCarList[i].count++;
			state.shopCarList[i].totalPrice += parseFloat(state.shopCarList[i].price);
			this.commit('calcPrict');
		},
		minus (state, i) {
			//减少数量
			if (state.shopCarList[i].count == 1) {
				//当数量为1的时候，点击无效
				return;
			}
			state.shopCarList[i].count--;
			state.shopCarList[i].totalPrice -= parseFloat(state.shopCarList[i].price);
			this.commit('calcPrict');
		},
		del (state, i) {
			// 删除商品
			state.shopCarList.splice(i, 1);
			this.commit('calcPrict');
		},
		select (state, i) {
			state.shopCarList[i].selected = !state.shopCarList[i].selected;
			this.commit('calcPrict');
			this.commit('isSelectAllMethods');
		},
		selectAll (state) {
			// 全选
			state.shopCarList.forEach((ele, index) => {
				ele.selected = true;
			});
			this.commit('calcPrict');
			this.commit('isSelectAllMethods');
		},
		cancelSelectAll (state) {
			// 取消全选 (全都不选)
			if(!state.isSelectAll) {
				// 只有在全选状态下才会执行
				return;
			}
			state.shopCarList.forEach((ele, index) => {
				ele.selected = false;
			});
			this.commit('calcPrict');
			this.commit('isSelectAllMethods');
		},
		isSelectAllMethods (state) {
			let flag = true;
			state.shopCarList.forEach((ele, index) => {
				if(!ele.selected) {
					// 如果有一项是没有选中的，就是没有全选
					flag = false;
				}
			});

			if(flag) {
				// 如果循环结束，发现所有选择都是选中的，则把全选状态更改为true
				state.isSelectAll = true;
			}else {
				state.isSelectAll = false;
			}
		},
		allOrCancel (state) {
			// 全选或者取消全选
			if(state.isSelectAll) {
				// 如果是全选状态，就执行取消全选
				this.commit('cancelSelectAll');
			}else {
				// 如果不是全选状态，就执行全选
				this.commit('selectAll');
			}
		},

	},
	actions: {
		getShopCarList (context) {
			axios.post('http://www.phpillusion.xyz/api/shop/cart_list', {},{
					headers: {
						Authorization: context.rootState.userToken
					}
				}).then((data) => {
						if(data.status == 200) {
							let d = data.data.data.data;
							context.commit('initShopCarList', d);
						}
					});
		},
		
	},
	getters: {
		transitionTotalPrice (state) {
			// 转换后(保留两位小数)的总价
			return state.totalPrice.toFixed(2);
		}
	},
	modules: {
		
	}
}

export default shopCarList;
