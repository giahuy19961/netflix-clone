import AuthHome from 'Pages/Template/HomeTemplate/Auth'
import HomePage from 'Pages/Template/HomeTemplate/HomePage'
import PreviewPage from 'Pages/Template/HomeTemplate/PreviewPage'





export const routeHome = [
    {
        path:"/",
        component:HomePage,
        exact :true
    },
    {
        path:"/preview",
        component:PreviewPage,
        exact:false
    },
    {
        path:"/auth",
        component:AuthHome,
        exact:false
    }
]

export const routeAdmin = [{

}]


