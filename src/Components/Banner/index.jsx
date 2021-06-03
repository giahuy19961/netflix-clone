import { actAddMyList } from 'actions/myList'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


// import Modal from 'Components/Modal'
import { BannerButton, BannerContent, BannerHeader, BannerTitle, BannerWrap } from './style'
import { actRemoveMyList } from 'actions/myList';



function Banner({activeMovie,handleClick}) {
    const dispatch = useDispatch()
     const [isList, setIsList] = useState(false);
     const {list} = useSelector(state => state.myListReducer)
    const addMyList=(movie)=>{
        dispatch(actAddMyList(movie))
        setIsList(true)
    }
    const removeMyList=(movie)=>{
        dispatch(actRemoveMyList(movie))
        setIsList(false)
    }
    
    useEffect(() => {
        const index = list.findIndex(item=>item.id === activeMovie.id)
        if(index === -1){
            setIsList(false)
        } else{ 
            setIsList(true)
        }
    }, [activeMovie]);
    return (
        <>
        <BannerWrap imgUrl ={activeMovie.poster_path}>
            <BannerContent>
                <BannerHeader>{activeMovie.original_name?activeMovie.original_name:activeMovie.original_title}</BannerHeader>
                <BannerTitle>{activeMovie.overview}</BannerTitle>
                <div style={{display:"flex"}}>
                <BannerButton onClick={handleClick}>
                   Play
                </BannerButton> 
                {!isList? (<BannerButton  onClick={()=>addMyList(activeMovie)}>
                   <AddIcon/> Subcribe
                </BannerButton>):(<BannerButton onClick={()=>removeMyList(activeMovie)}>
                   <RemoveIcon/> Unsubcribe
                 </BannerButton>)}
                </div>
            </BannerContent>
        </BannerWrap>
        </>
    )
}

export default Banner
