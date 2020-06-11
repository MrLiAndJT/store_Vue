<template>
	<div>
		<transition-group class="list" tag="ul" name="list">
			<li 
			v-for="(item, index) in shopList" :key="item.id + item.size"
			@touchstart="begin($event, index)" 
			@touchend="end($event, index)" 
			:class="item.showDel ? 'showDel' : '' "		
			>
				<div class="content">
					<div class="con-l" @click="select($event, index)">
						<div :class="item.selected ? 'round select' : 'round'">
					</div>
					</div>
					<div class="con-r">
						<figure>
						<img :src="item.img" :alt="item.title">
						</figure>
						<div class="intro-box">
							<div class="title">{{item.title}}</div>
							<div class="intro">{{item.size}}</div>
							<div class="price">￥{{item.price}}</div>
						</div>
						<div class="count-box">
							<i class="fa fa-minus-circle minus" @click="minus($event, index)"></i>
							<div class="num">{{item.count}}</div>
							<i class="fa fa-plus-circle add" @click="add($event, index)"></i>
						</div>
					</div>
				</div>
				<div class="del" @click="del($event, index)">删除</div>
			</li>
		</transition-group>
		<div class="sum-container">
			<div class="con-l">
				<div class="select-all" @click="allOrCancel">
					<div :class="isSelectAll ? 'round select' : 'round'"></div>
					<span>全选</span>
				</div>
				<div class="count">
					合计：￥{{totalPrice}}
				</div>

			</div>
			<div class="con-r">
				去结算
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				flag: true,
				beginX: 0,
				endX: 0,
				shopList: [],
				totalPrice: 0,	//选中的商品总价
				isSelectAll: true,	// 是否选择全部商品
			}
		},
		created () {
			this.shopList = this.$store.state.shopCarList.shopCarList;
			this.calcPrict();
		},
		methods: {
			begin (e, i) {
				this.beginX = e.changedTouches[0].pageX;
			},
			end (e, i) {
				this.endX = e.changedTouches[0].pageX;
				let dis = this.beginX - this.endX;
				if(dis >= 50) {
					this.$set(this.shopList[i], 'showDel', true)
				}else if(-50 >= dis) {
					this.$set(this.shopList[i], 'showDel', false)
				}
			},
			del (e, i) {
				// console.log('删除此商品');
				this.shopList.splice(i, 1);
				this.calcPrict();
			},
			minus (e, i) {
				//减少数量
				if (this.shopList[i].count == 1) {
					//当数量为1的时候，点击无效
					return;
				}
				this.shopList[i].count--;
				this.shopList[i].totalPrice -= this.shopList[i].price;
				this.calcPrict();
			},
			add (e, i) {
				//增加数量
				this.shopList[i].count++;
				this.shopList[i].totalPrice += this.shopList[i].price;
				this.calcPrict();
			},
			select (e, i) {
				this.shopList[i].selected = !this.shopList[i].selected;
				this.calcPrict();
				this.isSelectAllMethods();
			},
			calcPrict () {
				//计算
				this.totalPrice = 0;
				this.shopList.forEach((ele, index) => {
					if(ele.selected) {
						this.totalPrice += ele.totalPrice
					} 
				});
			},
			allOrCancel () {
				// 全选或者取消全选
				if(this.isSelectAll) {
					// 如果是全选状态，就执行取消全选
					this.cancelSelectAll();
				}else {
					// 如果不是全选状态，就执行全选
					this.selectAll();
				}
			},
			selectAll () {
				// 全选
				this.shopList.forEach((ele, index) => {
					ele.selected = true;
				});
				this.calcPrict();
				this.isSelectAllMethods();
			},
			isSelectAllMethods () {
				let flag = true;
				this.shopList.forEach((ele, index) => {
					if(!ele.selected) {
						// 如果有一项是没有选中的，就是没有全选
						flag = false;
					}
				});

				if(flag) {
					// 如果循环结束，发现所有选择都是选中的，则把全选状态更改为true
					this.isSelectAll = true;
				}else {
					this.isSelectAll = false;
				}
			},
			cancelSelectAll () {
				// 取消全选 (全都不选)
				if(!this.isSelectAll) {
					// 只有在全选状态下才会执行
					return;
				}
				this.shopList.forEach((ele, index) => {
					ele.selected = false;
				});
				this.calcPrict();
				this.isSelectAllMethods();
			}

		}
	}
</script>

<style lang="less" scoped>
	.round {
		width: .4rem;
		height: .4rem;
		border-radius: 50%;
		border: 1px solid #999;
		&.select {
			background-image: url('http://localhost:8080/select.png');
			background-size: cover;
			background-position: center;
			border: none;
		}
	}
	// 商品列表
	.list {
		overflow: hidden;
		margin-bottom: 1.8rem;
		li {
			position: relative;
			display: flex;
			transition: all .3s linear;
			border-bottom: 1px solid #e2e2e2;

			// 删除动画 begin
			&.list-leave-active {
				transition: all .3s linear;
			}
			&.list-leave-to {
				opacity: 0;
				transform: translateY(-50px);
			}
			// 删除动画 end

			&.showDel {
				transform: translateX(-2rem);
			}
			.content {
				flex: 0 0 auto;
				width: 100%;
				// background-color: skyblue;
				display: flex;
				align-items: center;
				padding: .2rem;
				.con-l {
					
				}
				.con-r {
					display: flex;
					flex: 1;
					figure {
						flex-shrink: 0;
						margin: 0 .2rem;
						width: 2rem;
						height: 2rem;
						font-size: 0;
						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}
					.intro-box {
						.title {
							color: #333;
						}
						.intro {
							margin: .3rem 0;
							color: #999;
							font-size: .24rem;
						}
						.price {
							color: #f40;
							font-size: .28rem;
						}
					}
					.count-box {
						display: flex;
						align-items: flex-end;
						flex: 1;
						justify-content: flex-end;
						i {
							font-size: .4rem;
						}
						.minus {
							color: #7d7d7d;
						}
						.add {
							color: #f40;
						}
						.num {
							margin: 0 .2rem;
						}
					}
				}
			}
			.del {
				flex: 0 0 auto;
				background-color: red;
				width: 2rem;
				display: flex;
			    align-items: center;
			    justify-content: center;
			    color: #fff;
			}
		}
	}
	// 总数列
	.sum-container {
		width: 100%;
		background-color: #fff;
		border-top: 1px solid #eaeaea;
		border-bottom: 1px solid #eaeaea;
		height: .8rem;
		position: fixed;
		bottom: 1rem;
		left: 0;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.con-l {
			display: flex;
			.select-all {
				display: flex;
				margin: 0 .2rem;
				span {
					margin-left: .1rem;
				}
			}
			.count {
				font-size: .28rem;
				color: #f40;
			}
		}
		.con-r {
			height: 100%;
		    width: 2.5rem;
		    display: flex;
		    justify-content: center;
		    align-items: center;
		    background: #f75d25;
		    color: #fff;
		}
	}
</style>