<template>
	<router-link class="tabbar-item"
	tag="div"
	:to="intro.to"
	:style="isActive ? `color: ${activeColor};` : `color: ${color};`">

		<i :class="'fa ' + intro.icon"></i>
		<div class="nav-name">{{intro.text}}</div>

	</router-link>
</template>

<script>
	export default {
		name: 'tabbarItem',
		data () {
			return {
				
			}
		},
		props: {
			intro: Object,
			color: {
				type: String,
				default: '#333'
			},
			activeColor: {
				type: String,
				default: '#ca3b3b'
			}
		},
		computed: {
			isActive: {
				get () {
					return this.$route.path.indexOf(this.intro.to) != -1;
				},
				set () {
					return this.$route.path.indexOf(this.intro.to) != -1;
				}
			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.tabbar-item {
		&.active {
			color: #f40;
		}
		text-align: center;
		.fa {
			font-size: .4rem;
		}
		.nav-name {
			font-size: .24rem;
		}
	}
</style>