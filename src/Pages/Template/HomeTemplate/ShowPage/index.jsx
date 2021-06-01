
import axios from 'axios';
import Banner from 'Components/Banner';
import DetailShow from 'Components/DetailMovie';
import Footer from 'Components/Footer';
import NavbarHeader from 'Components/NavbarHome';
import Rows from 'Components/Rows';
import React from 'react'
// import {useHistory} from 'react-router-dom'
import { useEffect,useState } from 'react';
import { useHistory } from 'react-router';


// https://api.themoviedb.org/3/movie/238/similar?api_key=6a9afadf143aca82889205eeff258c22&language=en-US&page=1

function ShowPage(props) {
    const history = useHistory()
    let [activeMovie,setActiveMovie] = useState({})
    const {match:{params}} = props
    const [detail,setDetail] = useState(null);
    const getActiveMovie = (item) =>{
        console.log(item)
        setActiveMovie(item)

    }
    const [err,setErr] = useState(false)
    const listMenu = [{
        name:"Home",
        type:"text"
    },
    {
        name:"Popular",
        type:"text"
    },
    {
        name:"My List",
        type:"text"
    },
    ]
    const listButton = [{     
            name:"Sign Out",
            click:function handleClick(){
                localStorage.clear()
                history.push("/")
            }
        },
    ]
    const handleClick = ()=>{

    }
    useEffect(() => {
        console.log(params.id)
        // const fetchSimilar = ()=>{
        //     axios({
        //         url:`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=6a9afadf143aca82889205eeff258c22&language=en-US&page=1`,
        //         method:"GET",
        //     }).then((res)=>{
        //          setSimilar(res.data)
        //     }).catch((err)=>{
        //        console.log(err)
        //     })
        // }
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
        // fetchSimilar();
    }, [params]);
    useEffect(() => {
        const fetchDetail = ()=>{
            axios({
                url:`https://api.themoviedb.org/3/movie/${activeMovie.id}?api_key=6a9afadf143aca82889205eeff258c22&language=en-US`,
                method:"GET"
            }).then((res)=>{
                setDetail(res.data)         
            }).catch((err)=>{
                console.log(err)
            })
        }
        fetchDetail();
    }, [activeMovie]);
  
   
    if( detail !== null) {
        return (
            <>
               <NavbarHeader buttonList={listButton}  menuList={listMenu}/>
               <Banner activeMovie={detail} handleClick={handleClick}/>
               <DetailShow detail={detail}/>
               <Rows title="Relative Movie" urlNetflix={`/movie/${params.id}/similar?api_key=6a9afadf143aca82889205eeff258c22&language=en-US&page=1`} getActiveMovie={getActiveMovie} isLarge={false} player={false}/>
               <Footer/>
            </>
        )
    } else  {
        return (
            <div>
               Phim này không tồn tại
            </div> 
        )
    } 
  
}

export default ShowPage
