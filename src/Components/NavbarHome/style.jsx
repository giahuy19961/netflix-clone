import styled from  'styled-components'

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
    justify-content:space-between;
    // transition: all 0.5;

    
`
export const NavLogo = styled.img`
    width:300px;
    height:80px;
    
`
export const NavMenu = styled.ul`
    padding:25px 0;
    margin:0;
    display:flex;
    justify-content:space-around;
    min-width:500px;

`
export  const NavItem = styled.li`
   padding:0;
   margin:0;
   list-style:none;

`