<template>
  <div>
    <!--    顶部信息-->
    <Info></Info>
    <!--    折线图-->
    <Bline></Bline>
    <!--    图表库组件-->
    <div class="charts">
      <!--    雷达图-->
      <Radar></Radar>
      <!--     饼图 -->
      <Cake></Cake>
      <!--      柱图-->
      <Columnar></Columnar>
    </div>
    <!--    饿了么组件-->
    <div class="element">
<!--      订单-->
      <Form></Form>
<!--      任务列表-->
      <Todo></Todo>
<!--      进度条-->
      <Progress></Progress>
    </div>
  </div>
</template>

<script>
import Info from "../../components/Homepage/Info";
import Bline from "../../components/Homepage/Bline";
import Radar from "../../components/Homepage/Radar";
import Cake from "../../components/Homepage/Cake";
import Columnar from "../../components/Homepage/Columnar";
import Form from "../../components/Homepage/Form";
import Todo from "../../components/Homepage/Todo";
import Progress from "../../components/Homepage/Progress";
export default {
  name: "Homepage",
  components: {
    Info,
    Bline,
    Radar,
    Cake,
    Columnar,
    Form,
    Todo,
    Progress
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
.charts {
  display: flex;
  justify-content: space-between;
}
.element {
  display: flex;
  justify-content: space-between;
  .box {
    margin-top: 40px;
    border-radius: 3px;
  }
}
</style>
