import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/views/home/Home'
import CityPicker from '@/views/citypicker/CityPicker'
import Movies from '@/views/home/movies/Movies.vue'
import Profile from '@/views/home/profile/Profile'
import Theaters from '@/views/home/therters/Theaters'
import InTheaters from '@/views/home/movies/InTheaters'
import ComingSoon from '@/views/home/movies/ComingSoon'


Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'home',
        component:Home,
        redirect:'/home/movies',    
        children:[
            {
                path:'movies',
                component:Movies,
                name:'movies',
                redirect:'/home/movies/intheaters',
                children:[
                    {
                        path:'intheaters',
                        name:'intheaters',
                        component:InTheaters
                    },
                    {
                        path:'comingsoon',
                        name:'comingsoon',
                        component:ComingSoon
                    },
                ]
            },
            {
                path:'profile',
                component:Profile,
                name:'profile'
            },
            {
                path:'theaters',
                component:Theaters,
                name:'theaters'
            },
        ]
    },
    {
        path:'/citypicker',
        name:'citypicker',
        component:CityPicker
    },
]

const router = new VueRouter({
    mode:'history',
    routes
})
export default router