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
                          <el-tag style="width:80px"     type="success">
                            {{item.authName}}
                          </el-tag>
                        </el-col>
                        <el-col :span="18">
                          <el-row  :class="[i2 !== 0 ? 'tt-line' :'' , 'valueCenter']"  v-for="(item2,i2) in item.children" :key="item2.id">
                            <el-col :span="6">
                              <el-tag  type="info">{{item2.authName}}</el-tag>
                            </el-col>
                            <el-col :span="18">
                                    <el-tag  v-for="item3 in item2.children" :key="item3.id">{{item3.authName}}</el-tag>
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
                  <template>
                    <el-row :gutter="60">
                      <el-col :span="6"> <el-button icon="el-icon-edit" type="primary" size="small">编辑</el-button></el-col>
                      <el-col :span="6"> <el-button icon="el-icon-delete" type="danger" size="small">删除</el-button></el-col>
                      <el-col :span="12"><el-button icon="el-icon-setting" type="warning" size="small">分配权限</el-button></el-col>
                    </el-row>
                  </template>
                </el-table-column>
            </el-table>
          </el-card>
  </div>
</template>

<script>
import { getRole } from '@/API/role'
export default {
  name: 'rolePage',
  data () {
    return {
      roleList: []
    }
  },
  methods: {
    async getRoleList () {
      const { data } = await getRole()
      console.log(data)
      this.roleList = data.data
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
