<template>
  <div>
    <breadcrumb></breadcrumb>
    <div class="search">
      <el-input placeholder="请输入内容"></el-input>
      <el-button type="success"><i class="el-icon-search"></i>查询</el-button>
    </div>
    <div class="tab">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="num" label="序号"> </el-table-column>
        <el-table-column prop="username" label="用户名"> </el-table-column>
        <el-table-column prop="title" label="头像"> </el-table-column>
        <el-table-column prop="city" label="角色"> </el-table-column>
        <el-table-column prop="address" label="邮箱"> </el-table-column>
        <el-table-column prop="address" label="注册时间"> </el-table-column>
        <el-table-column prop="address" label="状态"> </el-table-column>
        <el-table-column prop="address" label="操作"> </el-table-column>
        <el-table-column prop="zip" label="邮编"> </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
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
        size: 5,
        username:""
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
      const res = await getUserInfo.getUserInfo(this.mustData);
      console.log(res);
    },
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
