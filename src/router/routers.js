import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
export default [
  {
    path:'/msite',
    component:Msite,
    meta:{
      showFooter:true
    }
  },{
    path:'/order',
    component:Order,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/search',
    component:Search,
    meta:{
      showFooter: true
    }
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/shop',
    component:Shop,
    children: [
      {
        path: '/shop/goods',
        component: ShopGoods
      },
      {
        path: '/shop/ratings',
        component: ShopRatings
      },
      {
        path: '/shop/info',
        component: ShopInfo
      },

      {
        path: '',
        redirect: '/shop/goods'
      }
    ]
  },


  {
    path:'/',
    redirect:'/msite'
  }
]
