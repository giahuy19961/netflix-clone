import React from 'react'
import NavbarHeader from '../../../../Components/NavbarHome'
import { IntroButton, IntroContainerDetail, IntroContainerHeader, IntroContainerItem, IntroContainerMedia, IntroContainerWrap, IntroContent, IntroHeader, IntroTitle, IntroWrap } from './style'

function Introduction() {
    return (
        <>
        <IntroWrap>
            <NavbarHeader/>
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
            <IntroContainerWrap>
                <IntroContainerItem>
                    <IntroContainerHeader>
                             Enjoy on your TV.
                    </IntroContainerHeader>
                    <IntroContainerDetail>
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </IntroContainerDetail>
                </IntroContainerItem>
                <IntroContainerItem>
                     <IntroContainerMedia src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
                </IntroContainerItem>
            </IntroContainerWrap>
            <IntroContainerWrap>
                <IntroContainerItem>
                    <IntroContainerHeader>
                             Enjoy on your TV.
                    </IntroContainerHeader>
                    <IntroContainerDetail>
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </IntroContainerDetail>
                </IntroContainerItem>
                <IntroContainerItem>
                <IntroContainerHeader>
                             Enjoy on your TV.
                    </IntroContainerHeader>
                    <IntroContainerDetail>
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </IntroContainerDetail>
                </IntroContainerItem>
            </IntroContainerWrap>
            <IntroContainerWrap>
                <IntroContainerItem>
                    <IntroContainerHeader>
                             Enjoy on your TV.
                    </IntroContainerHeader>
                    <IntroContainerDetail>
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </IntroContainerDetail>
                </IntroContainerItem>
                <IntroContainerItem>
                <IntroContainerHeader>
                             Enjoy on your TV.
                    </IntroContainerHeader>
                    <IntroContainerDetail>
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </IntroContainerDetail>
                </IntroContainerItem>
            </IntroContainerWrap>
            <IntroContainerWrap>
                <IntroContainerItem>
                    <IntroContainerHeader>
                             Enjoy on your TV.
                    </IntroContainerHeader>
                    <IntroContainerDetail>
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </IntroContainerDetail>
                </IntroContainerItem>
                <IntroContainerItem>
                <IntroContainerHeader>
                             Enjoy on your TV.
                    </IntroContainerHeader>
                    <IntroContainerDetail>
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </IntroContainerDetail>
                </IntroContainerItem>
            </IntroContainerWrap>
            
        </>
    )
}

export default Introduction
