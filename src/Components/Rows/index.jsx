import React,{useState,useEffect} from 'react'
import {Header,List,Image, Wrap, ImageLarge} from './style'
import axios from 'axios'

function Rows({title,urlNetflix,isLarge,getActiveMovie}) {
    let [movie,setMovie]= useState([])
    const url_img = "https://image.tmdb.org/t/p/original/"
    // console.log(`https://api.themoviedb.org/3${urlNetflix}`)
    const handleClick = (item) =>{
         getActiveMovie(item)
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
    return (
        <Wrap>
        <Header className="listMovie_title">{title}</Header>
        <List className="listMovie_list" > 
            {renderListMovie()}
        </List>
        </Wrap>
    )
}

export default Rows
