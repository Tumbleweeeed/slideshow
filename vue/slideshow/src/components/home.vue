<template>
	<div class="wrapper">
		<div class="arrow">
			<div class="left"></div>
			<div class="right"></div>
		</div>
		<div class="contain">
			<div class="show">
				<li>
					<img src="../../static/img/5.jpg" alt="">
				</li>
				<li v-for="item in img" :key="index">
					<img :src="item" alt="">
				</li>
				<li>
					<img src="../../static/img/1.jpg" alt="">
				</li>
			</div>
		</div>
		<div class="dots">
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
			img:["../../static/img/1.jpg","../../static/img/2.jpg","../../static/img/3.jpg","../../static/img/4.jpg","../../static/img/5.jpg"]
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '../../static/css/main.styl'
</style> 