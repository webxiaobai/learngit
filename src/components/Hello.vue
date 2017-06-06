<template>
  <div class="hello">
  	<HeaderVue></HeaderVue>
  	<ContentVue></ContentVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HeaderVue from '../components/header/header'
import ContentVue from '../components/content/home_con'
import FooterVue from '../components/footer/footer'
	
export default {
  name: 'hello',
  components: {
  	HeaderVue,
  	ContentVue,
    FooterVue
 },
  data () {
    return {
     
      
    }
  },
  
  methods:{
  
  		
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*@import '../../static/css/index.less';*/

	
</style>
