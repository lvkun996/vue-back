<template>
    <div class="login_container">
        我是登录页
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="attr_img">
                <img src="../../assets/logo.png" alt="">
            </div>
            <!-- /头像区域 -->
            <!-- 表单区域 -->
            <el-form class="myForm">
                <el-form-item>
                    <el-input v-model="user.name" prefix-icon="el-icon-user-solid">11</el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="user.password" show-password prefix-icon="el-icon-lock">11</el-input>
                </el-form-item>
                <!-- 登录区域 -->
                <el-form-item style="display:flex;justify-content:flex-end">
                    <el-button type="primary">登录</el-button>
                    <el-button type="info">重置</el-button>
                </el-form-item>
                <!-- /登录区域 -->
            </el-form>
            <!-- 表单区域 -->

        </div>
    </div>
</template>

<script>
export default {
  name: 'loginPage',
  data () {
    return {
      user: {
        name: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login_container{
    width: 100%;
    height: 100vh;
    background: url('../../assets/loginBg.jpg');
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    .login_box{
        width: 450px;
        height: 300px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        .attr_img{
            width: 130px;
            height: 130px;
            border:3px solid #eee;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: #fff;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #eee;
            }
        }
    }
    .myForm{
        margin-top:100px;
        padding: 0 20px;
    }
}
</style>
