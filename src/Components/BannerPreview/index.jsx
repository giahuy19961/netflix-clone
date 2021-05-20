import React from 'react'
import { IntroButton, IntroContent, IntroHeader, IntroTitle, IntroWrap } from './style'

function BannerPreview() {
    return (
        <IntroWrap>
            <IntroContent>
                <IntroHeader>
                    Hello NetFlix
                </IntroHeader>
                <IntroTitle>
                    here is my netflix title and Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, vitae?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto!
                </IntroTitle>
                <IntroButton>
                    Sign In
                </IntroButton>
            </IntroContent>
        </IntroWrap>

    )
}

export default BannerPreview
