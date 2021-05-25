import React from 'react'
import Jumbletron from 'Components/Jumbletron'
import {Jumbledata} from 'json/jumbletron.json'
import NavbarHeader from 'Components/NavbarHome'
import BannerPreview from 'Components/BannerPreview'
import Footer from 'Components/Footer'
import According from 'Components/According'
import { useHistory } from 'react-router'


function PreviewPage() {
    const history = useHistory()
    // let JumbleData = json.parse(data)
    const listItemNav = [{
        name:"Sign In",
        type:"button",
        click:function handleClick(){
            history.push("/authhome")
            
        }
    }]
    return (
        <>
        <NavbarHeader menuList ={listItemNav}/>
        <BannerPreview/>
        <Jumbletron.Container>
            {Jumbledata.map((item,index)=>{
                return (
                    <Jumbletron key={index} direction={item.direction}>
                        <Jumbletron.Pane>
                             <Jumbletron.Title>{item.title}</Jumbletron.Title>
                             <Jumbletron.Subtitle>{item.subTitle}</Jumbletron.Subtitle>
                        </Jumbletron.Pane>
                        <Jumbletron.Pane>
                            <Jumbletron.Image src={item.image} alt={item.alt}/>
                        </Jumbletron.Pane>
                    </Jumbletron>
                )
            })}
        </Jumbletron.Container>
        <According/>
        <Footer/>
        </>
    )
}

export default PreviewPage
