<template>
  <div class="quit">
    <div class="top">期待您的下次光临</div>
    <el-button type="primary" @click="del">确定退出</el-button>
  </div>
</template>

<script>
export default {
  name: "Signout",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    del() {
      this.$axios
        .req("api/user/logout")
        .then(res => {
          if (res.code === 0) {
            this.$message({
              showClose: true,
              message: "登出成功",
              type: "success"
            });
            localStorage.clear();
            this.$store.state.user.username = "";
            this.$store.state.user.password = "";
            this.$store.state.date = "";
            this.$router.push("/Signin");
          } else {
            this.$message({
              showClose: true,
              message: "登出失败",
              type: "error"
            });
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
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
.quit {
  position: absolute;
  top: 50%;
  left: 50%;
  .top {
    margin-bottom: 20px;
    font-weight: bold;
  }
  .el-button {
    margin-left: 16px;
  }
}
</style>
