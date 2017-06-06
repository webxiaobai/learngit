<template>
	<div class="footer">
  		<router-link class="nav1" :to="{ name: 'Hello', params: { helloId: ajaxHello }}">
  			<div class="wrap" v-on:click="clickMe">
  				<span class="iconfont icon-zhuanzhang footerFontSize footerPos"></span>
  				<div>外卖</div>
  			</div>
  		</router-link>
  		<router-link class="nav1" :to="{ name: 'Hello', params: { helloId: ajaxHello }}">
  			<div class="wrap">
  				<span class="iconfont icon-chaibaoguoqujian footerFontSize footerPos"></span>
  				<div>发现</div>
  			</div>
  		</router-link>
    	<router-link class="nav1" :to="{ name: 'storeList', params: { storeId: ajaxWorld }}">
    		<div class="wrap">
  				<span class="iconfont icon-kuaidi footerFontSize footerPos"></span>
  				<div>订单</div>
  			</div>
    		
    	</router-link>
    	<router-link class="nav1" :to="{ name: 'shopList', params:{ listId: ajaxlist }}">
    		<div class="wrap">
  				<span class="iconfont icon-wode footerFontSize footerPos"></span>
  				<div>我的</div>
  			</div>
    	</router-link>
  	</div>
</template>

<script>
	export default {
  name: 'footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ajaxHello:101,
      ajaxWorld:102,
      ajaxlist:103
    }
  },
  methods:{
  	clickMe:function(){
  		
  	}
  }
}
</script>

<style scoped>
	.footer{
	position:fixed;
	width: 100%;
	height: 75px;
	bottom: 0;
	background: #fff;
	color: #666666;
	font-size: 0;
				
}
a{
	color: #666666;
	text-decoration: none;
}
a:hover{
	
}
.nav1{
	width: 25%;
	display: inline-block;
	font-size: 16px;
	overflow: hidden;
	
}
.footerFontSize{
	font-size:30px;
}
.footerPos{
	position: relative;
	top: 5px;
}
</style>