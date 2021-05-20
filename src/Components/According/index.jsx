import React, { useState } from 'react'
import { Body,Header,Item,Container,Icon } from './style'
import {questionData} from 'json/question.json'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function According() {
    let [active,setActive] = useState(null)
    let [open,isOpen] = useState(false)

    function handleClick(id){
        if(id !== active){
            isOpen(true)
        } else{
            isOpen(!open)
        }
        setActive(id) 
    
    }
    
    return (
        <According.Container>
            {questionData.map((item)=>{
                return(
                    <According.Item key={item.id}>
                        <According.Header  onClick={()=>handleClick(item.id)}>
                        <span>{item.header}</span>
                        {open && item.id === active? <According.Icon><ExpandLessIcon fontSize="large"/></According.Icon>:<According.Icon><ExpandMoreIcon fontSize="large"/></According.Icon>}
                            </According.Header>
                        { open && item.id === active?<According.Body>{item.body}</According.Body>:<></>}  

                    </According.Item>
                )
            })}
        </According.Container>
    )
}

export default According


According.Container = function AccordingContainer({children,...rest}){
    return(<Container {...rest}>{children}</Container>)
}
According.Item = function AccordingItem({children,...rest}){
    return (<Item {...rest}>{children}</Item>)
}
According.Header = function AccordingHeader({children,...rest}){
    return (<Header {...rest}>{children}</Header>)
}
According.Body = function AccordingBody({children,...rest}){
    return (<Body {...rest}>{children}</Body>)
}
According.Icon =function AccordingIcon({children,...rest}){
    return (<Icon {...rest}>{children}</Icon>)
}