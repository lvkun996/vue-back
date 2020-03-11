<template>
  <div class="userlist_container">
    <breadcrumb>
        <template slot="stairTitle">用户管理 </template>
        <template slot="secondTitle"> 用户列表</template>
    </breadcrumb>
    <div class="crad">
        <el-card>
            <div class="input">
                <el-input placeholder="请输入内容" v-model="searchText" >
                    <el-button slot="append" icon="el-icon-search" @click="onSearch"></el-button>
                </el-input>
                <el-button type="primary">添加用户</el-button>
            </div>
            <div class="info">
                 <el-table :data="userList"   border   style="width: 100%">
                    <el-table-column   type="index" label="#"> </el-table-column>
                    <el-table-column   prop="username"   label="姓名"   width="180">  </el-table-column>
                    <el-table-column   prop="email"  label="邮箱">  </el-table-column>
                    <el-table-column   prop="mobile"  label="电话">  </el-table-column>
                    <el-table-column   prop="role_name"  label="角色">  </el-table-column>
                    <el-table-column   prop="mg_state"  label="状态">
                        <template slot-scope="scope">
                            <el-switch v-model="scope.row.mg_state" active-color="#13ce66"  inactive-color="#ff4949" @change="changeStatus(scope.row)"></el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column   label="操作">
                        <template slot-scope="scope">
                            <el-button icon="el-icon-edit" type="primary" size="small" @click="onEdit(scope.row)"></el-button>
                            <el-button icon="el-icon-delete" type="danger" size="small" @click="deleteUser(scope.row)"></el-button>
                            <el-button icon="el-icon-setting" type="warning" size="small" @click="OnRoleUser(scope.row)"></el-button>
                        </template>
                     </el-table-column>
                </el-table>
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
                    <el-dialog title="分配用户权限" width="30%" center :visible.sync="dialogStatusRole">
                      <el-form label-width="100px">
                        <el-form-item label="当前用户">
                                <el-input disabled v-model="roleUser.username"></el-input>
                        </el-form-item>
                        <el-form-item label="当前的角色">
                                <el-input disabled v-model="roleUser.role_name"></el-input>
                        </el-form-item>
                        <el-form-item label="分配新角色">

                           <el-select v-model="roleUser.rid" placeholder="请选择">
                              <el-option
                                v-for="item in allocationList"
                                :key="item.id"
                                :label="item.roleName"
                                :value="item.id">
                              </el-option>
                            </el-select>
                        </el-form-item>
                      </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="OncalcelRole">取 消</el-button>
                            <el-button type="primary" @click="allocationRole">确 定</el-button>
                        </span>
                    </el-dialog>
                   <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="q.pagenum"
                        :page-sizes="[2, 5, 10, 20]"
                        :page-size="q.pagesize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="page.total">
                    </el-pagination>
            </div>
        </el-card>
    </div>
  </div>
</template>

<script>
import { getUserList, putUserStatus, searchUser, editUserInfo, deleteUser, roleUser, getRoleList } from '@/API/user'
export default {
  name: 'userlistPage',
  data () {
    return {
      q: {
        query: '',
        pagenum: 1,
        pagesize: 5
      },
      userList: [],
      page: {
        total: '',
        pagenum: ''
      },
      searchText: '',
      dialogStatus: false,
      editUser: {
        username: '',
        email: '',
        mobile: ''
      },
      dialogStatusRole: false,
      roleUser: {
        username: '',
        role_name: '',
        rid: ''
      },
      // 角色id
      id: '',
      // 角色列表
      allocationList: []
    }
  },
  watch: {
    searchText: {
      handler () {
        if (this.searchText.length === 0) {
          this.getUser()
        }
      }
    }
    // userList: {
    //   handler () {
    //     this.getUser()
    //   }
    // }
  },
  methods: {
    // 取消分配权限
    OncalcelRole () {
      this.dialogStatusRole = false
      this.roleUser.rid = null
    },
    // 确定分配用户权限
    async  allocationRole () {
      const { data } = await roleUser({ id: this.id, rid: this.roleUser.rid })
      console.log(data)
      try {
        this.getUser()
        this.$message.success(data.meta.msg)
        this.dialogStatusRole = false
        this.roleUser.rid = null
      } catch (error) {
        this.$message.error(data.meta.msg)
      }
    },
    // 分配用户
    async OnRoleUser (value) {
      this.dialogStatusRole = true
      this.id = value.id
      console.log(value)
      this.roleUser.username = value.username
      this.roleUser.role_name = value.role_name

      const { data: res } = await getRoleList()
      console.log(res)
      this.allocationList = res.data
      // const { id, role_name: rid } = value
      // const { data } = await roleUser({ id, rid })
      // console.log(data)
    },
    // 删除用户
    async  deleteUser (value) {
      const { id } = value
      await this.$messageBox({ title: '确定删除此项么' })

      try {
        const { data } = await deleteUser({ id })
        console.log(data)
        if (this.userList.indexOf(value) !== -1) {
          this.userList.splice(this.userList.indexOf(value), 1)
        }
        this.$message.success(data.meta.msg)
      } catch (error) {

      }
    },
    //   编辑用户信息
    async confirmEdit () {
      this.dialogStatus = false
      const { data } = await editUserInfo(this.editUser)
      console.log(data)
    },
    //   打开dialog弹窗
    async onEdit (value) {
      this.dialogStatus = true
      this.editUser.username = value.username
      this.editUser.email = value.email
      this.editUser.mobile = value.mobile
      this.editUser.id = value.id
    },
    //   搜索用户
    async onSearch () {
      const { data } = await searchUser({ id: this.searchText })
      try {
        this.userList = []
        this.userList.push(data.data)
        if (data.meta.status === 400) this.$message(data.meta.msg.message)
      } catch (error) {
        // this.$message.fail(data.meta.message)
      }
    },
    //   修改用户状态
    async changeStatus (value) {
      const { id, mg_state: type } = value

      const { data } = await putUserStatus({ id, type })

      this.$message.success(data.meta.msg)
    },
    //   每页条数改变
    async handleSizeChange (value) {
      this.q.pagesize = value
      await this.getUser()
    },
    //   页码改变
    handleCurrentChange (value) {
      this.q.pagenum = value
      this.getUser()
    },
    //   获取用户信息
    async getUser () {
      const { data } = await getUserList(this.q)
      this.page.total = data.data.total
      this.page.pagenum = data.data.pagenum

      this.userList = data.data.users
    }
  },
  created () {
    this.getUser()
  }
}
</script>

<style lang='less' scoped>
.userlist_container{
    .crad{
        padding: 10px;
        .input{
            width: 40%;
            display: flex;
            justify-content: space-between;
            .el-input{
                margin-right: 30px;
            }
        }
        .el-pagination{
            margin-top: 15px;
        }
    }
}
</style>
