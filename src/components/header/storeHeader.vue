<<<<<<< HEAD
<template>
	<div class="storeHeader">
		<div class="storeWap">
			<span class="arrowBack" v-on:click="back">&lt;</span>
			<span>美食广场</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			back:function(){
				 $router.back(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	.storeHeader{
		width: 100%;
		height: 45px;
		position: relative;
	}
	.arrowBack{
		position: absolute;
		left: 15px;
	}
	.storeWap{
		width: 100%;
		height: 45px;
		background-color: #0096ff;
		color: #fff;
		font-size: 16px;
		line-height: 45px;
			
	}
=======
<template>
	<div class="storeHeader">
		<div class="storeWap">
			<span class="arrowBack" v-on:click="back">&lt;</span>
			<span>美食广场</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			back:function(){
				 $router.back(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	.storeHeader{
		width: 100%;
		height: 45px;
		position: relative;
	}
	.arrowBack{
		position: absolute;
		left: 15px;
	}
	.storeWap{
		width: 100%;
		height: 45px;
		background-color: #0096ff;
		color: #fff;
		font-size: 16px;
		line-height: 45px;
			
	}
>>>>>>> cffcdfa21565dd716edd0716132c3838991bccf4
</style>