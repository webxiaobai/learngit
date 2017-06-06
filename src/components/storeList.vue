<template>
  <div class="store">
  	<StoreHeader></StoreHeader>
  	<div class="storeList">
	  	<div id="wrapper">
				<div id="scroller">
					<homeConVue6></homeConVue6>
				</div>
			</div>
  	</div>
		
  </div>
</template>

<script>
<<<<<<< HEAD
	 import StoreHeader from './header/storeHeader'
=======
	 import StoreHeader from './header/storeHeader'
>>>>>>> cffcdfa21565dd716edd0716132c3838991bccf4
	 import homeConVue6 from './content/home_con6'
export default {
  name: 'store',
  components:{
  		StoreHeader,
			homeConVue6
		},
		data(){
			return{
			
			}
			
		},
		mounted:function(){
  			this.homeScroll();
  			console.log(this.myScroll.maxScrollY);
    			this.myScroll.refresh();
  			console.log("执行了store2")
  		},
		methods: {
		  	homeScroll:function(){
	  			this.myScroll = new IScroll('#wrapper', {
					mouseWheel: true,
			      	scrollbars: true,
			      	click:true,
			      	
				});
				console.log("执行了store1")
			}
	  	}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.store{
	width:100%;
	height: 100%;
	overflow: hidden;
}
.storeList{
	position: absolute;
	top: 45px;
	bottom:0;
	width: 100%;
	overflow: hidden;
}
#wrapper{
	position: absolute;
	left: 0; top: 0;
	width: 100%;
	height:100%;
	overflow: hidden;
}
#scroller{
	width:100%;
	left: 0; top: 0;
	position: absolute;
	z-index: 2;
	background: #fff;
}
</style>
