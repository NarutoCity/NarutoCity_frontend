import Index from './components/index.vue'
import Course from './components/course.vue'
import Micro from './components/micro.vue'
import News from './components/news.vue'
import NewsDetail from './components/NewsDetail.vue'
import Login from './components/login.vue'
import CourseDeatil from './components/courseDetail.vue'


export default{
  routes:[
    {path:'/index', component:Index},
    {path:'/courses', component:Course},
    {path:'/micro', component:Micro},
    {path:'/news', component:News},
    {path:'/news/detail/:id', component:NewsDetail},
    {path:'/login', component:Login},
    {path:'/coursedetail/:id/', component:CourseDeatil},
  ],
  mode: 'history'  // 去掉url中的#号
}
