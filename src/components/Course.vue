<template>
  <div id="course">
    <h3>课程</h3>
    <ul>
      <li v-for="item in courseList">
        <router-link :to="{'path': '/coursedetail/' +item.id}">
          <p>{{ item.name }}</p>
        </router-link>
        <p>{{ item.brief }}</p>
        <p>级别：{{ item.level }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Course',
    data() {
      return {
        courseList: []
      }
    },
    // 页面加载时就执行
    mounted: function () {
      this.initCourses()
    },
    methods: {
      initCourses() {
        let that = this;
        this.$axios.request({
          url: this.$store.state.apiList.courses,
          responseType: 'json'
        }).then(function (response) {
          that.courseList = response.data
        })
      }
    }
  }
</script>

<style>

</style>
