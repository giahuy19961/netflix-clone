import { Avatar, Menu } from '@material-ui/core'
import styled from  'styled-components'
import {Link} from 'react-router-dom'

export const NavWrap = styled.div`
    width:100%;
    height:80px;
    position:fixed;
    top:0;
    left:0;
    z-index:999;
    background-color:${props=>props.background.backgroundColor};
    color:${props=>props.background.color};
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media (max-width:600px){
       justify-content:space-around;
    }

    
`
export const NavLogoLink = styled(Link)`
    width:200px;
    height:80px;
`
export const NavLogo = styled.img`
   height:100%;
   width:200px;
   @media (max-width:600px){
    width:100px;
 }
`
export const NavMenu = styled.ul`
    padding:25px 0;
    margin:0;
    display:flex;
    justify-content:flex-start;
    min-width:500px;
    @media (max-width:600px){
        display:none;
        
       }
    @media (max-width:857px){
        min-width:200px;
    }
`
export  const NavItem = styled.li`
   padding:0;
   margin-right:40px;
   list-style:none;
   font-size:1.2rem;
   align-self:center;
   @media (max-width:830px){
       margin-right:20px;
   }
   
`
export const UserWrap =styled.div`
    display:flex;
    padding:10px;
    justify-content:space-between;
    align-items:center;
    @media (max-width:600px){
        width:100%;
        // display:block
        justify-content:center;
    }
`
export const UserLogo = styled(Avatar)`
     
`


