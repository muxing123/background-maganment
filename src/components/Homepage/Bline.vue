<template>
  <!--  折线图-->
  <div class="bline">
    <ve-line :data="chartData" :settings="chartSettings"></ve-line>
  </div>
</template>

<script>
import VeLine from "v-charts/lib/line";
export default {
  name: "Bline",
  components: {
    VeLine
  },
  props: {},
  data() {
    this.chartSettings = {
      metrics: ["expected", "actual"],
      dimension: ["date"]
    };
    return {
      chartData: {
        columns: ["date", "expected", "actual"],
        rows: []
      },
      Cdata: []
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("api//homeChat")
        .then(res => {
          this.Cdata = res.data;
          this.chartData.rows = this.Cdata;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.bline {
  background: white;
  margin-top: 40px;
  border-radius: 3px;
}
</style>
