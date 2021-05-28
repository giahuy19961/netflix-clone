import React,{useState} from 'react'
import { InputWrap } from './style'
import { IntroButton, IntroContent, IntroHeader, IntroTitle, IntroWrap,IntroInput } from './style'

function BannerPreview() {
    const [input,setInput] = useState(false)
    return (
        <IntroWrap>
            <IntroContent>
                <IntroHeader>
                    Welcome to NetFlix
                </IntroHeader>
                <IntroTitle>
                    here is my netflix title and Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, vitae?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto!
                    
                </IntroTitle>
                {!input?
                <IntroButton onClick={()=>setInput(true)}>
                     Register Email
                </IntroButton>:<InputWrap>
                       <IntroInput placeholder="Type your email"/>
                       <IntroButton>Start</IntroButton>
                    </InputWrap>}
            </IntroContent>
        </IntroWrap>

    )
}

export default BannerPreview
