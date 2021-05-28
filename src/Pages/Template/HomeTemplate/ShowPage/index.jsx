
import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';

// https://api.themoviedb.org/3/movie/238/similar?api_key=6a9afadf143aca82889205eeff258c22&language=en-US&page=1

function ShowPage(props) {
    const {match:{params}} = props
    const [detail,setDetail] = useState(null);
    const [similar,setSimilar] = useState(null);
    if(detail !== null && similar !==null ){
        console.log(detail)
        console.log(similar)
    }
    
    useEffect(() => {
        const fetchSimilar = ()=>{
            axios({
                url:`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=6a9afadf143aca82889205eeff258c22&language=en-US&page=1`,
                method:"GET",
            }).then((res)=>{
                 setSimilar(res.data)
            }).catch((err)=>console.log(err))
        }
        const fetchDetail = ()=>{
            axios({
                url:`https://api.themoviedb.org/3/movie/${params.id}?api_key=6a9afadf143aca82889205eeff258c22&language=en-US`,
                method:"GET"
            }).then((res)=>{
                setDetail(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
        fetchDetail();
        fetchSimilar();
    }, [params]);
    return (
        <div>
          
        </div>
    )
}

export default ShowPage
