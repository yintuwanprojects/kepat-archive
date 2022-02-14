<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand chn-zh" to="/">
        电台记事簿
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body chn">
          随缘更新，合作请联系
          <br>
          <a href="https://weibo.com/5522260366/profile" target="_blank">
            <i class="fab fa-weibo"></i> 嘻嘻来巡山了
          </a>
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <li class="nav-link nav-item">
        <router-link to="/">
          <i class="fas fa-home"></i> 回到主页
        </router-link>
      </li>
      <drop-down
        tag="li"
        title="资源库"
        icon="now-ui-icons files_box"
        class="nav-item chn-zh"
      >
        <nav-link to="/resource">
          <i class="now-ui-icons media-1_button-play"></i> 官方资源
        </nav-link>
        <nav-link to="/fanbase">
          <i class="now-ui-icons design_bullet-list-67"></i> 站姐列表
        </nav-link>
      </drop-down>
      <drop-down
              tag="li"
              title="糖点"
              icon="now-ui-icons ui-2_favourite-28"
              class="nav-item chn-zh"
      >
        <nav-link to="/interaction">
          <i class="fab fa-weibo"></i> 社交平台互动
        </nav-link>

      </drop-down>
      <li class="nav-link nav-item">
        <router-link to="/board">
          <i class="now-ui-icons ui-2_chat-round"></i> 留言板
        </router-link>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
