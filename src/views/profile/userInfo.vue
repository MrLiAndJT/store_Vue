<template>
	<router-link class="section" :to="isLogin ? '/user' : '/login' " tag="div">
		<div class="user-container">
			<!-- 用户头像 及 信息 -->
			<div class="user">
				<div class="user-img">
					
				</div>
				<div class="user-info">
					<div class="user-name">
						{{isLogin ? '您已登录' : '请登录' }}
					</div>
					<div class="user-intro">
						这个人没有起任何简介
					</div>
				</div>
			</div>
			
			<div class="more">
				<i class="fa fa-angle-right"></i>
			</div>
		</div>
	</router-link>
</template>

<script>
	export default {
		data () {
			return {
				isLogin: false,
				test: 10,
			}
		},
		computed: {
			token() {
				return this.$store.state.userToken;
			}
		},
		watch: {
			// 因为在 login 的时候改变 $store 的值，而此页面此时如果没用 <keep-alive> 标签包裹住，则被销毁了，就无法监听 $store 的变化，切换到此页面的时候，只会取这个页面的值(取值，但是没有监听到变化) ；如果不想用 <keep-alive> 标签包裹住此页面，则在 create 生命周期里提取 store里的值来判断是否登录
			token (newVal, oldVal) {
				if(newVal) {
					// 如果 this.$store.state.userToken 有值了，则代表登录了
					this.isLogin = true;
				}else {
					this.isLogin = false;
					this.$route.meta.isLogin = true;
				}
			}
		},
	}
</script>

<style lang="less" scoped>
	.user-container {
		display: flex;
		border-bottom: 1px solid #e8e8e8;
    	padding-bottom: .2rem;
		.more {
			display: flex;
			align-items: center;
			font-size: .6rem;
    		color: #777;
		}
		.user {
			display: flex;
			align-items: center;
			flex: 1;
			.user-img {
				width: 1.2rem;
				height: 1.2rem;
				margin-right: .2rem;
				background-image: url(~assets/user.jpg);
				background-position: center;
				background-size: cover;
				border-radius: 50%;
			}
			.user-info {
				.user-name {
				    font-size: .32rem;
					color: #333;
					margin-bottom: .1rem;
				}
				.user-intro {
					font-size: .24rem;
					color: #777;
				}
			}
		}
	}
</style>