import styled from "styled-components"

export const Wrap = styled.div`
   overflow:hidden;
   background-color:#000;
   color:#fff;
   margin-bottom:30px;
`
export const Header = styled.div`
    font-size:2rem;
    padding : 10px 20px;
    
`

export const Image = styled.img`
    width:15%;
    max-height:auto;
    display:block;
    margin-right:10px;
    transition: transform .45s;
    object-fit:contain;
    &:hover{
        transform:scale(1.08);
        opacity:1;
        z-index:100;
    }
`
export const ImageLarge = styled.img`
    max-width:100%;
    max-height:250px;
    position:relative;
    margin-right:10px;
    transition: transform .45s;
    object-fit:contain;
    &:hover{
        transform:scale(1.09);
        opacity:1;
        z-index:100;
    }
`
export const List = styled.div`
    display:flex;
    justify-content:space-between;
    overflow-x:hidden;
    position:relative;
    margin:20px;
    padding:10px;

    &:hover{
        overflow-x:scroll;
        scrollbar-width: thin;
       
    }
    &::-webkit-scrollbar
    {   
        width: thin;
        background-color: #F5F5F5;
    }
    &::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }
    &::-webkit-scrollbar-thumb
    {
        background-color: #333;
        border: 1px solid #555555;
    }
    
`
// export const Item = styled.div`
//      position:relative;
//      width:250px;
//      max-height:250px;
// `
export const PlaytrailerBtn = styled.div`
     position:absolute;
     top:50%;
     left:50%;
     transform: translate(-50%,-50%);
     width:20px;
     height:20px;
     border:1px solid #fff;
     border-radius:50%;
`
export const TrailerContainer = styled.div`
   position:relative;
   max-height:400px;
   width:80%;
   margin:auto;
   overflow:hidden;
   transform: all ease 1s;
   
`
export const TrailerMedia = styled.video`
   position:absolute;
   top:0;
   left:0;
   width:400px;

`