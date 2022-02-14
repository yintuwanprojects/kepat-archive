<template>
  <div>
    <div class="page-header page-header-small clear-filter" filter-color="yellow">
      <parallax
        class="page-header-image"
        style="background-image: url('img/sydt/header-3.jpeg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title chn-zh">留言板</h1>
          <div class="text-center">
            <a @click="emailMessage" class="btn btn-primary btn-icon btn-round">
              <i class="now-ui-icons ui-1_email-85"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row" v-for="i in rowCount" :key="i">
          <div v-for="(item, index) in messages.slice((i - 1) * itemsPerRow, i * itemsPerRow)" :key="index"
               class="col-lg-4 col-md-6 col-sm-12 mt-2">
            <card class="card-nav-tabs" header-classes="card-header-success">
              <blockquote class="blockquote blockquote-primary mb-0">
                <p>{{ item.body }}</p>
                <footer class="blockquote-footer">{{ item.name }}</footer>
              </blockquote>
            </card>
          </div>
        </div>
        <div class="separator separator-primary"></div>
      </div>
    </div>
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">投稿模板</h2>
        <p class="description">所有内容皆为人工审核，回复慢请见谅。如有急事请直接微博私信作者，感恩！</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="昵称"
              v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                v-model="form.message"
                placeholder="留言内容"
              ></textarea>
            </div>
            <div class="send-button">
              <n-button @click="emailWithTemplate" type="primary" round block size="lg"
                >发送邮件</n-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import messages from '../../public/static/messages.json'
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        message: ''
      },
      windowWidth: window.innerWidth,
      messages: messages
    };
  },
  computed:{
    itemsPerRow() {
      return (this.windowWidth >= 1080) ? 3 : (this.windowWidth >= 720) ? 2 : 1
    },
    rowCount() {
      return Math.ceil(this.messages.length / this.itemsPerRow);
    }
  },
  methods: {
    emailMessage: function () {
      let c = 'mailto:yintuwanprojects@yahoo.com?subject=电台记事簿留言板&body=（所有内容皆为人工审核，回复慢请见谅！）';
      window.open(c);
    },
    emailWithTemplate: function () {
      let c = 'mailto:yintuwanprojects@yahoo.com?subject=电台记事簿留言板&body='+
          '投稿人昵称：' + this.form.firstName + '%0D%0A' + '投稿正文：' + this.form.message;
      window.open(c);
    }
  }
};
</script>
<style></style>
