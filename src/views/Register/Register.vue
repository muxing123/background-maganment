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
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即注册</el-button
            >
            <el-button type="primary" @click="goTo('/Signin')"
              >立即登录</el-button
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
    let validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        let reg = new RegExp("[\u4e00-\u9fa5]", "g");
        if (reg.test(value)) {
          callback(new Error("不能有中文"));
        } else {
          callback();
        }
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          // {
          //   min: 2,
          //   max: 14,
          //   message: "长度在 2 到 14 个字符",
          //   trigger: "blur"
          // },
          { validator: validateName, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur"
          },
          { validator: validatePass, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .req("api/user/register", {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            })
            .then(res => {
              if (res.code === 200) {
                this.$message({
                  showClose: true,
                  message: "注册成功",
                  type: "success"
                });
                this.$router.push("/Homepage");
              } else {
                this.$message({
                  showClose: true,
                  message: "用户已存在",
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
            message: "注册失败",
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
  mounted() {},
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
    margin: 150px auto 0;
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
      .el-button + .el-button {
        margin-left: 82px;
      }
    }
  }
}
</style>
