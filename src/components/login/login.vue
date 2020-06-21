<template>
	<div class="">
		<!-- <el-button plain class="tips">可自动关闭</el-button> -->
			
		<!-- 登录头部 -->
		<navigator-title :title="'登录'"></navigator-title>

		<div class="section">
			<div class="logo-box">
			<div class="logo"></div>
			</div>
			<el-input
				type="text"
				placeholder="请输入手机号"
				maxLength="11"
				v-model="phone"
				autocomplete="on"
			>
			</el-input>
			
			<el-input
				type="text"
				placeholder="请输入密码"
				v-model="password"
				show-password
			>
			</el-input>

			<router-link class="register" tag="div" to="/register">免费注册</router-link>
			
			<el-button 
				type="primary" 
				@click="login"
				round
			>
				登录
			</el-button>
		</div>

	</div>
</template>

<script>
	import navigatorTitle from '@/components/navigator/navigator.vue';
	export default {
		data () {
			return {
				phone: null,
				password: ''
			}
		},
		methods: {
			login() {
				let flagPhone = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(this.phone);

				if(!flagPhone) {
					return this.warnMessage('请输入正确的11位手机号');
				}
				let obj = {
					phone: this.phone,
					password: this.password
				}
				// http://www.phpillusion.xyz/api/auth/login
				this.axios.post('http://www.phpillusion.xyz/api/login', obj)
					.then((data) => {
						if(data.data.message == '登陆成功') {
							// 登陆成功
							let token = data.data.data.token;		// 用户的token码，唯一的
							this.$store.commit('saveUserToken', token);
							window.localStorage.setItem('isLogin', true);

							// 获取购物车的数据: 登录成功，把购物车的数据从数据库中取出
							this.$store.dispatch('getShopCarList');

							this.$message({
								message: '登陆成功',
								type: 'success',
								center: true,
								duration: 1000
							});
							this.$router.go(-1);	// 登录成功，返回上一级页面
						}
					})


			},
			pleaseLogin () {
				const h = this.$createElement;
				this.$notify({
					title: '',
					message: h('i', {style: 'color: teal'}, '请先登录'),
					duration: '1000'
				});
			},
			warnMessage (message) {
				return this.$message({
					message: message,
					type: 'warning',
					center: true
				});
			},
		},
		mounted () {
			
		},
		created () {
			
		},
		components: {
			navigatorTitle
		},
	}
</script>

<style lang="less" scoped>
	.section {
		padding: 0 .2rem;
	}
	.tips {
		display: none;
	}
	.logo-box {
		margin-top: 1.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		.logo {
			width: 1.5rem;
			height: 1.5rem;
			background-color: skyblue;
			border-radius: 50%;
			background-image: url(~assets/user.jpg);
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
		}
	}
	.register {
		text-align: right;
	    font-size: .3rem;
	    color: #999;
	    margin: .3rem 0;
	}
	.el-input {
		margin-top: .5rem;
	}
	.el-button {
		width: 100%;
	}
</style>
