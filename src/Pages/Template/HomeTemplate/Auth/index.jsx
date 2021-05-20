import NavbarHeader from 'Components/NavbarHome'
import React from 'react'
import { Input } from './style'
import { Form } from './style'
import { Wrap } from './style'
import { Container } from './style'

function Auth() {
    const listItemNav = [{
        name:"Sign Up",
        type:"button"
    }]
    return (
        <Auth.Wrap>
            <NavbarHeader style={{paddingRight:"20px"}} menuList ={listItemNav}/>
                <Auth.Form>
                    <Auth.Input></Auth.Input>
                    <Auth.Input></Auth.Input>
                </Auth.Form>
        </Auth.Wrap>
    )
}

export default Auth

Auth.Container = function AuthContainer({children,...rest}){
    return (<Container {...rest}>{children}</Container>)
}
Auth.Wrap = function AuthWrap ({children,...rest}){
    return (<Wrap {...rest}>{children}</Wrap>)
}
Auth.Form = function AuthForm ({children,...rest}){
    return (<Form {...rest}>{children}</Form>)
}
Auth.Input = function AuthInput({children,...rest}){
    return (<Input {...rest}>{children}</Input>)
}