import Index from './components/index.vue'
import Course from './components/course.vue'
import Micro from './components/micro.vue'
import News from './components/news.vue'
import Login from './components/login.vue'
import CourseDeatil from './components/courseDetail.vue'
import NewsDetail from './components/newsDetail.vue'


export default{
  routes:[
    {path:'/index', component:Index},
    {path:'/courses', component:Course},
    {path:'/micro', component:Micro},
    {path:'/news', component:News},
    {path:'/login', component:Login},
    {path:'/coursedetail/:id/', component:CourseDeatil},
    {path:'/news/detail/:nid/', component:NewsDetail},
  ],
  mode: 'history'  // 去掉url中的#号
}
