<template>
  <!--  订单-->
  <div class="box tab">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="num" label="Order_No" width="300" align="center">
      </el-table-column>
      <el-table-column  label="Price" width="" align="center">
        <template slot-scope="scope">
          <div>￥{{ scope.row.price }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="Status" width="" align="center">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.status === 0 ? 'danger' : 'success'"
            disable-transitions
            >{{ scope.row.status === 0 ? "pending" : "success" }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Form",
  components: {},
  props: {},
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("api/orderData")
        .then(res => {
          this.tableData = res.data;
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
.box,
.tab {
  width: 50%;
}
</style>
