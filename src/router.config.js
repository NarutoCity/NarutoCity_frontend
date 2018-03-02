import Index from './components/Index.vue'
import Course from './components/Course.vue'
import News from './components/News.vue'
import Login from './components/Login.vue'
import CourseDetail from './components/courseDetail.vue'
import NewsDetail from './components/NewsDetail.vue'

export default {
  routes: [
    {path: '/index', component: Index, name: 'Index'},
    {path: '/login', component: Login, name: 'Login'},
    {path: '/news', component: News, name: 'News'},
    {path: '/news/detail/:id', component: NewsDetail, name: 'NewsDetail'},
    {path: '/courses', component: Course, name: 'Course'},
    {path: '/coursedetail/:id/', component: CourseDetail, name: 'CourseDetail'},

  ],
  mode: 'history'  // 去掉url中的#号
}
