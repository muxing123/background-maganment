<template>
  <div class="radar">
    <ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
  </div>
</template>

<script>
export default {
  name: "Radar",
  components: {},
  props: {},
  data() {
    this.chartSettings = {
      dimension: ["name"],
      metrics: ["sales", "ministration", "techology", "delelopmer", "marketing"]
    };
    return {
      chartData: {
        columns: [
          "name",
          "sales",
          "ministration",
          "techology",
          "delelopmer",
          "marketing"
        ],
        rows: []
      },
      Cdata: []
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("api//radarChat")
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
.radar {
  margin-top: 20px;
  background: white;
  width: 30%;
  padding: 10px;
  border-radius: 3px;
}
</style>
