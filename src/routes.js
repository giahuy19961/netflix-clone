
import AuthHome from 'Pages/Template/HomeTemplate/Auth'
import HomePage from 'Pages/Template/HomeTemplate/HomePage'
import PreviewPage from 'Pages/Template/HomeTemplate/PreviewPage'





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
    }
]

export const routeAdmin = [{

}]


