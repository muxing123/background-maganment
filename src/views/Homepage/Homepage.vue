<template>
  <div>
    <!--    顶部信息-->
    <Info></Info>
    <!--    折线图-->
    <Bline></Bline>
    <div class="charts">
      <!--    雷达图-->
      <Radar></Radar>
<!--     饼图 -->
      <Cake></Cake>
    </div>
  </div>
</template>

<script>
import Info from "../../components/Homepage/Info";
import Bline from "../../components/Homepage/Bline";
import Radar from "../../components/Homepage/Radar";
import Cake from "../../components/Homepage/Cake";
export default {
  name: "Homepage",
  components: {
    Info,
    Bline,
    Radar,
    Cake
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
</style>
