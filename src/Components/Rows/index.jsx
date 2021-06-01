import React,{useState,useEffect} from 'react'
import {Header,List,Image, Wrap, ImageLarge, TrailerContainer, TrailerMedia} from './style'
import axios from 'axios'
import {requestsById} from '../../request'
import Trailer from '../Trailer'

function Rows({title,urlNetflix,isLarge,getActiveMovie,player}) {
    let [movie,setMovie]= useState([])
    let [trailer,setTrailer] = useState("")
    let [url,setUrl] = useState(null)
    const url_img = "https://image.tmdb.org/t/p/original/"
    const handleClick = (item) =>{
        if(trailer && item === trailer){
            setTrailer("")
        } else{
            getActiveMovie(item)
            setTrailer(item)
        }
        
    }
    const renderListMovie = ()=>{
        return movie?.map((item,index)=>{
            if(isLarge){
                return (
                         <ImageLarge key={index} type="button" onClick={()=>handleClick(item)} className="listMovie_item" src={`${url_img}${item.backdrop_path}`} alt={item.name}/>
    
                    )}
              return  <Image key={index} onClick={()=>handleClick(item)}  className="listMovie_item" src={`${url_img}${item.backdrop_path}`} alt={item.name}/>

        })
    }
  
    useEffect(() => {
        let trailerurl = requestsById(trailer.id).fetchTrailer
        const  fetchTrailer = async ()=>{
             axios({
                url:`https://api.themoviedb.org/3${trailerurl}`,
                method:"GET",
            }).then((res)=>{
                setUrl(`https://www.youtube.com/watch?v=${res.data.results[0].key}`)
            }).catch((err)=>{
                console.log(err)
            })
        }

        fetchTrailer()
    }, [trailer])
    useEffect(()=>{
       const fetchUrlMovie = () =>{
           axios({
               url:`https://api.themoviedb.org/3${urlNetflix}`,
               method:"GET"
           }).then((res)=>{
               setMovie(res.data.results)
           }).catch((err)=>{
               console.log(err)
           })
           
       }
       fetchUrlMovie()
    },[])
    return (
        <Wrap>
        <Header className="listMovie_title">{title}</Header>
        <List className="listMovie_list" > 
            {renderListMovie()}
        </List>
        {player?<TrailerContainer>
            {/* <TrailerMedia/> */}
            {url !== null && trailer ?<Trailer url={url}/>:<></>}
        </TrailerContainer>:""}
        </Wrap>
    )
}

export default Rows
