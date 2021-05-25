import React,{useEffect, useState} from 'react'
import { NavItem, NavLogo, NavMenu, NavWrap } from './style'
import logo from '../../img/netflix.svg'
import { Button } from '@material-ui/core'

function NavbarHeader({menuList}) {
    let [isChange,setChange] = useState(false)

  function setPage() {
    if(window.pageYOffset >= 80){
      setChange(true)
    } else{
      setChange(false)
    }
    // console.log(window.pageYOffset)
  }
  function renderMenuNav(){
    return menuList.map((item,index)=>{
        if(item.type === "button"){
          return(
              <Button style={{textTransform:"none",marginRight:"20px",fontSize:"1rem"  }} onClick={()=>item.click()} size="medium" variant="contained" color="secondary" key={index}>{item.name}</Button>
          )
        } else{
          return (
           <NavItem key={index}>{item.name}</NavItem>
          )
        }
     })
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", setPage);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", setPage);
      
    };
  });
    
    return (
        <NavWrap background={isChange?{
          backgroundColor:"#000",
          color:"#fff"
        }:{
          backgroundColor:"transparent",
          color:"#fff"
      }} >
            <NavLogo src={logo}/>
            <NavMenu>
              {renderMenuNav()}
            </NavMenu>
        </NavWrap>
    )
}

export default NavbarHeader
