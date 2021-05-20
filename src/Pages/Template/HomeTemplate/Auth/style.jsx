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
   max-width:500px;
   max-height:500px;
   position:absolute;
   top:50%;
   left:50%;
   transform:transition(-50%,-50%);
   display:flex;
   flex-direction:column;
   justify-content:center;
   background:grey;
   

`
export const Input = styled.input`
    display:block;
    width:80%;
    height:30px;
    margin:10px auto;

`
