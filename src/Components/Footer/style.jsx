import styled from 'styled-components'
export const Wrap = styled.div`
    border-top:8px solid #222;

`
export const Container = styled.div`
    max-width:1100px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:60px auto;

`
export const Title = styled.h2`
    margin-bottom:30px;
    font-size:35px;
    font-weight:bold;
    @media (max-width:600px){
        font-size:25px;
    }
`
export const Menu = styled.ul`
   display:flex;
   justify-content:left;
   flex-wrap:wrap;
   list-style:none;
`
export const Item = styled.li`
  width:25%;
  padding:20px 0;
  @media (max-width:1000px  ){
      width:33%;
  }
`
export const Link = styled.a`
    text-decoration:none;
    color:#222;
    &:hover{
        color:blue;
    }
  
     
`
export const Language = styled.select``