<template>
  <div class="register">
    <div class="box">
      <div class="title">欢迎来到小娜后台管理系统</div>
      <div class="form">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          label-position="left"
          class="demo-ruleForm"
        >
          <el-form-item label="请输入用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="请输入密码" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="请输入验证码" prop="code">
            <el-input
              v-model="ruleForm.code"
              autocomplete="off"
              class="el_code"
            >
            </el-input>
            <div class="code" @click="getCode" v-html="this.code"></div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即登录</el-button
            >
            <el-button type="primary" @click="goTo('/Register')"
              >立即注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {},
  props: {},
  data() {
    return {
      code: "",
      ruleForm: {
        username: "",
        password: "",
        code: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      }
    };
  },
  methods: {
    getCode() {
      this.$axios
        .req("api/captcha")
        .then(res => {
          this.code = res;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .req("api/user/login", {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              code: this.ruleForm.code
            })
            .then(res => {
              if (res.code === 200) {
                this.$message({
                  showClose: true,
                  message: "登录成功",
                  type: "success"
                });
                localStorage.setItem(
                  "user",
                  JSON.stringify({
                    username: this.ruleForm.username,
                    password: this.ruleForm.password,
                    date: res.data[0].date
                  })
                );
                this.$store.state.user.username = this.ruleForm.username;
                this.$store.state.user.password = this.ruleForm.password;
                this.$store.state.date = res.data[0].date;
                this.$router.push("/Homepage");
              } else {
                this.$message({
                  showClose: true,
                  message: "用户不存在",
                  type: "error"
                });
              }
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$message({
            showClose: true,
            message: "登录失败",
            type: "error"
          });
          return false;
        }
      });
    },
    goTo(path) {
      this.$router.push(path);
    }
  },
  mounted() {
    this.getCode();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.register {
  background: #a3d7e5;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .box {
    background: white;
    width: 500px;
    margin: 130px auto 0;
    border-radius: 3px;
    .title {
      text-align: center;
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #ebeef5;
      font-size: 18px;
    }
    .form {
      width: 400px;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 20px;
      /*.el-form-item__label {*/
      /*  text-align: left !important;*/
      /*}*/
      .el_code {
        width: 100px;
        margin-right: 25px;
        position: relative;
        bottom: 15px;
      }
      .el-button + .el-button {
        margin-left: 82px;
      }
      .code {
        display: inline-block;
        /*border: 1px solid red;*/
        height: 50px;
      }
    }
  }
}
</style>
