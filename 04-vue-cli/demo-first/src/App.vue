<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Left></Left>
    <Right></Right>
    <TestLifeCycle msg="我是自定义属性"></TestLifeCycle>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Left from './components/Left.vue'
import PropsTest from './components/Props.vue'
import TestLifeCycle from './components/TestLifeCycle.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Left,
    PropsTest,
    TestLifeCycle
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;

}
</style>
