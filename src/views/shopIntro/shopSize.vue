<template>
	<div class="size-container">
		<div class="select" @click="show">
			<span>请选择规格和数量</span>
			<i class="fa fa-angle-right"></i>
		</div>
		<div :class="addActive ? 'size-container active' : 'size-container'">
			<div class="bg" @click="hidden"></div>
			<div class="select-container section">
				<!-- 商品图片和单价区域 -->
				<div class="intro">
					<div class="content-l">
						<figure>
							<img :src="src" alt="">
						</figure>
						<div class="price-box">
							<div class="price">
								<span>零售价：</span>
								<em>{{price}}元</em>
							</div>
							<div class="please-select">请选择规格和数量</div>
						</div>
					</div>
					<div class="content-r">
						<i class="fa fa-times" @click="hidden"></i>
					</div>
				</div>
				<!-- 规格区域 -->
				<div class="spec">
					<div class="title">规格</div>
					<div class="tag-box">
						<span 
						v-initSize="i"
						v-for="(item, i) in size" :key="i" 
						@click="select(i)"
						:class="index == i ? 'active' : ''"
						>{{item.title}}</span>
					</div>
				</div>
				<!-- 选择商品数量 -->
				<div class="count">
					<div class="title">选择数量</div>
					<el-input-number v-model="num" 
					size="mini"
					@change="handleChange" 
					:min="1" 
					label="描述文字"></el-input-number>
				</div>
				<!-- 加入购物车 / 购买 -->
				<div class="btn-box">
					<div class="add-shopCar btn" @click="addShopCar">
						加入购物车
					</div>
					<div class="buy btn">
						立即购买
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				addActive: false,
				index: 0,		// 选中的规格数组的index
				num: 1,			// 选中的商品数量
				// 商品详情图
				src: 'http://cdn.xuansiwei.com/d0918dcs/1581302728816/index_news.jpg?x-oss-process=style/small',
				price: 0,		// 商品价格,
			}
		},
		methods: {
			show: function () {
				this.addActive = true;
			},
			hidden: function () {
				this.addActive = false;
			},
			select: function (i) {
				this.index = i;
				this.price = this.size[i].price;
			},
			handleChange: function (value) {
				// console.log(value)
			},
			addShopCar: function () {

				// 判断是否登录，还没登录则跳转到1登录页面
				let isLogin = window.localStorage.getItem('isLogin');
				if(isLogin == 'false') {
					this.$message({
						message: '请先登录',
						type: 'warning',
						center: true
					});
					return this.$router.replace('/login');
				}
				

				let flag = this.existShopCar();		// 判断是否已经存在购物车中
				if(flag) {
					return;
				}
				
				let obj = {};
				obj.product_id = this.shopId;							// 商品的id
				obj.img = this.src;								// 选择商品的预览图
				obj.count = this.num;							// 选择的数量
				//obj.size = this.size[this.index].title;			//选中商品的规格
				obj.product_sku_title = this.size[this.index].title;			//选中商品的规格
				obj.product_title = this.title;							// 商品名字 (父组件传过来的)
				obj.price = parseFloat(this.size[this.index].price).toFixed(2);			// 商品价格
				obj.totalPrice = obj.price * obj.count;			// 总价 (选了2个或以上商品时..)
				obj.product_sku_id = this.size[this.index].id;	
				obj.selected = true;							//(购物车中)是否选择此商品 (添加到购物车时默认选中)

				let serviceData = {
					product_sku_id: this.size[this.index].id,
					product_id: this.shopId,
					product_title: this.title,
					count: this.num,
					price: parseFloat(this.size[this.index].price).toFixed(2)
				}

				// this.axios.post('http://www.phpillusion.xyz/api/shop/add_cart', serviceData, {
				// 	headers: {
				// 		Authorization: this.$store.state.userToken
				// 	}
				// }).then((data) => {
					
				// 	//添加到购物车的商品信息保存到 Vue的数据管理中
				// 	this.$store.commit('addShopCar', obj);

				// 	this.$message({
				// 		message: '购物车添加成功',
				// 		type: 'success',
				// 		center: true
				// 	});
				// 	this.hidden();
				// 	console.log('添加成功');
				// }).catch((data) => {
				// 	console.log('添加失败,', data)
				// })

				//添加到购物车的商品信息保存到 Vue的数据管理中
				this.$store.commit('addShopCar', obj);

				this.$message({
					message: '购物车添加成功',
					type: 'success',
					center: true
				});
				this.hidden();
			},
			existShopCar () {
				// 判断此商品是否已经存在购物车里
				let flag = false;
				let shopCarList = this.$store.state.shopCarList.shopCarList;
				shopCarList.forEach((ele, index) => {
					if(ele.id == this.shopId && ele.size == this.size[this.index].title) {
						// 如果商品id已经存在，并且此规格也存在 购物车中，则返回 true
						this.$message({
							message: '此商品已存在购物车中',
							type: 'warning',
							center: true
						});
						return flag = true;
					}
				});
				if(flag) {
					return true;
				}
				return false;
			},
		},
		props: ['shopId', 'size', 'title', 'product_sku_id'],
		directives: {
			initSize: {
				// 自定义指令，进来的时候自动触发选中第一个商品规格
				inserted (el, binding, index) {
					if(binding.value === 0) {
						el.click()
					}
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.size-container {
		margin: .2rem 0;
		.select {
			padding: .2rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #e2e2e2;
			span {
				font-size: .24rem;
			}
		}
		.size-container {
			&.active {
				.bg {
					display: block;
				}
				.select-container {
					transform: translateY(0%);
					// bottom: .8rem;
				}
			}
			.bg {
				position: fixed;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				background-color: rgba(0, 0, 0, .4);
				z-index: 2;
				display: none;
			}
			.select-container {
				position: fixed;
				z-index: 11;
				bottom: 0;
				width: 100%;
				transition: all .3s linear;
				transform: translateY(100%);
				background-color: #fff;
				padding-bottom: .3rem;
				.intro {
					display: flex;
					justify-content: space-between;
					.content-l {
						display: flex;
						figure {
							width: 2rem;
							height: 2rem;
							margin-right: .3rem;
							img {
								display: block;
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
						}
						.price-box {
							.price {
								span {
									font-size: .24rem;
									// margin-right: .3rem;
								}
								em {
									font-style: normal;
									color: #f40;
									font-size: .28rem;
								}
							}
							.please-select {
								font-size: .24rem;
							}
						}
					}
				}
				.spec {
					margin-top: .2rem;
					.title {
						font-size: .28rem;
						margin-bottom: .1rem;
					}
					.tag-box {
						span {
							display: inline-block;
							font-size: .24rem;
							padding: .1rem .2rem;
							margin-right: .1rem;
							border: 1px solid #a7a7a7;
							&.active {
								color: #f40;
								border-color: #f40;
							}
						}
					}
				}
				.count {
					margin-top: .2rem;
					.title {
						margin-bottom: .1rem;
						font-size: .28rem;
					}
				}
				.btn-box {
					margin-top: .2rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.btn {
						background-color: yellow;
						width: 48%;
						text-align: center;
						line-height: 1;
						padding: .2rem 0;
						border-radius: .4rem;
						color: #fff;
						font-size: .28rem;
						&.add-shopCar {
							background: linear-gradient(45deg, #ec81e5, #d622c8);
						}
						&.buy {
							background: linear-gradient(45deg, #ff8585, #fd0202);
						}
					}
				}
			}
			
		}
	}
</style>