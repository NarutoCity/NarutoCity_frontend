<template>
  <div id="courseDetail">
    <h3>课程详细</h3>
    <h1>{{ title }}</h1>
    <h2>{{ summary }}</h2>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        summary: '',
      }
    },
    mounted: function () {
      this.initCourseDetail()
    },
    methods:{
      initCourseDetail(){
        let nid = this.$route.params.id;
        let that = this;
        let url = 'http://127.0.0.1:8000/api/coursedetail/' + nid;
        this.$axios.request({
          url: url,
          method: 'GET',
          responseType: 'json'
        }).then(function (response) {
          that.title = response.data.title;
          that.summary = response.data.summary;
        })
      }
    }
  }
</script>
