<template>
  <div class="box progress">
    <div><img src="../../icons/show.png" alt="景物" class="show" /></div>
    <div class="content">
      <div v-for="(item, index) in progress" :key="index">
        {{ item.name }}
        <el-progress
          :percentage="item.progress * 100"
          :status="item.progress === 1 ? 'success' : ''"
        >
        </el-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Progress",
  components: {},
  props: {},
  data() {
    return {
      progress: []
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("api//progress")
        .then(res => {
          this.progress = res.data;
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
.progress {
  padding: 10px;
  background: white;
  .show {
    width: 240px;
  }
  .content {
    margin-top: 40px;
  }
}
</style>
