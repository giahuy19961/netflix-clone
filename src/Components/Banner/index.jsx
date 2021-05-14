import React, { useEffect } from 'react'
import { BannerButton, BannerContent, BannerHeader, BannerTitle, BannerWrap } from './style'

function Banner({activeMovie}) {
    // useEffect(() => {
    //     console.log(activeMovie)
    // }, [activeMovie])
    return (
        <BannerWrap imgUrl ={activeMovie.poster_path}>
            <BannerContent>
                <BannerHeader>{activeMovie.original_name?activeMovie.original_name:activeMovie.original_title}</BannerHeader>
                <BannerTitle>{activeMovie.overview}</BannerTitle>
                <div>
                <BannerButton>
                   Play
                </BannerButton>
                 <BannerButton>
                   Detail
                 </BannerButton>
                </div>
            </BannerContent>
        </BannerWrap>
    )
}

export default Banner
