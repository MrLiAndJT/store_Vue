<template>
	<router-link class="section" to="user" tag="div">
		<div class="user-container">
			<!-- 用户头像 及 信息 -->
			<div class="user">
				<div class="user-img">
					
				</div>
				<div class="user-info">
					<div class="user-name">
						请登录
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
	import { mapState } from 'vuex';
	export default {
		data () {
			return {
				isLogin: false,
				test: 10,
			}
		},
		computed: {
			token() {
				return this.$store.state.loginToken;
			}
		},
		watch: {
			token (newVal, oldVal) {
				console.log(newVal)
				if(newVal) {
					// 如果 newVal 为 null， 则代表还没登录
					this.isLogin = false;
				}else {
					// 如果 newVal 有值了，则代表已经登录了
					this.isLogin = true;
				}
			},
		}
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