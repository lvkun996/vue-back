<template>
    <el-submenu index="1">
      <template slot="title">
        <slot name="itemIcon"></slot>
        <slot name="stairName"></slot>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">
            <slot name="secondName"></slot>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>

</style>
