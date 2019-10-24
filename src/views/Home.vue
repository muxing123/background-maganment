<template>
  <div>
    <el-container>
      <el-header>
          <Top></Top>
      </el-header>
      <el-container>
        <el-aside style="width:200px;">
          <Aside></Aside>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Top from "../components/Header/Top";
import Aside from "../components/Aside/Aside";
export default {
  name: "Home",
  components: {
    Top,
    Aside
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  color: #333;
  line-height: 200px;
}
</style>
