<template>
  <div class="login-container">
    <h1>智慧服务平台</h1>
    <div class="div-center">
      <h1>欢迎登录</h1>
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="form"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="loginForm.username"
            suffix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="loginForm.password"
            type="password"
            clearable
            show-password
            suffix-icon="el-icon-s-goods"
          ></el-input>
        </el-form-item>

        <el-form-item prop="code">
          <div class="verify">
            <el-input
              placeholder="请输入验证码"
              v-model.trim="loginForm.code"
            ></el-input>
            <el-image
              @click.stop="handleCodeRefresh"
              :src="codeImageUrl"
            ></el-image>
          </div>
        </el-form-item>

        <el-form-item>
          <el-button
            type="danger"
            :loading="loadingStatus"
            class="loginBtn"
            @click="handleVerifyForm()"
            >{{ loadingStatus ? "登录中" : "立即登录" }}</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import UserApi from "@/api/user";
import { mapActions } from "vuex";
export default {
  name: "",
  components: {},
  data() {
    return {
      // load状态
      loadingStatus: false,
      // 验证码路径
      codeImageUrl: "",
      // 登录需要的参数
      loginForm: {
        username: "duck",
        password: "admin888",
        code: "",
        token: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  created() {
    // 创建后获取验证码路径和token
    this.handleGetCaptcha();
  },
  mounted() {},
  methods: {
    // 登录提交
    async handleSubmitLogin() {
      try {
        this.loadingStatus = true;
        const token = await this.login(this.loginForm);
        if (!token ) return;
        this.$notify({
          title: "提示",
          message: "恭喜，登录成功",
          type: "success",
        });
        await this.$router.push("/layout");
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingStatus = false;
      }
    },

    // 辅助函数vuex方法
    ...mapActions({
      login: "user/login",
    }),

    // 获取验证码路径和token的方法
    async handleGetCaptcha() {
      const { captchaImg, token } = await UserApi.getCaptcha();
      this.codeImageUrl = captchaImg;
      this.loginForm.token = token;
    },

    // 点击切换验证码
    handleCodeRefresh() {
      (this.loginForm.code = ""), this.handleGetCaptcha();
    },
    
    // 表单验证规则
    handleVerifyForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.handleSubmitLogin();
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../../assets/images/bg.jpg");
  background-size: cover;

  .div-center {
    width: 300px;
    height: 150px;
    text-align: center;
    margin: auto;
    margin-top: 100px;
    .loginBtn {
      width: 100%;
    }
    .el-image {
      width: 200px;
      height: 40px;
      border-radius: 5px;
      margin-left: 10px;
      cursor: pointer;
    }
    .verify {
      display: flex;
      align-items: center;
    }
  }
  h1 {
    color: #fff;
    text-align: center;
    margin-top: 50px;
  }
  h1 {
    color: #fff;
  }
}
</style>
