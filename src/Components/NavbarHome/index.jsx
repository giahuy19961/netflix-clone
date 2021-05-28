import React,{useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import { NavItem, NavLogo, NavMenu, NavWrap } from './style'
import logo from '../../img/netflix.svg'
import { Menu,Button,MenuItem } from '@material-ui/core'
import { UserWrap ,UserLogo } from './style'
import { NavLogoLink } from './style'


function NavbarHeader({menuList,buttonList}) {
    const history = useHistory()
    let [isChange,setChange] = useState(false)
    const user = localStorage.getItem("user")
    const [anchorEl, setAnchorEl] = useState(null);

   
  function setPage() {
    if(window.pageYOffset >= 80){
      setChange(true)
    } else{
      setChange(false)
    }
    // console.log(window.pageYOffset)
  }
  function renderMenuNav(){
    if(menuList.length !== 0){
      return menuList.map((item,index)=>{
            return (
             <NavItem key={index}>{item.name}</NavItem>
            )
          }
       )
    }
  }
  function renderButtonNav(){
      return buttonList?.map((item,index)=>{
        return   user?<></>:<Button style={{textTransform:"none",marginRight:"20px",fontSize:"1rem"  }} onClick={()=>item.click()} size="medium" variant="contained" color="secondary" key={index}>{item.name}</Button>
      })
        
      
  }
  function renderProfile(){
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = (action) => {
      setAnchorEl(null);
      switch (action) {
        case "logout":
          localStorage.clear();
          break;
        case "profile":
          history.push("/profile")
          break;
        default:
          break;
      }
    };

  return (
    <div>
      <UserWrap aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <UserLogo src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a9/a9721c711dde6edd8aa3c66f719011205b292dc3_full.jpg" alt="user-avt"/>
       <span style={{padding:"0 10px"}}> Gia Huy</span>
      </UserWrap>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>handleClose("profile")}>Profile</MenuItem>
        <MenuItem onClick={()=>handleClose("my account")}>My account</MenuItem>
        <MenuItem onClick={()=>handleClose("logout")}>Logout</MenuItem>
      </Menu>
    </div>
  );
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
            <NavLogoLink to={user?"/home":"/"}>
              <NavLogo  src={logo}/>
            </NavLogoLink>
            <NavMenu>
              {renderMenuNav()}
            </NavMenu>
            {user?renderProfile():renderButtonNav()}
        </NavWrap>
    )
}




export default NavbarHeader


