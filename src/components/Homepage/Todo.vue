<template>
  <div class="box list">
    <div class="title">
      <div @click="checkAll">
        <img src="../../icons/barrow.png" alt="箭头" class="arrow" />
      </div>
      <div>Todo List</div>
    </div>
    <!--    所有选项-->
    <div class="content" v-if="num === 0">
      <div v-if="this.list.length === 0">0 item</div>
      <div v-for="(item, index) in list" :key="index" class="term">
        <div class="check" @click="check(index)">
          <img
            src="../../icons/yes.png"
            alt="对号"
            v-if="item.checked"
            class="yes"
          />
        </div>
        <div>{{ item.name }}</div>
        <img
          src="../../icons/del.png"
          alt="删除"
          class="del"
          @click="del(index)"
        />
      </div>
    </div>
    <!--    正在进行的选项-->
    <div v-if="num === 1" class="content">
      <div v-if="this.activeList.length === 0">0 item</div>
      <div v-for="(item, index) in activeList" :key="index" class="term">
        <div class="check" @click="checkActive(index)">
          <img
            src="../../icons/yes.png"
            alt="对号"
            v-if="item.checked"
            class="yes"
          />
        </div>
        <div>{{ item.name }}</div>
        <img
          src="../../icons/del.png"
          alt="删除"
          class="del"
          @click="delActive(index, item)"
        />
      </div>
    </div>
    <!--    已完成的选项-->
    <div v-if="num === 2" class="content">
      <div v-if="this.completedList.length === 0">0 item</div>
      <div v-for="(item, index) in completedList" :key="index" class="term">
        <div class="check" @click="checkCompleted(index)">
          <img
            src="../../icons/yes.png"
            alt="对号"
            v-if="item.checked"
            class="yes"
          />
        </div>
        <div>{{ item.name }}</div>
        <img
          src="../../icons/del.png"
          alt="删除"
          class="del"
          @click="delCompleted(index, item)"
        />
      </div>
    </div>
    <div class="footer">
      <div>{{ sum }} items left</div>
      <div class="all" :class="{ num: this.num === 0 }" @click="set(0)">
        All
      </div>
      <div :class="{ num: this.num === 1 }" @click="setActive(1)">Active</div>
      <div :class="{ num: this.num === 2 }" @click="setCompleted(2)">
        Completed
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  components: {},
  props: {},
  data() {
    return {
      list: [],
      activeList: [],
      completedList: [],
      checkAlled: false,
      num: 0
    };
  },
  methods: {
    getData() {
      this.$axios
        .req("api//todoList")
        .then(res => {
          this.list = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    check(index) {
      this.list[index].checked = !this.list[index].checked;
      this.checkAlled = this.list.every(item => {
        return item.checked === true;
      });
    },
    checkActive(index) {
      this.activeList[index].checked = !this.activeList[index].checked;
      this.checkAlled = this.list.every(item => {
        return item.checked === true;
      });
    },
    checkCompleted(index) {
      this.completedList[index].checked = !this.completedList[index].checked;
      this.checkAlled = this.list.every(item => {
        return item.checked === true;
      });
    },
    checkAll() {
      this.checkAlled = !this.checkAlled;
      this.list.map(item => {
        item.checked = this.checkAlled;
      });
    },
    del(index) {
      this.list.splice(index, 1);
    },
    delActive(index, item) {
      this.activeList.splice(index, 1);
      this.list.splice(this.list.indexOf(item), 1);
    },
    delCompleted(index, item) {
      this.completedList.splice(index, 1);
      this.list.splice(this.list.indexOf(item), 1);
    },
    set(data) {
      this.num = data;
    },
    setActive(data) {
      this.num = data;
      this.activeList = this.list.filter(item => {
        return item.checked !== true;
      });
    },
    setCompleted(data) {
      this.num = data;
      this.completedList = this.list.filter(item => {
        return item.checked === true;
      });
    }
  },
  mounted() {
    this.getData();
  },
  created() {},
  filters: {},
  computed: {
    sum() {
      let sum = this.list.length;
      this.list.map(item => {
        if (item.checked) {
          sum -= 1;
        }
      });
      return sum;
    }
  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.box,
.list {
  width: 25%;
  background: white;
  .title {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-bottom: 1px solid gainsboro;
    .arrow {
      width: 15px;
    }
  }
  .content {
    padding: 12px;
    height: 328px;
    .term {
      display: flex;
      align-items: center;
      padding: 12px 0;
      font-size: 13px;
      position: relative;
      &:hover {
        background: floralwhite;
      }
      &:hover .del {
        display: block;
      }
      .check {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 1px solid lightgrey;
        margin-right: 10px;
        position: relative;
        .yes {
          width: 14px;
          position: absolute;
          top: 50%;
          margin-top: -7px;
        }
      }
      .del {
        width: 15px;
        position: absolute;
        top: 11px;
        right: 0;
        display: none;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid gainsboro;
    margin: 10px;
    padding: 30px 0 0 20px;
    font-size: 12px;
    div {
      height: 36px;
      line-height: 36px;
      text-align: center;
    }
    .num {
      border: 1px solid lightcoral;
    }
    .all {
      width: 18%;
    }
  }
}
</style>
