<template>
	<div class="wrapper">
		<div class="contain">
			
		</div>
		<div class="dots">
			<span class="dot"></span>
			<span class="dot"></span>
			<span class="dot"></span>
			<span class="dot"></span>
			<span class="dot"></span>
			<span class="dot"></span>
		</div>
	</div>
</template>

<script>
export default {
	name:"Home",
	data(){
		return{
			img:[""]
		}
	}
}
</script>

<style lang="stylus" scoped>
	.wrapper
		width 700px
		height 300px
		top 20px
		margin 80px auto
		background red
</style>