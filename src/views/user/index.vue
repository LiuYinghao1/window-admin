<template>
  <div>
    <breadcrumb></breadcrumb>
    <div class="search">
      <el-input placeholder="请输入内容"></el-input>
      <el-button type="success"><i class="el-icon-search"></i>查询</el-button>

      <el-button
        type="primary"
        icon="el-icon-edit"
        @click="addFormVisible = true"
        >新增</el-button
      >
    </div>

    <!-- 表格 -->
    <div class="tab">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" label="序号" width="80" align="center">
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户名"
          width="100"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="avatar" label="头像" align="center" width="120">
          <template slot-scope="scope">
            <el-avatar
              style="width: 80px; height: 80px"
              :src="scope.row.avatar"
            ></el-avatar>
          </template>
        </el-table-column>
        <el-table-column prop="roles" label="角色" align="center">
          <template slot-scope="scope">
            <template v-for="(item, index) in scope.row.roles">
              <el-tag :key="index">{{ item.name }}</el-tag>
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="email" label="邮箱" align="center">
        </el-table-column>
        <el-table-column prop="createTime" label="注册时间" align="center">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="80" align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              :active-value="0"
              :inactive-value="1"
              active-color="#13ce66"
              inactive-color="#3390ff"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
          <template>
            <el-tag type="success">编辑</el-tag>
            <el-tag type="warning">分配角色</el-tag>
            <el-tag type="danger">删除</el-tag>
          </template>
        </el-table-column>
      </el-table>

      <!-- 新增弹出框 -->
      <el-dialog title="新增用户" :visible.sync="addFormVisible" width="450px">
        <el-form
          :model="addUserForm"
          label-position="right"
          label-width="100px"
        >
          <el-form-item label="头像"> </el-form-item>
          <el-form-item label="用户名">
            <el-input
              v-model="addUserForm.username"
              autocomplete="off"
              style="width: 250px"
              clearable
            ></el-input>
          </el-form-item>

          <el-form-item label="密码">
            <el-input
              v-model="addUserForm.password"
              autocomplete="off"
              style="width: 250px"
              clearable
            ></el-input>
          </el-form-item>

          <el-form-item label="邮箱">
            <el-input
              v-model="addUserForm.email"
              autocomplete="off"
              clearable
              style="width: 250px"
            ></el-input>
          </el-form-item>

          <el-form-item label="状态">
            <el-radio-group v-model="addUserForm.status">
              <el-radio label="启用"></el-radio>
              <el-radio label="禁用"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="addFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addFormVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import breadcrumb from "@/components/breadcrumb.vue";
import getUserInfo from "@/api/user";
export default {
  name: "",
  components: { breadcrumb },
  data() {
    return {
      mustData: {
        current: 1,
        size: 20,
        username: "",
      },
      tableData: [],
      addUserForm: {
        username: "",
        password: "",
        email: "",
        status:1
      },
      addFormVisible: false,
      dialogFormVisible: false,
    };
  },
  created() {
    this.getmenusList();
  },
  mounted() {},

  methods: {
    async getmenusList() {
      const response = await getUserInfo.getUserInfo(this.mustData);
      // console.log(response);
      this.tableData = response.records;
      console.log(this.tableData);
    },
    addFormVisible() {},
    dialogFormVisible() {},
  },
};
</script>
<style scoped lang="scss">
.search {
  display: flex;
  width: 400px;
  margin-top: 20px;
}
.tab {
  margin-top: 20px;
}
</style>
