<template>
  <div class="tabpage">
    <el-tabs v-model="activeName" @tab-click="handleClick">
<!--      未读消息-->
      <el-tab-pane name="first">
        <span slot="label">未读消息({{ unread.length }})</span>
        <div class="content">
          <div v-if="unread.length === 0" class="title">暂无数据</div>
          <div class="info" v-for="(item, index) in unread" :key="index">
            <div clss="left">{{ item.name }}</div>
            <div class="right">
              <div>{{ item.date }}</div>
              <el-button size="mini" @click="tranOne(item, index)"
                >标为已读</el-button
              >
            </div>
          </div>
          <el-button type="primary" class="foot" @click="tranAll"
            >全部标为已读</el-button
          >
        </div>
      </el-tab-pane>
<!--      已读消息-->
      <el-tab-pane name="second">
        <span slot="label">已读消息({{ read.length }})</span>
        <div class="content">
          <div v-if="read.length === 0" class="title">暂无数据</div>
          <div class="info" v-for="(item, index) in read" :key="index">
            <div clss="left">{{ item.name }}</div>
            <div class="right">
              <div>{{ item.date }}</div>
              <el-button size="mini" @click="del(item, index)">删除</el-button>
            </div>
          </div>
          <el-button type="danger" class="foot" @click="delAll"
            >删除全部</el-button
          >
        </div>
      </el-tab-pane>
<!--      回收站-->
      <el-tab-pane name="third">
        <span slot="label">回收站({{ rec.length }})</span>
        <div class="content">
          <div v-if="rec.length === 0" class="title">暂无数据</div>
          <div class="info" v-for="(item, index) in rec" :key="index">
            <div clss="left">{{ item.name }}</div>
            <div class="right">
              <div>{{ item.date }}</div>
              <el-button size="mini" type="warning" @click="red(item, index)"
                >还原</el-button
              >
            </div>
          </div>
          <el-button type="info" class="foot" @click="delrecAll"
            >清空回收站</el-button
          >
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Tabpage",
  components: {},
  props: {},
  data() {
    return {
      activeName: "first",
      unread: [
        {
          name: "【系统通知】该系统将于今晚凌晨2点到5点进行维护升级",
          date: "2018-04-19 20:00:00"
        },
        {
          name: "今晚12点整发大红包，先到先得",
          date: "2018-04-19 21:00:00"
        },
        {
          name: "【系统通知】您的优惠券已过期",
          date: "2018-04-19 22:00:00"
        }
      ],
      read: [],
      rec: []
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //标为已读
    tranOne(item, index) {
      this.read.push(item);
      this.unread.splice(index, 1);
    },
    //全部标为已读
    tranAll() {
      // this.unread.map(item => {
      //   return this.read.push(item);
      // });
      this.read = this.read.concat(this.unread);
      this.unread.splice(0);
    },
    //删除
    del(item, index) {
      this.rec.push(item);
      this.read.splice(index, 1);
    },
    // 全部删除
    delAll() {
      this.read.map(item => {
        return this.rec.push(item);
      });
      this.read.splice(0);
    },
    //  还原
    red(item, index) {
      this.read.push(item);
      this.rec.splice(index, 1);
    },
    delrecAll() {
      this.rec.splice(0);
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.tabpage {
  .content {
    background: white;
    padding: 10px;
    .title {
      text-align: center;
    }
    .info {
      display: flex;
      justify-content: space-between;
      line-height: 60px;
      border-bottom: 1px solid lightgrey;
      font-size: 13px;
      .right {
        display: flex;
        .el-button {
          height: 30px;
          position: relative;
          top: 14px;
          margin-left: 10px;
        }
      }
    }
    .foot {
      margin: 20px 0 20px 0;
    }
  }
}
</style>
