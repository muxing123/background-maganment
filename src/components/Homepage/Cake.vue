<template>
  <div class="cake">
    <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
  </div>
</template>

<script>
export default {
  name: "Cake",
  components: {},
  props: {},
  data() {
    this.chartSettings = {
      dimension: "name",
      metrics: "data",
      roseType: "radius"
      // roseType: "area"
    };
    return {
      chartData: {
        columns: ["name", "data"],
        rows: []
      },
      Cdata: []
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("api//ringChat")
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
.cake {
  width: 30%;
  background: white;
  margin-top: 20px;
  padding: 10px;
  border-radius: 3px;
}
</style>
