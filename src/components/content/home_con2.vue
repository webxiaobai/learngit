<template>
	
  	<div class="con2">
  		<img class="banner" :src="bannerSrc"/>
  	</div>
  		
  
</template>

<script>
	export default{
		data(){
			return {
				bannerSrc:'../../../static/img/con2_banner1.png'
			}
		}
	}
</script>

<style scoped="scoped">
	.con2{
		width: 100%;
		overflow: hidden;
		background-color: #fff;
		height: 106px;
	}
	.banner{
		width: 96%;
		margin-top: 10px;
	}
</style>