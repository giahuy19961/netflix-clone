import React from 'react'
import {useHistory} from 'react-router-dom'
import Middle from 'Components/MiddleContent'
import NavbarHeader from 'Components/NavbarHome'

function ProfilePage() {
    const history = useHistory();
   const buttonList = [{
        name:"Sign In",
        click:function handleClick(){
            history.push("/authhome")
        }
    }]
    return (
        <>
        <NavbarHeader menuList={""} buttonList={buttonList}/>
        <Middle.Wrap>
            <Middle.Content>
            <Middle.Header>Profile </Middle.Header>
                  <Middle.ProfileWrap>
                        <Middle.AvatarImg  src="https://i.pravatar.cc/300" style={{width:"80px",height:"80px"}} alt="avt" />
                        <Middle.Input value={`Gia Huy`} disabled/>
                  </Middle.ProfileWrap>
                  <Middle.Menu>
                           <Middle.Item>
                               awefawefa
                           </Middle.Item>
                           <Middle.Item>
                               awefawefa
                           </Middle.Item>
                           <Middle.Item>
                               awefawefa
                           </Middle.Item>
                           <Middle.Item>
                               awefawefa
                           </Middle.Item>
                  </Middle.Menu>  
                  <Middle.Button>Purchase</Middle.Button>
            </Middle.Content>
        </Middle.Wrap>
        </>
    )
}

export default ProfilePage
