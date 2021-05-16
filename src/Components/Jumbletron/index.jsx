
import React from 'react'
import { Item,Inner,Container,Image,Title,Pane,Subtitle } from './style'

export default function Jumbletron({direction="row",children,...restProps}) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>
            {children}
            </Inner>
        </Item>
    )
}

Jumbletron.Container = function JumbletronContainer({children,...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Jumbletron.Pane = function JumbletronPane({children,...rest}){
    return <Pane {...rest}>{children}</Pane>
}

Jumbletron.Title = function JumbletronTitle({children,...rest}){
    return <Title {...rest}>{children}</Title>
}
Jumbletron.Subtitle = function JumbletronTitle({children,...rest}){
    return <Subtitle {...rest}>{children}</Subtitle>
}
Jumbletron.Image = function JumbletronTitle({...rest}){
    return <Image {...rest}/>
}
