import React from 'react'


// import Modal from 'Components/Modal'
import { BannerButton, BannerContent, BannerHeader, BannerTitle, BannerWrap } from './style'


function Banner({activeMovie}) {
     // useEffect(() => {
    //     console.log(activeMovie)
    // }, [activeMovie])
    
    // let [trailer,setTrailer] = useState("")
    // let [url,setUrl] = useState(null)
    
    // const getTrailer = (url) =>{
    //    return renderMovie(url)
    // }
    // useEffect(() => {
    //     let trailerurl = requestsById(trailer.id).fetchTrailer
    //     const  fetchTrailerApi = async ()=>{
    //          axios({
    //             url:`https://api.themoviedb.org/3${trailerurl}`,
    //             method:"GET",
    //         }).then((res)=>{
    //              setUrl(`https://www.youtube.com/watch?v=${res.data.results[0].key}`)
    //         }).catch((err)=>{
    //             console.log(err)
    //         })
    //     }
    //     fetchTrailerApi()
    // }, [trailer])
    return (
        <>
        <BannerWrap imgUrl ={activeMovie.poster_path}>
            <BannerContent>
                <BannerHeader>{activeMovie.original_name?activeMovie.original_name:activeMovie.original_title}</BannerHeader>
                <BannerTitle>{activeMovie.overview}</BannerTitle>
                <div style={{display:"flex"}}>
                <BannerButton to={`/show/${activeMovie.id}`}>
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
