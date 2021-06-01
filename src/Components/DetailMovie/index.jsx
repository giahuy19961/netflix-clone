import React from 'react'
import {Container,Wrap,Rating,Title} from './style'
function DetailShow({detail}) {
    const {vote_average,vote_count,genres,production_companies,production_countries,overview,origin_country} = detail
    if(detail !== null){
        return (
            <DetailShow.Container>
                <DetailShow.Wrap>
                     <DetailShow.Rating>
                           Rating:{vote_average} , Total rate: {vote_count}
                     </DetailShow.Rating>
                     <DetailShow.Title>
                           <p>Detail:</p>
                           {overview}
                     </DetailShow.Title>
                </DetailShow.Wrap>
                <DetailShow.Wrap>
                     <DetailShow.Title>
                           Countries: {production_countries.length>0?production_countries[0].name:"Updating" }
                     </DetailShow.Title>
                     <DetailShow.Title>
                           Production: {production_companies.length>0?production_companies.map((item,index)=>{
                               return <span key={index}>{item.name}</span>
                           }):"Updating"}
                     </DetailShow.Title>
                     <DetailShow.Title>
                           Genres: {genres.length>0?genres.map((item,index)=>(
                               index < genres.length? <span key={index}>{item.name},</span>:<span key={index}>{item.name}</span>
                           )):"Updating"}
                     </DetailShow.Title>
                </DetailShow.Wrap>
            </DetailShow.Container>
        )
    }
    
}

export default DetailShow

DetailShow.Container = function DetailShowContainer({children,...rest}){
    return (
        <Container {...rest}>{children}</Container>
    )
}
DetailShow.Wrap = function DetailShowWrap({children,...rest}){
    return (
        <Wrap {...rest}>
            {children}
        </Wrap>
    )
}
DetailShow.Rating = function DetailShowRating({children,...rest}){
    return (
        <Rating {...rest}>{children}</Rating>
    )
}
DetailShow.Title = function DetailShowTitle({children,...rest}){
    return (
        <Title {...rest}>{children}</Title>
    )
}