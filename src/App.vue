<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body{
	margin: 0;
	padding: 0;
	height: 100%;
}
body{
	background-color: #f5f5f5;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	padding:0;
	margin: 0;
}
ul,li,dl,dd,ol{
	list-style: none;
	padding: 0;
	margin: 0;
}
a{
	text-decoration: none;
}
</style>
