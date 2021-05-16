import styled from "styled-components"

export const Wrap = styled.div`
   overflow:hidden;
   background-color:#000;
   color:#fff;
`
export const Header = styled.div`
    font-size:2rem;
    padding : 10px 20px;
    
`

export const Image = styled.img`
    width:100%;
    max-height:100px;
    margin-right:10px;
    transition: transform .45s;
    object-fit:contain;
    &:hover{
        transform:scale(1.08);
        opacity:1;
    }
`
export const ImageLarge = styled.img`
    width:100%;
    max-height:250px;
    position:relative;
    margin-right:10px;
    transition: transform .45s;
    object-fit:contain;
    &:hover{
        transform:scale(1.09);
        opacity:1;
    }
`
export const List = styled.div`
    display:flex;
    justify-content:space-between;
    overflow-x:scroll;
    position:relative;
    padding:20px;
    &::-webkit-scrollbar {
        display:none
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