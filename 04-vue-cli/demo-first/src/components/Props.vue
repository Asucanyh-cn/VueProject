<template>
  <div>props: init={{ init }}</div>
</template>

<script>
export default {
  // props:['init']
  props:{
    init:{
      default:0,
      type:Number,
      required:true
    }
  }
};
</script>
