<template>
  <div>
    <div class="content">
      <div class="title">支持拖拽</div>
      <div class="text">Element UI自带上传组件</div>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
      <div class="title second">支持裁剪</div>
      <div class="text">vue-image-crop-upload</div>
      <el-button type="primary">上传图片</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pictureup",
  components: {},
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
.content {
  background: white;
  padding: 20px;
  .title {
    font-weight: bold;
    padding-bottom: 10px;
  }
  .second {
    margin-top: 20px;
  }
  .text {
    background: lightgrey;
    line-height: 20px;
    padding: 20px;
    margin-bottom: 20px;
  }
}
</style>
