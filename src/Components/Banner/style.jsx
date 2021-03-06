import styled from 'styled-components'
import {Link } from 'react-router-dom'


export const BannerContent = styled.div`
    position:absolute;
    top:15%;
    left:5%;
    transform:transition(-50%,0);
    color : #fff;
    max-width:50%;
    padding:5%;
    font-weight:700;
    // background:linear-gradient(to bottom,rgba(0,0,0,.1) 1%,rgba(0,0,0,0));
    
`
export const BannerTitle= styled.p`
        margin:15px 0;
        max-height:52px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        

`
export const BannerWrap = styled.div`
     width:100%;
     height:650px;
     padding-bottom:10px ;
     position:relative;
     background:url(${(props)=>`https://image.tmdb.org/t/p/original/${props.imgUrl}`}) no-repeat center center ;
     background-size: 100% 100%;

`
export const BannerHeader = styled.p`
    font-size:2.5rem;
  
    
`
export const BannerButton = styled.button`
    min-width:100px;
    display:block;
    padding:0 20px;
    text-align:center;
    height:35px;
    border-radius:5%;
    border : 1px solid #fff;
    text-decoration:none;
    background-color:#grey;
    color : #000;
    margin-right:10px;
    outline:none;
    text-align:center;
    font-size:1rem;
    &:hover {
        background-color:#333;
        color:#fff;
    }
    &:disabled{
        background-color:#333;
        color:#fff;
    }
`
// export const ButtonDisabled = styled.button`
// width:100px;
// display:block;
// height:35px;
// border-radius:5%;
// border : 1px solid #fff;
// text-decoration:none;
// background-color:#fff;
// color : #000;
// margin-right:10px;
// outline:none;
// text-align:center;
// font-size:1rem;
// `