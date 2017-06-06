<<<<<<< HEAD
<template>
	<div class="homeCon">
		<div id="wrapper">
			<div id="scroller">
				<homeConVue1></homeConVue1>
				<homeConVue2></homeConVue2>
				<homeConVue3></homeConVue3>
				<homeConVue4></homeConVue4>
				<homeConVue5></homeConVue5>
				<homeConVue6></homeConVue6>
			</div>
		</div>
	</div>
	
</template>

<script>
//	import '../../../static/js/iscroll.js'
	import homeConVue1 from './home_con1'
	import homeConVue2 from './home_con2'
	import homeConVue3 from './home_con3'
	import homeConVue4 from './home_con4'
	import homeConVue5 from './home_con5'
	import homeConVue6 from './home_con6'
	export default{
		name: 'homeCon',
		components:{
			homeConVue1,
			homeConVue2,
			homeConVue3,
			homeConVue4,
			homeConVue5,
			homeConVue6
		},
		data(){
			return{
				myScroll:'1'
			}
			
		},
		mounted:function(){
  			this.homeScroll();
  			console.log(this.myScroll.maxScrollY);
    			this.myScroll.refresh();
  			console.log("执行了2")
  		},
		methods: {
		  	homeScroll:function(){
	  			this.myScroll = new IScroll('#wrapper', {
					mouseWheel: true,
			      	scrollbars: true,
			      	click:true,
			      	
				});
				console.log("执行了1")
			}
	  	}
	}
	
</script>

<style lang="less">
@defaultColor: #fff;
.homeCon{
	position: absolute;
	top: 112px;
	bottom: 75px;
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
=======
<template>
	<div class="homeCon">
		<div id="wrapper">
			<div id="scroller">
				<homeConVue1></homeConVue1>
				<homeConVue2></homeConVue2>
				<homeConVue3></homeConVue3>
				<homeConVue4></homeConVue4>
				<homeConVue5></homeConVue5>
				<homeConVue6></homeConVue6>
			</div>
		</div>
	</div>
	
</template>

<script>
//	import '../../../static/js/iscroll.js'
	import homeConVue1 from './home_con1'
	import homeConVue2 from './home_con2'
	import homeConVue3 from './home_con3'
	import homeConVue4 from './home_con4'
	import homeConVue5 from './home_con5'
	import homeConVue6 from './home_con6'
	export default{
		name: 'homeCon',
		components:{
			homeConVue1,
			homeConVue2,
			homeConVue3,
			homeConVue4,
			homeConVue5,
			homeConVue6
		},
		data(){
			return{
				myScroll:'1'
			}
			
		},
		mounted:function(){
  			this.homeScroll();
  			console.log(this.myScroll.maxScrollY);
    			this.myScroll.refresh();
  			console.log("执行了2")
  		},
		methods: {
		  	homeScroll:function(){
	  			this.myScroll = new IScroll('#wrapper', {
					mouseWheel: true,
			      	scrollbars: true,
			      	click:true,
			      	
				});
				console.log("执行了1")
			}
	  	}
	}
	
</script>

<style lang="less">
@defaultColor: #fff;
.homeCon{
	position: absolute;
	top: 112px;
	bottom: 75px;
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
>>>>>>> cffcdfa21565dd716edd0716132c3838991bccf4
</style>