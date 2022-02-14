<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/sydt/header-2.jpeg')"
      >
      </parallax>
      <div class="container blur">
        <h4 class="title">正在施工中</h4>
        <p class="category">施工进程被双宇耽误了，<br>人家也不是故意的（在摆烂<br>
          记得常来看看，说不定哪一天就更完了呢...</p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'construction',
  bodyClass: 'construction-page',
  components: {

  }
};
</script>
<style>
.container h4.title {
  font-size: xx-large;
}
.container p.category {
  font-size: medium;
}
</style>
