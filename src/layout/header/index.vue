<template>
  <div class="top-container">
    <div class="left">
      <i class="el-icon-s-fold"></i>
      <el-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</el-tag>
    </div>
    <div class="right">
       <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
      <i class="el-icon-full-screen"></i>
    </el-tooltip>
       <el-tooltip class="item" effect="dark" content="关闭全部标签" placement="bottom">
      <i class="el-icon-circle-close"></i>
    </el-tooltip>
      
      <img class="title-img" src="../../assets/images/title.jpg" alt="" />

      <el-dropdown>
        <span class="el-dropdown-link">
          duck<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item>个人设置</el-dropdown-item>
          <el-dropdown-item @click.native="exitLogin" >安全退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      isCollapse:true,
      tags: [
          { name: '控制台', type: 'success' },
        ]
    };
  },
  created() {},
  mounted() {},
  methods: {

    exitLogin(){
      const response= this.$store.dispatch('user/loginout')
      console.log(response);
      
           this.$confirm('你确定登出吗？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '登出成功!',
            });
             this.$router.push('/')
             this.handleVerifyForm()
          })
      
    }
  },
};
</script>
<style scoped lang="scss">
.top-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  line-height: 60px;
  .right {
    display: flex;
    align-items: center;
  }
  .left {
    display: flex;
    align-items: center;
  }
}
i {
  color: #fff;
  font-size: 28px;
  margin-right: 20px;
}

.title-img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  cursor:pointer
}
 .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
.el-dropdown-link{
  font-weight: bold;
  font-size: 20px;
}
</style>
