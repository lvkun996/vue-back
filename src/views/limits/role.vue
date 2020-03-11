<template>
  <div class="limits_container">
          <breadcrumb>
              <template slot="stairTitle">权限管理 </template>
              <template slot="secondTitle"> 角色列表</template>
          </breadcrumb>
          <el-card>
            <el-row>
                <el-col :span="6"> <el-button type="primary">添加角色</el-button></el-col>
            </el-row>
            <el-table border :data="roleList">
                  <el-table-column  type="expand" width="50px">
                    <template slot-scope="props">
                      <el-row type="flex" justify="end" :gutter="60"  :class="['bb-line','valueCenter'  ]" v-for="item in props.row.children" :key="item.id">
                        <el-col   :span="6"   >
                          <el-tag   @close="OnDeleteUser(props.row ,item.id)" closable    type="success">
                            {{item.authName}}
                          </el-tag>
                          <i class="el-icon-caret-right"></i>
                        </el-col>
                        <el-col :span="18">
                          <el-row  :class="[i2 !== 0 ? 'tt-line' :'' , 'valueCenter']"  v-for="(item2,i2) in item.children" :key="item2.id">
                            <el-col :span="6">
                              <el-tag  @close="OnDeleteUser(props.row ,item2.id)" closable type="info">{{item2.authName}}</el-tag><i class="el-icon-caret-right"></i>
                            </el-col>
                            <el-col :span="18">
                                    <el-tag  @close="OnDeleteUser(props.row ,item3.id)"  closable v-for="item3 in item2.children" :key="item3.id">{{item3.authName}}</el-tag>
                            </el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </template>
                  </el-table-column>
                <el-table-column type="index" label="#" width="50px"></el-table-column>
                <el-table-column  prop="roleDesc" label="角色名称"></el-table-column>
                <el-table-column  prop="roleName" label="角色描述"></el-table-column>
                <el-table-column label="角色操作">
                  <template  slot-scope="props">
                    <el-row :gutter="60">
                      <el-col :span="6"> <el-button icon="el-icon-edit" type="primary" size="small">编辑</el-button></el-col>
                      <el-col :span="6"> <el-button icon="el-icon-delete" type="danger" size="small">删除</el-button></el-col>
                      <el-col :span="12"><el-button icon="el-icon-setting" type="warning" size="small" @click="OnGetRights(props.row)">分配权限</el-button></el-col>
                    </el-row>
                  </template>
                </el-table-column>
            </el-table>
          </el-card>
          <el-dialog title="分配权限" :visible.sync="dialogVisible" @close="OncancelRole">
            <el-tree
              :data="authDIst"
              :props="treeNode"
              show-checkbox
              default-expand-all
              node-key="id"
              :default-checked-keys="defaultArr"
              ref="myTree"
              >

            </el-tree>
            <span slot="footer" class="dialog-footer">
              <el-button @click="OncancelRole">取 消</el-button>
              <el-button type="primary" @click="OnAllocation">确 定</el-button>
            </span>
          </el-dialog>
          <!--     @check-change="handleCheckChange"> -->
  </div>
</template>

<script>
import { getRole, deleteRole, getRights, roleAccredit } from '@/API/role'

export default {
  name: 'rolePage',
  data () {
    return {
      roleList: [],
      dialogVisible: false,
      treeNode: {
        children: 'children',
        label: 'authName'
      },
      authDIst: [],
      defaultArr: [],
      id: ''
    }
  },
  watch: {

  },

  methods: {
    //  分配权限列表
    async OnAllocation () {
      this.dialogVisible = false
      const keys = [
        ...this.$refs.myTree.getHalfCheckedKeys(),
        ...this.$refs.myTree.getCheckedKeys()
      ]
      const rids = keys.join(',')
      await roleAccredit({ roleId: this.id, rids })
      try {
        this.getRoleList()
        this.$message.success('分配权限成功')
      } catch (error) {
        this.$message.error('分配权限失败')
      }
    },
    // 关闭权限列表
    OncancelRole () {
      this.dialogVisible = false
      this.defaultArr = []
    },
    // 获取权限列表
    async OnGetRights (value) {
      this.dialogVisible = true
      const { data } = await getRights({ type: 'tree' })
      this.id = value.id
      try {
        this.authDIst = data.data
        this.treeId(value, this.defaultArr)
      } catch (error) {
        this.$message.error('获取失败')
      }
    },
    // 删除用户指定权限
    async OnDeleteUser (roleid, rightid) {
      const { data } = await deleteRole({ roleid: roleid.id, rightid })

      try {
        this.$message.success('删除成功')
        roleid.children = data.data
        // this.getRoleList()
      } catch (error) {
        this.$message.fail('删除失败')
      }
    },
    // 获取用户列表
    async getRoleList () {
      const { data } = await getRole()
      this.roleList = data.data
    }

    // 对权限树进行递归
    // treeId (node, arr) {
    //   if (!node.children) {
    //     return arr.push(node.id)
    //   }
    //   node.children.forEach(item => {
    //     this.treeId(item, arr)
    //   })
    // }
  },
  computed: {
    treeId () {
      return function fn (node, arr) {
        if (!node.children) {
          return arr.push(node.id)
        }
        node.children.forEach(item => {
          this.treeId(item, arr)
        })
      }
    }
  },
  created () {
    this.getRoleList()
  }
}
</script>

<style lang='less'  scoped>
.bb-line{
  border-bottom: 1px solid #ccc;
}
.tt-line{
  border-top:1px solid #ccc ;
}
.el-tag{
  margin: 7px;
}
.valueCenter{
  display: flex;
  align-items: center;
}
</style>
