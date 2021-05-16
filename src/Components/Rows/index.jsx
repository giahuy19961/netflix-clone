import React,{useState,useEffect} from 'react'
import {Header,List,Image, Wrap, ImageLarge, TrailerContainer, TrailerMedia} from './style'
import axios from 'axios'
import Trailer from '../Trailer'

function Rows({title,urlNetflix,isLarge,getActiveMovie}) {
    let [movie,setMovie]= useState([])
    let [trailer,setTrailer] = useState(null)
    const url_img = "https://image.tmdb.org/t/p/original/"
    // console.log(`https://api.themoviedb.org/3${urlNetflix}`)
    const handleClick = (item) =>{
         getActiveMovie(item)
         setTrailer(item)
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
    console.log(trailer)
    return (
        <Wrap>
        <Header className="listMovie_title">{title}</Header>
        <List className="listMovie_list" > 
            {renderListMovie()}
        </List>
        <TrailerContainer>
            {/* <TrailerMedia/> */}
            {trailer !== null?<Trailer trailer={trailer}/>:<></>}
        </TrailerContainer>
        </Wrap>
    )
}

export default Rows
