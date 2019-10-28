<template>
  <div class="header">
    <div class="wel">欢迎{{ this.name }}来到小娜管理系统</div>
    <div class="time">
      {{ this.wel }}，亲爱的{{ this.name }} 上次登录时间:
      {{ this.$dayjs(this.date).format("YYYY年MM月DD日hh时mm分ss秒") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  components: {},
  props: {},
  data() {
    return {
      time: "",
      wel: "",
      name: "",
      date: ""
    };
  },
  methods: {
    top() {
      let user = JSON.parse(localStorage.getItem("user"));
      this.name = user.username;
      this.date = user.date;
    }
  },
  mounted() {
    let now = new Date();
    let hh = now.getHours();
    if (hh >= 6 && hh < 12) {
      this.wel = "早上好";
    } else if (hh >= 12 && hh < 14) {
      this.wel = "中午好";
    } else if (hh >= 14 && hh < 18) {
      this.wel = "下午好";
    } else if (hh >= 18 && hh < 24) {
      this.wel = "晚上好";
    } else {
      this.wel = "该睡觉了";
    }
    this.top();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  /*min-width: 1080px;*/
  background-color: #2e5e85;
  z-index: 100;
  display: flex;
  color: white;
  justify-content: space-between;
  .wel {
    margin-left: 33px;
  }
  .time {
    margin-right: 33px;
    font-size: 13px;
  }
}
</style>
