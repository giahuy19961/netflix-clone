
import React from 'react'
import { AvatarImg } from './style'
import { Content,Button,Wrap,Container,Header,Menu,Item,ProfileWrap,Input,InputWrap,Label } from './style'

function MiddleContent({children,...props}) {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}

export default MiddleContent

MiddleContent.Container = function MiddleContentContainer({children,...rest}){
    return (<Container {...rest}>{children}</Container>)
}
MiddleContent.Content = function MiddleContentContent({children},...rest){
    return (<Content {...rest}>{children}</Content>)
}
MiddleContent.Wrap = function MiddleContentWrap ({children,...rest}){
    return (<Wrap {...rest}>{children}</Wrap>)
}
MiddleContent.ProfileWrap = function MiddleContentProfileWrap({children,...rest}){
    return (<ProfileWrap {...rest}>{children}</ProfileWrap>)
}
MiddleContent.Button = function MiddleContentButton({children,...rest}){
    return (<Button {...rest}>{children}</Button>)
}
MiddleContent.AvatarImg = function MiddleContentAvatarImg({children,...rest}){
    return (<AvatarImg {...rest}>{children}</AvatarImg>)
}
MiddleContent.Header = function MiddleContentHeader({children,...rest}){
    return (<Header {...rest}>{children}</Header>)
}
MiddleContent.Menu = function MiddleContentMenu({children,...rest}){
    return (<Menu {...rest}>{children}</Menu>)
}
MiddleContent.Item = function MiddleContentItem({children,...rest}){
    return (<Item {...rest}>
            <ProfileWrap >
                <div>Standard</div>
                <Button style={{margin:"0"}}>100$</Button>
            </ProfileWrap>
        </Item>
)}
MiddleContent.Input = function MiddleContentInput({children,...rest}){
    return (
    <InputWrap>
        <Label>Email :</Label>
        <Input {...rest}>{children}</Input>
    </InputWrap>
    )
}
