<template>
    <div class="home_containe1">

            <el-container class="home_containe">
              <el-header>
                  <div class="hader">
                      <!-- 左侧盒子 -->
                        <div class="left-box">
                            <img src="../../assets/logo.png" alt="">
                            <div class="title">
                              电商后台管理项目
                            </div>
                        </div>
                      <!-- /左侧盒子 -->
                      <!-- 右侧退出区 -->
                        <div class="right-box">
                          <el-button type="info" @click="loginOut">退出</el-button>
                        </div>
                      <!-- /右侧退出区 -->
                  </div>
              </el-header>
              <!-- 主体区 -->
              <el-container>
                <!-- 左侧侧边栏 -->
                <el-aside width="200px">
                       <el-menu
                          default-active="2"
                          class="el-menu-vertical-demo"
                          @open="handleOpen"
                          @close="handleClose"
                          background-color="#333744"
                          text-color="#fff"
                          active-text-color="#ffd04b">
                          <!-- 第一项 -->
                            <submenu index="1">
                                <template slot="itemIcon">
                                  <i class="el-icon-user-solid"></i>
                                </template>
                                <template slot="stairName">
                                  用户管理
                                </template>
                                <template slot="secondName">
                                  <template >
                                      <i class="el-icon-user-solid"></i>
                                  </template>
                                    <template >
                                      用户列表
                                    </template>
                                </template>
                            </submenu>
                           <!-- 第二项 -->
                            <el-submenu index="2">
                                    <template slot="title">
                                      <i class="el-icon-lock"></i>
                                      <span>权限管理</span>
                                    </template>
                                    <el-menu-item-group>
                                      <el-menu-item index="1-1">
                                          <template slot="title">
                                             <i class="el-icon-unlock"></i>
                                              <span>角色列表</span>
                                          </template>
                                    </el-menu-item>
                                      <el-menu-item index="1-2">
                                         <template slot="title">
                                             <i class="el-icon-unlock"></i>
                                              <span>权限列表</span>
                                          </template>
                                      </el-menu-item>
                                    </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="3">
                                    <template slot="title">
                                      <i class="el-icon-s-goods"></i>
                                      <span>商品管理</span>
                                    </template>
                                    <el-menu-item-group>
                                      <el-menu-item index="1-1">
                                          <template slot="title">
                                             <i class="el-icon-shopping-cart-full"></i>
                                              <span>商品列表</span>
                                          </template>
                                    </el-menu-item>
                                      <el-menu-item index="1-2">
                                         <template slot="title">
                                             <i class="el-icon-shopping-cart-full"></i>
                                              <span>分类参数</span>
                                          </template>
                                      </el-menu-item>
                                      <el-menu-item index="1-3">
                                         <template slot="title">
                                             <i class="el-icon-shopping-cart-full"></i>
                                              <span>商品分类</span>
                                          </template>
                                      </el-menu-item>
                                    </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="4">
                                    <template slot="title">
                                      <i class="el-icon-tickets"></i>
                                      <span>订单管理</span>
                                    </template>
                                    <el-menu-item-group>
                                      <el-menu-item index="1-1">
                                          <template slot="title">
                                             <i class="el-icon-document-checked"></i>
                                              <span>订单列表</span>
                                          </template>
                                    </el-menu-item>
                                     </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="5">
                                    <template slot="title">
                                      <i class="el-icon-data-board"></i>
                                      <span>数据统计</span>
                                    </template>
                                    <el-menu-item-group>
                                      <el-menu-item index="1-1">
                                          <template slot="title">
                                             <i class="el-icon-pie-chart"></i>
                                              <span>数据报表</span>
                                          </template>
                                    </el-menu-item>
                                     </el-menu-item-group>
                            </el-submenu>
                        </el-menu>

                </el-aside>
                 <!-- 左侧侧边栏 -->
                 <!-- 右侧主题区 -->
                <el-main>Main</el-main>
                <!-- 右侧主题区 -->
              </el-container>
              <!-- 主体区 -->
            </el-container>
    </div>

</template>

<script>
import { removeItem } from '@/utils/storeage.js'
export default {

  name: 'homePage',
  data () {
    return {

    }
  },
  methods: {
    // 用户退出
    loginOut () {
      removeItem('name')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='less' scoped>
  .home_containe{
     height: 100vh;

    .hader{
      width: 100%;
      height: 60px;
      background-color: #373d41;
      display: flex;
      align-items: center;
      .left-box{
        display: flex;
        align-items: center;
        img{
          width: 60px;
          height: 60px;
          border-radius: 50%;
          padding: 5px;
          background-color: #fff;
          box-sizing: border-box;
          box-shadow: 0 0 5px 0;
        }
        .title{
          font-size: 30px;
          color: #fff;
        }
      }
      .right-box{
        height: 40px;
        display: flex;
        flex: 1;
        padding-right: 50px;
        justify-content: flex-end;

      }
    }
    .el-aside{
      background-color: #333744;
    }
    .el-main{
      background-color: #eaedf1;
    }
  }
     .el-header{
       width: 100%;
       padding: 0;

  }
  .el-menu-item-group__title{
  padding: 0;
}
</style>
