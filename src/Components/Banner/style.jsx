import styled from 'styled-components'


export const BannerContent = styled.div`
    position:absolute;
    top:15%;
    left:5%;
    transform:transition(-50%,0);
    color : #fff;
    max-width:50%;
    padding:5%;
    font-weight:700;
    
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
     height:500px;
     padding-bottom:10px ;
     position:relative;
     background:url(${(props)=>`https://image.tmdb.org/t/p/original/${props.imgUrl}`}) no-repeat center center ;
     background-size: 100% 500px;

`
export const BannerHeader = styled.p`
    font-size:2.5rem;
  
    
`
export const BannerButton = styled.button`
    width:100px;
    height:35px;
    border-radius:5%;
    border : 1px solid #fff;
    background-color:transparent;
    color : #fff;
    margin-right:10px;
    outline:none;
    font-size:1rem;
    &:hover {
        background-color:#fff;
        color:#000
    }
`