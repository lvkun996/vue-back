<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>  <slot name="stairTitle"> </slot> </el-breadcrumb-item>
    <el-breadcrumb-item>  <slot name="secondTitle"> </slot> </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style lang="less" >
.el-breadcrumb{
  margin-bottom: 30px;
}

</style>
