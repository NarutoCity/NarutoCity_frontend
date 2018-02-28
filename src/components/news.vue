<template>
  <div id="news">
    <h3>新闻</h3>
    <ul>
      <li v-for="item in articleList">
        <router-link :to="{'path':'/news/detail/'+item.id}">
          <div style="width: 282px; height: 159px; overflow: hidden"><img class="lazy" width="282" height="159"
                                                                        :src="item.head_img"
                                                                        :data-original="item.head_img"></div>
        <div class="news-list"><h3 class="news-tit">{{item.title}}</h3>
          <div style="margin-bottom: 20px; display: flex; align-items: center">
            <time class="arc-time">{{item.date}}</time>
            <span class="arc-time im-left view-num-bkg" >阅读&nbsp;&nbsp;{{item.view_num}}</span> <span
            class="arc-time im-left evaluation-num-bkg" >评论&nbsp;&nbsp;{{item.comment_num}}</span> <span
            class="arc-time im-left love-num-bkg" >收藏&nbsp;&nbsp;{{item.collect_num}}</span></div>
          <p class="news-dec" >{{item.brief}}</p>
          <p style="text-align: left" > <!--v-for-start-->
            <span class="name-time-tag" >#编程语言#</span><!--v-for-end--> </p>
        </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        articleList: []
      }
    },
    mounted: function () {  // 加载文档数时，触发initArticles
      this.initArticles()
    },
    methods: {
      initArticles: function () {
        let that = this;
        this.$axios.request({
          url: 'http://127.0.0.1:8001/api/articles/',
          method: 'GET',
        }).then(function (response) {
          that.articleList = response.data.data.results
        }).catch(function (response) {
          alert(response)
        })
      }
    }
  }
</script>
