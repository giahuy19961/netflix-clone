import styled from 'styled-components'

export const Item = styled.div`
   display:flex;
   border-bottom:8px solid #222;
   padding:50px 5%;
   color:white;
   overflow:hidden;
  

`
export const Inner = styled.section`
   display:flex;
   align-item:center;
   justify-content:space-between;
   flex-direction:${({direction})=>direction};
   max-width:1100px;
   margin:auto;
   width:100%;
   @media (max-width :1000px ){
       flex-direction:column;
   }

`
export const Container = styled.div`
   @media (min-width:1000px){
       ${Item}:last-of-type h2{
           margin-bottom:50px;
       }
   }


`
export const Pane = styled.div`
   width:50%;
   display:flex;
   flex-direction:column;
   justify-content:center;

`
export const Title = styled.h1`
    font-size:50px;
    @media (max-width:600px){
        font-size:35px;
    }
`

export const Subtitle = styled.h2`
   font-size:26px;
   font-weight:normal;
   line-height:normal;
   @media (max-width:600px){
       font-size:15px;
   }
`

export const Image = styled.img`
   max-width:100%;
   height:auto;

`
