<template>
  <div id="____tpc_">
    底层页面
    <dialog-component
      :show-win.sync="showWindow"
      width="500"
      height="600"
    >
      <div slot="title">
        在线客服
      </div>
      <div slot="content">
        <context-component :data="data" />
      </div>
    </dialog-component>
    <div
      class="____tpc_icon"
      @click="switchWindow"
    >
      <img
        :src="logoFile"
        width="100%"
      >
    </div>
  </div>
</template>

<script>
import logoIcon from "@/resources/logoIcon.png";
import DialogComponent from "./components/Dialog";
import ContextComponent from "./components/Context";

export default {
  components: {
    DialogComponent,
    ContextComponent
  },
  data() {
    return {
      showWindow: true,
      data: [
        {
          id: 1,
          type: 1,
          name: '客服小白',
          pic: logoIcon,
          context: '你好~',
          create_time: '2019-04-04 02:11:01'
        },
        {
          id: 2,
          type: 1,
          name: '客服小白',
          pic: logoIcon,
          context: '请问有什么可以帮到您的',
          create_time: '2019-04-04 02:11:15'
        },
        {
          id: 3,
          type: 2,
          name: 'vichens',
          pic: logoIcon,
          context: '我想问下报价',
          create_time: '2019-04-04 02:13:22'
        }
      ]
    };
  },
  computed: {
    logoFile () {
      console.log(logoIcon);
      return logoIcon;
    }
  },
  mounted () {},
  methods: {
    switchWindow () {
      this.showWindow = !this.showWindow;
    }
  }
};
</script>

<style lang="less" scoped>
</style>
