import React from 'react'
import Jumbletron from 'Components/Jumbletron'
import {Jumbledata} from 'json/jumbletron.json'


function PreviewPage() {
    // let JumbleData = json.parse(data)
    return (
        <Jumbletron.Container>
            {Jumbledata.map((item,index)=>{
                return (
                    <Jumbletron direction={item.direction}>
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
    )
}

export default PreviewPage
