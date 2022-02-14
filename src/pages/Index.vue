<template>
  <div>
    <div class="page-header clear-filter" filter-color="purple">
      <parallax
        class="page-header-image"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo" src="img/sydt/radio-2.png" alt="" />
          <h1 class="h1-seo chn-zh">电台记事簿</h1>
          <h3 class="chn">欢迎收听 双宇频道</h3>
        </div>
        <h6 class="category category-absolute chn-zh">
          网页制作：
          <a class="chn-zh" href="https://weibo.com/5522260366/profile" target="_blank">
            @嘻嘻来巡山了
          </a>
        </h6>
      </div>
    </div>
    <basic-elements></basic-elements>
    <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">更多故事 敬请期待</h2>
<!--            <h5 class="description chn">-->
<!--            </h5>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Parallax } from '@/components';
import BasicElements from './components/LandingContent';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    BasicElements
  }
};
</script>
<style>
@media (min-width: 720px) {
  .page-header-image {
    background-image:url('../../public/img/sydt/header.jpg')
  }
}
@media (max-width: 719px) {
  .page-header-image {
    background-image:url('../../public/img/sydt/header-mobile.jpeg')
  }
}

</style>
