import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player' 
import {requestsById} from '../../request'
import './style.css'
function Trailer({trailer}) {
    console.log(trailer)
    let [url,setUrl] = useState(null)
    let trailerurl = requestsById(trailer.id).fetchTrailer
    useEffect(() => {
        const  fetchTrailer = async ()=>{
             axios({
                url:`https://api.themoviedb.org/3${trailerurl}`,
                method:"GET",
            }).then((res)=>{
                setUrl(`https://www.youtube.com/watch?v=${res.key}`)
                renderPlayer()
            }).catch((err)=>{
                console.log(err)
            })
        }
        fetchTrailer()
        return () => {
            setUrl(null)
        }
    }, [trailer])
    const renderPlayer = ()=>{
          if(url === null) {
              return <></>
          } else{
              return (
                    <ReactPlayer className="trailer" width="100%" height="400px" url={url} />
              )
          }
    }
    return (
        <>
            {renderPlayer()}
        </>
    )
}

export default Trailer
