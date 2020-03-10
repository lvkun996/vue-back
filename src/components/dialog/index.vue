<template>
    <el-dialog  title="修改用户信息" width="50%" center :visible.sync="dialogStatus">
        <el-form label-width="100px">
            <el-form-item label="用户名">
                <el-input disabled v-model="editUser.username"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="editUser.email"></el-input>
            </el-form-item >
            <el-form-item label="手机">
                <el-input v-model="editUser.mobile"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogStatus = false">取 消</el-button>
            <el-button type="primary" @click="confirmEdit">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {

}
</script>

<style>

</style>
