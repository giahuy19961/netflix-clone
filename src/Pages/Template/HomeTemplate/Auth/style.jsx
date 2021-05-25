import styled from 'styled-components'
const urlBg = `https://assets.nflxext.com/ffe/siteui/vlv3/7a33204b-893d-4792-8494-b9d6cbc73848/1d7da70d-9232-4f2c-8f6f-0b363df08284/VN-en-20210502-popsignuptwoweeks-perspective_alpha_website_small.jpg`

export const Wrap = styled.div`
    width:100%;
    height:100vh;
    background:url(${urlBg});
    background-repeat: no-repeat;
    background-size: auto;
    position:relative;

`
export const Container = styled.div`
   max-width:1100px;
   height:calc(100% -80px);
   margin:auto;
  
`
export const Form = styled.form`
   min-width:500px;
   height:auto;
   position:absolute;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
   display:flex;
   flex-direction:column;
   justify-content:center;
   background-color: rgba(0,0,0,.75);
   padding:10px 10px 30px 10px;
   

`
export const Header = styled.h2`
   font-size:2.5rem;
   text-align:center;
   margin: 10px auto;
`
export const Input = styled.input`
    display:block;
    height:40px;
    width:100%;
    border:1px solid #000;
    outline:none;
    padding:10px;
    background: #333;
    border-radius:5px;
   

`
export const Label = styled.span`
    display:block;
    font-size:1rem;
    padding-bottom:20px;
`
export const Content = styled.div`
   padding :25px;
   
`
export const Button = styled.button`
   max-width:100px;
   outline:none;
   font-size:1rem;
   border:none;
   margin:auto;
   padding:10px 25px;
   background-color: #ff5057;
   border-radius:5%;
   color:#fff;
   &:hover {
     background-color:#f06292;
   }
   
`
export const FormErr = styled.span`
    display:block;
    font-size:1rem;
    padding-bottom:20px;
    color:red;
`