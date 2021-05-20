import React, { useEffect,useState } from 'react'
import axios from 'axios'
// import Modal from 'Components/Modal'
import { BannerButton, BannerContent, BannerHeader, BannerTitle, BannerWrap } from './style'
import {requestsById} from '../../request'

function Banner({activeMovie,renderMovie}) {
    // useEffect(() => {
    //     console.log(activeMovie)
    // }, [activeMovie])
    
    let [trailer,setTrailer] = useState("")
    let [url,setUrl] = useState(null)
    const handleClick = (movie) =>{
        if(trailer && movie === trailer){
            setTrailer("")
        } else{
            setTrailer(movie)
            getTrailer(url)
          
        }
    }
    const getTrailer = (url) =>{
       return renderMovie(url)
    }
    useEffect(() => {
        let trailerurl = requestsById(trailer.id).fetchTrailer
        const  fetchTrailerApi = async ()=>{
             axios({
                url:`https://api.themoviedb.org/3${trailerurl}`,
                method:"GET",
            }).then((res)=>{
                console.log(res,"rest")
                 setUrl(`https://www.youtube.com/watch?v=${res.data.results[0].key}`)
            }).catch((err)=>{
                console.log(err)
            })
        }

        fetchTrailerApi()
    }, [trailer])
    return (
        <>
        <BannerWrap imgUrl ={activeMovie.poster_path}>
            <BannerContent>
                <BannerHeader>{activeMovie.original_name?activeMovie.original_name:activeMovie.original_title}</BannerHeader>
                <BannerTitle>{activeMovie.overview}</BannerTitle>
                <div>
                <BannerButton type="button" onClick={()=>{handleClick(activeMovie)}} data-toggle="modal" data-target="#trailerModal">
                   Play
                </BannerButton>
                 <BannerButton>
                   Detail
                 </BannerButton>
                </div>
            </BannerContent>
        </BannerWrap>
        </>
    )
}

export default Banner
