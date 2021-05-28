import styled from 'styled-components'

const urlBg = `https://assets.nflxext.com/ffe/siteui/vlv3/7a33204b-893d-4792-8494-b9d6cbc73848/1d7da70d-9232-4f2c-8f6f-0b363df08284/VN-en-20210502-popsignuptwoweeks-perspective_alpha_website_small.jpg`

export const IntroWrap = styled.div`
   background : url(${urlBg}) no-repeat center center ;
   width:100vw;
   height:100vh;
   border-bottom:2px solid grey;
   position:relative;

`
export const IntroContent= styled.div`
   position:absolute;
   width:50%;
   height:50%;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
//    background-color:rgba(232, 232, 232, 0.5);
   background-color:transparent;
   text-align:center;
   

`
export const IntroHeader =styled.h2`
   color :#fff;
   font-size:3rem;
   @media (max-width:600px){
       font-size:2.2rem;
   }
`
export const IntroTitle = styled.p`
   font-size:1.5rem;
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
   color :#fff;
   margin-bottom:20px;
   max-height:110px;
   @media (max-width:600px){
    font-size:1.2rem;
}
`

export const IntroButton = styled.button`
    padding:10px;
    width:160px;
    height:60px;
    background-color:#fff;
    color :red;
    border-color: transparent;
    border-radius:3%;
    outline:none;
    &:hover{
        background-color:red;
        color:#fff;
        transform:scale(1.09);
        font-size:1.3rem
        
    }
`
export const IntroContainerWrap = styled.div`
    display:flex;
    justify-content:center;
    background-color:#000;
    border-top:3px solid grey;
    border-bottom:3px solid grey;

`
export const IntroContainerItem = styled.div`
    max-width:50%;
    padding:5%;
`
export const IntroContainerHeader = styled.h3`
     font-size:3rem;
     color:#fff;

`
export const InputWrap = styled.div`
        min-width:500px;
        height:60px;
        display:flex;
        justify-content:space-between;
`
export const IntroInput = styled.input`
     width:80%;
     height:100%;
     padding:10px 30px;
     color:#333;
     font-size:1.6rem;
     border-radius:5px;
     border-color:#fff;
     outline:none;

`