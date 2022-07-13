<template>
  <div>
    <breadcrumb></breadcrumb>
    <div class="search">
      <el-input placeholder="请输入内容"></el-input>
      <el-button type="success"><i class="el-icon-search"></i>查询</el-button>

      <el-button type="primary" icon="el-icon-edit" @click="add">新增</el-button>
    </div>
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
          <template slot-scope="scope">
            <el-tag type="success">编辑</el-tag>
            <el-tag type="warning">分配角色</el-tag>
            <el-tag type="danger">删除</el-tag>
          </template>
        </el-table-column>
      </el-table>
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
    add(){}
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
