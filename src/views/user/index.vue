<template>
  <div>
    <breadcrumb></breadcrumb>
    <div class="search">
      <el-input placeholder="请输入内容"></el-input>
      <el-button type="success"><i class="el-icon-search"></i>查询</el-button>
    </div>
  </div>
</template>

<script>
import breadcrumb from "@/components/breadcrumb.vue";
export default {
  name: "",
  components: { breadcrumb },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.search{
  display: flex;
  width: 400px;
  margin-top: 20px;
}
</style>
