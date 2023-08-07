<template>
    <div class="right">
        <p>我是右组件</p>
        <Props :init="10"></Props>
    </div>
</template>


<style>
    .right{
        border: 1px solid;
        float: right;
        padding: 10px;
    }
</style>