<template>
  <div id="courseDetail">
    <h3>课程详细</h3>
    <div class="titleWrap">
      <div class="title-content">
        <span>专题课程</span>
        <h3>{{data.name}}</h3>
        <span>
          {{data.course_slogan}}
        </span>
      </div>
    </div>

    <div class="videoWrap">
      <div class="video-main">
        <!--这里放视频组件-->
      </div>
    </div>

    <div class="course-content">
      <div class="cont-head">
        <ul class="cont-head-wrap">
          <li class="head-item">课程概述</li>
          <li class="head-item">课程章节</li>
          <li class="head-item">用户评价（<!-- 这里反向查询，填入评价的数量 --> # ）</li>
          <li class="head-item">常见问题<!-- 从 --></li>
        </ul>
      </div>

      <div class="content-body">
        <div class="body-summary">
          <div class="summary-item">
            <h4 class="item-title">课程概述</h4>
            <p>{{data.brief}}</p>
            <div>
              <span class="cou-ceil">学习时间：{{data.hours}}</span>
              <span class="cou-ceil">难度：{{data.level}}</span>
              <span class="cou-ceil">已学习人数：<!-- 学习人数从数据库反向查询 -->#</span>
            </div>
            <div>
              <ul>
                <li v-for="policy in data.price_policy">
                  <span>{{policy.price}}</span>
                  <span>{{policy.valid_period}}</span>
                </li>
              </ul>
            </div>
            <div>
              开课时通知我
            </div>
          </div>

          <div class="summary-item">

          </div>

          <div class="summary-item">
            <h4>为什么学习这门课程？</h4>
            <div>
              <div>
                <p>{{data.why_study}}</p>
              </div>
              <ul>
                <li><!-- 广告时间 --></li>
              </ul>
            </div>
          </div>
          <div class="summary-item">
            <h4>我将学到哪些内容？</h4>
            <p>{{data.what_to_study_brief}}</p>
            <div>
              <div>
                <div>
                  <span>PROJECT #<!-- #为数字，数据库CourseOutlines表中有关于顺序的字段 --></span>
                </div>
                <div>
                  <h5><!-- 数据库CourseOutlines表中的标题字段 ---></h5>
                  <pre>
                      <!-- 数据库CourseOutlines表中的内容字段 -->
                  </pre>
                </div>
                <!-- v-for填充CourseOutlines表中的数据 -->
              </div>
            </div>
          </div>
          <div class="summary-item">
            <div>
              <h4>此项目如何有助于我的职业生涯？</h4>
              <p>{{data.career_improvement}}</p>
            </div>
            <ul>
              <li>
                <h4>课程先修要求</h4>
                <p>{{data.prerequisite}}</p>
              </li>
              <li>
                <h4>推荐课程</h4>
                <span>若你缺乏相关经验，建议学习以下课程</span>
                <ul>
                  <li v-for="rec_course in data.recommend_courses">
                    <router-link :to="{name:'CourseDetail',params:{id:rec_course.id}}">{{rec_course.name}}</router-link>
                  </li>
                </ul>
              </li>
            </ul>

          </div>
          <div class="summary-item">其他版块</div>
        </div>
        <div class="body-chapter" style="display: none">课程章节详细</div>
        <div class="body-evaluation" style="display: none">用户评价详细</div>
        <div class="body-question" style="display: none">常见问题详细</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CourseDetail',
    data() {
      return {
        data: null
      }
    },
    mounted: function () {
      this.initCourseDetail()
    },
    methods: {
      initCourseDetail() {
        let that = this;
        let url = this.$store.state.apiList.course + this.$route.params.id + '/';
        this.$axios.request({
          url: url,
          responseType: 'json'
        }).then(function (response) {
          that.data = response.data
          console.log(1)
        })
      }
    }
  }
</script>
