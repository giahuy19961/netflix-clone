
import AuthHome from 'Pages/Template/HomeTemplate/Auth'
import HomePage from 'Pages/Template/HomeTemplate/HomePage'
import PreviewPage from 'Pages/Template/HomeTemplate/PreviewPage'
import ProfilePage from 'Pages/Template/HomeTemplate/ProfilePage'
import ShowPage from 'Pages/Template/HomeTemplate/ShowPage'





export const routeHome = [
    
    {
        path:"/",
        component:PreviewPage,
        exact:true
    },
    {
        path:"/authhome",
        component:AuthHome,
        exact:false
    },
    {
        path:"/home",
        component:HomePage,
        exact :false,
    },
    {
        path:"/profile",
        component:ProfilePage,
        exact:false,
    },
    {
        path:"/show/:id",
        component:ShowPage,
        exact:false,
    }
]

export const routeAdmin = [{

}]


