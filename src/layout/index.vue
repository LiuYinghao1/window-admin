<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <AppAside></AppAside>
      </el-aside>
      <el-container>
        <el-header>
          <AppHeader></AppHeader>
        </el-header>
        <el-main>
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppAside from "./aside";
import AppHeader from "./header";
import  AppMain from "./main";
export default {
  name: "",
  components: {
    AppAside,
    AppMain,
    AppHeader,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.el-container {
  height: 100%;
  width: 100%;
}
.el-header {
  background-color: #18bc9c;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #222d32;
  color: #333;
  height: 100vh;
 
}

.el-main {
  background-color: #e7ecef;
  color: #333;
  height: calc(100vh - 60px);
}
</style>
