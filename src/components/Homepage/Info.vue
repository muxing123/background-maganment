<template>
  <!--  顶上信息栏-->
  <div class="msg">
    <div class="box">
      <div><img src="../../icons/visit.png" alt="图标" class="img1" /></div>
      <div class="text">
        <div class="ename">New Visits</div>
        <div>
          <countTo
            :startVal="startVal"
            :endVal="endVal1"
            :duration="3000"
          ></countTo>
        </div>
      </div>
    </div>
    <div class="box">
      <div><img src="../../icons/msg.png" alt="图标" class="img1" /></div>
      <div class="text">
        <div class="ename">Messages</div>
        <div>
          <countTo
            :startVal="startVal"
            :endVal="endVal2"
            :duration="3000"
          ></countTo>
        </div>
      </div>
    </div>
    <div class="box">
      <div><img src="../../icons/money.png" alt="图标" class="img1" /></div>
      <div class="text">
        <div class="ename">Purchases</div>
        <div>
          <countTo
            :startVal="startVal"
            :endVal="endVal3"
            :duration="3000"
          ></countTo>
        </div>
      </div>
    </div>
    <div class="box">
      <div><img src="../../icons/shopcart.png" alt="图标" class="img1" /></div>
      <div class="text">
        <div class="ename">Shoppings</div>
        <div>
          <countTo
            :startVal="startVal"
            :endVal="endVal4"
            :duration="3000"
          ></countTo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  name: "Info",
  components: {
    countTo
  },
  props: {},
  data() {
    return {
      homedata: {},
      startVal: 0,
      endVal1: 0,
      endVal2: 0,
      endVal3: 0,
      endVal4: 0
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("api//homeData")
        .then(res => {
          this.homedata = res.data;
          this.endVal1 = this.homedata.visits;
          this.endVal2 = this.homedata.messages;
          this.endVal3 = this.homedata.purchases;
          this.endVal4 = this.homedata.shopping;
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
.msg {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  .box {
    display: flex;
    padding: 20px;
    border-radius: 3px;
    background: white;
    width: 21%;
    .img1 {
      width: 40px;
    }
    .text {
      margin-left: 110px;
      .ename {
        color: darkgray;
        font-size: 13px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
