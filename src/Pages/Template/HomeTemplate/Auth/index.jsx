import NavbarHeader from 'Components/NavbarHome'
import React,{useState}  from 'react'
import {useHistory} from 'react-router-dom'
import { Content } from './style'
import { Header } from './style'
import { Button } from './style'
import { Label } from './style'
import { Input } from './style'
import { Form } from './style'
import { Wrap } from './style'
import { Container,FormErr } from './style'

function AuthHome() {
    const history = useHistory()
    const listItemNav = [{
        name:"Sign Up",
        type:"button",
        click:function(){

        }
    }]
    const [userName,setuserName]= useState("")
    const [password,setpassword] = useState("")
    const [errMess,setErrorMess] = useState("")

    
    const handleSubmit = (e) =>{
       e.preventDefault()
       const isValid = validationLogin();
       if(!isValid) return
       
       if(userName === "GiaHuy" && password === "123456") {
           localStorage.setItem("user",userName)
           history.push("/home")
       } 

    }
   
    const handleChange = (e)=>{
        const {name,value} = e.target
        console.log(name)
        switch (name) {
            case "userName":
                    setuserName(
                       value,
                    )          
                    break;   
            case "password":         
                setpassword(
                   value,
                )           
                break;   
            default:
                break;
        }
    //    console.log(e.target.value,e.target.name)
    //     let updateUser = {
    //         [e.target.name] : e.target.value
    //     }
    //     if(typingTimeOutRef.current){
    //         clearTimeout(typingTimeOutRef.current)
    //     }
    //     typingTimeOutRef.current = setTimeout(()=>{
    //         setUser(
    //             updateUser
    //         )
    //     },300)
        
    }
    const validationLogin = () =>{
         const err = {}
         if(userName === ""){
             err.userName = "Bạn phải nhập Username"
         }
         if(password === ""){
             err.password = "Bạn phải nhập Password"
         }
         if(password.length < 6){
             err.password =" Password phải trên 6 ký tự"
         }
         setErrorMess(err)
         if(Object.keys(err).length >0) return false
         return true
    }
    
    return (
        <AuthHome.Wrap>
            <NavbarHeader style={{paddingRight:"20px"}} menuList ={listItemNav}/>
                <AuthHome.Form onSubmit={handleSubmit}>
                    <AuthHome.Header>User Login</AuthHome.Header>
                    <AuthHome.Content>
                        <AuthHome.Label>Username</AuthHome.Label>
                        <AuthHome.Input placeholder="Tên đăng nhập" name="userName" onChange={handleChange}  ></AuthHome.Input>
                        {errMess.userName? <AuthHome.FormErr>{errMess.userName}</AuthHome.FormErr>:""}
                    </AuthHome.Content>
                    <AuthHome.Content>
                        <AuthHome.Label>Password</AuthHome.Label>
                        <AuthHome.Input placeholder="Mật khẩu" name="password" onChange={handleChange} ></AuthHome.Input>
                        {errMess.password ? <AuthHome.FormErr>{errMess.password}</AuthHome.FormErr>:""}
                    </AuthHome.Content>
                    <Button type="submit" onClick={handleSubmit} >Login</Button>
                </AuthHome.Form>            
        </AuthHome.Wrap>
    )
}

export default AuthHome

AuthHome.Container = function AuthHomeContainer({children,...rest}){
    return (<Container {...rest}>{children}</Container>)
}
AuthHome.Wrap = function AuthHomeWrap ({children,...rest}){
    return (<Wrap {...rest}>{children}</Wrap>)
}
AuthHome.Form = function AuthHomeForm ({children,...rest}){
    return (<Form {...rest}>{children}</Form>)
}
AuthHome.Input = function AuthHomeInput({children,...rest}){
    return (<Input {...rest}>{children}</Input>)
}
AuthHome.Content = function AuthHomeContent({children},...rest){
    return (<Content {...rest}>{children}</Content>)
}
AuthHome.Label = function AuthHomeLabel({children},...rest){
    return (<Label {...rest}>{children}</Label>)
}

AuthHome.Header = function AuthHomeHeader({children},...rest){
    return (<Header {...rest}>{children}</Header>)
}
AuthHome.Button = function AuthHomeButton({children},...rest){
    return (<Button {...rest}>{children}</Button>)
}
AuthHome.FormErr = function AuthHomeFormErr({children},...rest){
    return (<FormErr {...rest}>{children}</FormErr>)
}