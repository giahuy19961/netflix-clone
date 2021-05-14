import React,{useEffect, useState} from 'react'
import { NavItem, NavLogo, NavMenu, NavWrap } from './style'
import logo from '../../img/netflix.svg'

function NavbarHeader() {
    let [isChange,setChange] = useState(false)

  function setPage() {
    if(window.pageYOffset >= 80){
      setChange(true)
    } else{
      setChange(false)
    }
    // console.log(window.pageYOffset)
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
              <NavItem>Trang Chủ</NavItem>
              <NavItem>Phim TH</NavItem>
              <NavItem>Phim</NavItem>
              <NavItem>Mới thêm</NavItem>
            </NavMenu>
        </NavWrap>
    )
}

export default NavbarHeader
