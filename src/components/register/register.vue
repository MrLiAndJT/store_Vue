<template>
	<div class="wrapper">
		<!-- 注册头部 -->
		<navigator-title :title="'注册'"></navigator-title>

		<div class="section">
			<div class="title">欢迎注册</div>
				<el-input
					type="text"
					placeholder="请输入11位手机号"
					v-model="phone"
					maxlength="11"
					show-word-limit
					class="input"
				>
				</el-input>
				<el-input
					type="text"
					placeholder="请输入用户名"
					v-model="username"
					maxlength="8"
					show-word-limit
					class="input"
				>
				</el-input>
				<el-input
					type="text"
					placeholder="请输入电子邮件"
					v-model="email"
					class="input"
				>
				</el-input>
				<el-input
					type="text"
					placeholder="请输入密码 (长度为6-32)"
					v-model="password"
					minLength="8"
					maxlength="32"
					show-word-limit
					show-password
					class="input"
				>
				</el-input>

				<router-link class="login" tag="div" to="/login">登录</router-link>
				<el-button 
					type="primary" 
					@click="register"
					round
					class="register"
				>
					注册
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
				username: '',
				password: '',
				email: '',
			}
		},
		methods: {
			register () {
				// 匹配手机号 (只要是13,14,15,16,17,18,19开头即可)
				let flagPhone = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(this.phone);

				// 匹配用户名 (只能包括字母，数字，减号和下划线)
				let flagUsername = /^[a-zA-Z0-9_-]{1,12}$/.test(this.username);

				// 匹配电子邮件
				let flagEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.email);

				// 匹配密码 (只能包括字母，数字，减号和下划线)
				let flagPassworld = /^[a-zA-Z0-9_-]{6,32}$/.test(this.password);

				if(!flagPhone) {
					return this.warnMessage('请输入正确的手机号');
				}

				if(!flagUsername) {
					return this.warnMessage('用户名只能包括字母，数字，减号和下划线');
				}

				if(!flagEmail) {
					return this.warnMessage('请输入正确的邮箱地址');
				}

				if(!flagPassworld) {
					return this.warnMessage('密码只能包括字母，数字，减号和下划线');
				}

				// 把手机号，用户名等等参数塞到这个对象，再把对象返回给后端
				let dataObj = {
					phone: this.phone,
					name: this.username,
					password: this.password,
					email: this.email
				}
				// 如果以上都没问题，则前端验证成功，可以把数据提交给后端进行再次验证
				this.axios.post('http://www.phpillusion.xyz/api/auth/register', dataObj)
					.then((data) => {
						if(data.status != 200) {
							// 如果状态码不为 200 ,则请求失败
							return this.warnMessage('抱歉，注册失败，请重试');
						}
						let obj = {};
						obj = JSON.parse(data.config.data);		// 把电话，邮箱，密码，用户名保存起来
						obj.token = data.data.data.token;	// 把token也保存到用户信息对象中
						this.$store.commit('saveUserInfo', obj);
					}, (data) => {
						
					});

			},
			warnMessage (message) {
				return this.$message({
					message: message,
					type: 'warning',
					center: true
				});
			}
		},
		components: {
			navigatorTitle
		},
	}
</script>

<style lang="less" scoped>
	.wrapper {
		margin-top: .8rem;
		.title {
		    margin-top: 1rem;
		    font-size: .6rem;
		    text-align: center;
		}
		.login {
			text-align: right;
		    font-size: .3rem;
		    color: #999;
		    margin: .3rem 0;
		}
		.input {
			margin-top: .2rem;
		}
		.register {
			width: 100%;
		}
	}
</style>