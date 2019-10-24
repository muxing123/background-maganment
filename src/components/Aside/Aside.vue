<template>
<!--  侧边栏-->
  <div class="aside">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#344055"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" @click="goto('/Homepage')">
        <i class="el-icon-location"></i>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="2" @click="goto('/Pageform')">
        <i class="el-icon-menu"></i>
        <span slot="title">分页表格</span>
      </el-menu-item>
      <el-menu-item index="3" @click="goto('/Tabpage')">
        <i class="el-icon-document"></i>
        <span slot="title">标签页</span>
      </el-menu-item>
      <el-menu-item index="4" @click="goto('/Pictureup')">
        <i class="el-icon-check"></i>
        <span slot="title">图片上传</span>
      </el-menu-item>
      <el-menu-item index="5" @click="goto('/Alreadypub')">
        <i class="el-icon-goods"></i>
        <span slot="title">已发表</span>
      </el-menu-item>
      <el-menu-item index="6" @click="goto('/Publishart')">
        <i class="el-icon-message"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="7" @click="goto('/Statistics')">
        <i class="el-icon-orange"></i>
        <span slot="title">统计</span>
      </el-menu-item>
      <el-menu-item index="8" @click="goto('/Exportec')">
        <i class="el-icon-setting"></i>
        <span slot="title">导出excel</span>
      </el-menu-item>
      <el-menu-item index="9" @click="goto('/Signout')">
        <i class="el-icon-delete"></i>
        <span slot="title">退出系统</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    goto(path) {
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
.aside {
  position: fixed;
  top: 60px;
  bottom: 0;
  width: 200px;
  background: rgb(52, 64, 85);
}
</style>
