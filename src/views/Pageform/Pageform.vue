<template>
  <div class="box">
    <!--    搜索框-->
    <div class="input">
      <el-input
        v-model="keywords"
        placeholder="请输入您想搜索的商品名称"
        clearable
        size="mini"
      ></el-input>
    </div>
    <!--  分页表格-->
    <div class="tab">
      <el-table
        :data="arr.slice(pages * (pagesNum - 1), pagesNum * pages)"
        style="width: 100%"
      >
        <el-table-column prop="NAME" label="名称" width="" align="center">
        </el-table-column>
        <el-table-column
          prop="GOODS_SERIAL_NUMBER"
          label="商品编号"
          width=""
          align="center"
        >
        </el-table-column>
        <el-table-column prop="ORI_PRICE" label="原价" width="" align="center">
        </el-table-column>
        <el-table-column
          prop="PRESENT_PRICE"
          label="现价"
          width=""
          align="center"
        >
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-dialog title="" :visible.sync="dialogFormVisible">
              <el-form :model="data">
                <el-form-item label="名称:" :label-width="formLabelWidth">
                  <el-input v-model="data.NAME" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="原价:" :label-width="formLabelWidth">
                  <el-input
                    v-model="data.ORI_PRICE"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="现价:" :label-width="formLabelWidth">
                  <el-input
                    v-model="data.PRESENT_PRICE"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false"
                  >确 定</el-button
                >
              </div>
            </el-dialog>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
      :length="length"
    ></Pagination>
  </div>
</template>

<script>
import Pagination from "../../components/Pageform/Pagination/Pagination";
export default {
  name: "Form",
  components: {
    Pagination
  },
  props: {},
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "100px",
      keywords: "",
      tableData: [],
      arr: [],
      data: {},
      length: 0,
      pages: 10,
      pagesNum: 1
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("api/tableData")
        .then(res => {
          this.tableData = res.data;
          this.arr = this.tableData;
          this.length = this.arr.length;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //  改变每页条数
    handleSizeChange(data) {
      this.pages = data;
      console.log(this.pages);
    },
    //  改变当前页
    handleCurrentChange(data) {
      this.pagesNum = data;
      console.log(this.pagesNum);
    },
    //编辑
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      this.data = row;
      console.log(index, row);
    },
    //删除
    handleDelete(index, row) {
      this.arr.splice(index, 1);
      this.length = this.arr.length;
      console.log(index, row);
    }
  },
  mounted() {
    this.getData();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {
    keywords(val) {
      // 说明输入框有值
      if (val.trim() !== "") {
        this.arr = this.tableData.filter(item => {
          return JSON.stringify(item).includes(val);
          // return JSON.stringify(item).indexOf(val) > 0
          // return JSON.stringify(item).indexOf(val) !== -1
        });
        this.length = this.arr.length;
      } else {
        this.arr = this.tableData;
      }
    }
  },
  directives: {}
};
</script>

<style scoped lang="scss">
.box {
  border-radius: 4px;
  .input {
    width: 300px;
    margin-bottom: 20px;
  }
  .tab {
    .el-button {
      margin-right: 10px;
    }
  }
}
</style>
