<template>
	<div class="wrapper">
		<div class="arrow">
			<div class="left" @click="move(1)"></div>
			<div class="right" @click="move(-1)"></div>
		</div>
		<div class="contain">
			<div class="show" :style="containStyle">
				<li>
					<img src="../../static/img/5.jpg" alt="">
				</li>
				<li v-for="(item,index) in img" :key="index">
					<img :src="item" alt="">
				</li>
				<li>
					<img src="../../static/img/1.jpg" alt="">
				</li>
			</div>
		</div>
		<div class="dots">
			<span 
				v-for="(dots,i) in img"
				:key="i"
				:class="{dotted: i === (currentIndex-1)}"
				class="dot"
			>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name:"Home",
	data(){
		return{
			img:["../../static/img/1.jpg","../../static/img/2.jpg","../../static/img/3.jpg","../../static/img/4.jpg","../../static/img/5.jpg"],
			distance:-100,
			currentIndex:1
		}
	},
	computed:{
		containStyle(){
			return{
				left:`${this.distance}%`
			}
		}
	},
	methods:{
		move(direct){
			direct == -1 ? this.currentIndex++ : this.currentIndex--
			console.log(this.currentIndex)
			this.distance += direct*100
			if(this.distance<-500)this.distance=-100;this.currentIndex=1
			if(this.distance>-100)this.distance=-500;this.currentIndex=5
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '../../static/css/main.styl'
</style> 