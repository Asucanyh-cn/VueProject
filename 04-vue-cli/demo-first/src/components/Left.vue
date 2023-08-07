<template>
  <div class="left">
    <p>我是左组件</p>
    <Props :init="15"></Props>
  </div>
</template>

<style>
.left {
  border: 1px solid;    
  float: left;
  padding: 10px;
}
</style>
