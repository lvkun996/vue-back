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
                <el-aside :width="collapse?'64px':'200px'" >
                    <div class="flex_box" @click="collapse = !collapse">|||</div>
                       <el-menu
                          class="el-menu-vertical-demo"
                          background-color="#333744"
                          text-color="#fff"
                          active-text-color="rgb(64, 158, 255)"
                          :default-active="indexStatus"
                          unique-opened
                          :collapse="collapse"
                          :collapse-transition='false'
                          router
                          >
                            <el-submenu :index="item.id + ''" v-for="item in menuLits" :key="item.id">
                                    <template slot="title">
                                      <i :class="icons[item.id]"></i>
                                      <span>{{item.authName}}</span>
                                    </template>
                                    <el-menu-item-group>
                                      <el-menu-item :index="'/'+children.path" v-for="children in item.children" :key="children.id"
                                        @click="indexStatus = '/'+children.path"
                                      >
                                          <template slot="title">
                                             <i class="el-icon-menu"></i>
                                              <span>{{children.authName}}</span>
                                          </template>
                                      </el-menu-item>
                                    </el-menu-item-group>
                            </el-submenu>
                        </el-menu>

                </el-aside>
                 <!-- 左侧侧边栏 -->
                 <!-- 右侧主题区 -->
                <el-main>
                  <router-view></router-view>
                </el-main>
                <!-- 右侧主题区 -->
              </el-container>
              <!-- 主体区 -->
            </el-container>
    </div>

</template>

<script>
import { removeItem } from '@/utils/storeage.js'

import { getMenu } from '@/API/jurisdiction'
export default {

  name: 'homePage',
  data () {
    return {
      menuLits: [],
      icons: {
        125: 'el-icon-user-solid',
        103: 'el-icon-lock',
        101: 'el-icon-s-goods',
        102: 'el-icon-tickets',
        145: 'el-icon-data-board'
      },
      collapse: false,
      indexStatus: ''
    }
  },
  methods: {
    // 用户退出
    loginOut () {
      removeItem('name')
      this.$router.push('/login')
    },
    // 获取所有的菜单
    async getMenuAll () {
      const { data } = await getMenu()
      console.log(data)
      this.menuLits = data.data
    }
  },
  created () {
    this.getMenuAll()
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
.flex_box{
  height: 30px;
  text-align: center;
  background-color: #4a5064;
  color: #fff;
  line-height: 30px;
  letter-spacing: 0.2em;
  cursor: pointer;
}
.el-menu{
  border: 0;
}
 /deep/ .el-menu-item-group__title{
  padding: 0;
}
</style>
