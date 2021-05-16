import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Banner from '../../../../Components/Banner'
import Rows from '../../../../Components/Rows'
import requests from '../../../../request'
import NavbarHeader from '../../../../Components/NavbarHome'

function HomePage() {
    let [activeMovie,setActiveMovie] = useState({})
    let [loadingBanner,setLoading] = useState(false)

  
    const getActiveMovie = (item) =>{
        setActiveMovie(item)

    }
    
    useEffect(() => {
        const fetchActiveMovieDefault = async () =>{
          const active =  await axios({
                url:`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`,
                method:"GET"
            })
            setActiveMovie(active.data.results[0])
        }
        fetchActiveMovieDefault()
        return () => {
            
        }
    }, [])
    

    console.log(activeMovie)
    return (
        <div >
            <NavbarHeader  />
            <Banner activeMovie={activeMovie} loading = {loadingBanner}/>
            <Rows title="Netflix Original" urlNetflix={requests.fetchNetflixOriginals} getActiveMovie={getActiveMovie} isLarge={true}/>
            <Rows title="Top Rate" getActiveMovie={getActiveMovie} urlNetflix={requests.fetchTopRated} isLarge={false}/>
            <Rows title="Action Movies" getActiveMovie={getActiveMovie} urlNetflix={requests.fetchActionMovies} isLarge={false}/>
            <Rows title="Comedy Movies" getActiveMovie={getActiveMovie} urlNetflix={requests.fetchComedyMovies} isLarge={false}/>
            <Rows title="Horror Movies" getActiveMovie={getActiveMovie} urlNetflix={requests.fetchHorrorMovies} isLarge={false}/>
            <Rows title="Romance Movies" getActiveMovie={getActiveMovie} urlNetflix={requests.fetchRomanceMovie} isLarge={false}/>
            <Rows title="Documentaries" getActiveMovie={getActiveMovie} urlNetflix={requests.fetchDocumentaries} isLarge={false}/>
        </div>
    )
}

export default HomePage
