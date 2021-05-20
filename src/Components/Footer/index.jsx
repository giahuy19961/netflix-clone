import React from 'react'
import {footerData} from 'json/footer.json'
import { Title,Container,Menu,Item,Language,Link } from './style'
import { Wrap } from './style'
function Footer() {
    return (
        <Footer.Wrap>
            <Footer.Container>
                <Footer.Title>
                    Questions? Contact us.
                </Footer.Title>
                <Footer.Menu>
                    {footerData.map((item,index)=>(
                        <Footer.Item key={index}>
                            <Footer.Link href={item.url} target="_blank" key={index}>{item.title}</Footer.Link>
                        </Footer.Item>
                    ))}
                </Footer.Menu>
            </Footer.Container>
        </Footer.Wrap>
    )
}

export default Footer
Footer.Wrap =  function FooterContainer({children,...rest}){
    return (<Wrap {...rest}>{children}</Wrap>)
}
Footer.Container =  function FooterContainer({children,...rest}){
    return (<Container {...rest}>{children}</Container>)
}
Footer.Title = function FooterTitle({children,...rest}){
    return (<Title {...rest}>{children}</Title>)
}
Footer.Menu =function FooterMenu({children,...rest}){
    return(<Menu>{children}</Menu>)
}

Footer.Item =function FooterItem({children,...rest}){
    return(<Item>{children}</Item>)
}

Footer.Language =function FooterLanguage({children,...rest}){
    return(<Language>{children}</Language>)
}

Footer.Link =function FooterLink({children,...rest}){
    return(<Link {...rest}>{children}</Link>)
}