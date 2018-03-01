import Index from './components/index.vue'
import Course from './components/Course.vue'
import Micro from './components/micro.vue'
import News from './components/news.vue'
import Login from './components/login.vue'
import CourseDeatil from './components/CourseDetail.vue'


export default {
  routes: [
    {path: '/index', component: Index, name: 'Index'},
    {path: '/courses', component: Course, name: 'Course'},
    {path: '/micro', component: Micro, name: 'Micro'},
    {path: '/news', component: News, name: 'News'},
    {path: '/login', component: Login, name: 'Login'},
    {path: '/coursedetail/:id/', component: CourseDeatil, name: 'CourseDetail'},
  ],
  mode: 'history'  // 去掉url中的#号
}
