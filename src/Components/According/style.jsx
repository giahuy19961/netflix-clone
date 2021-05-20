import styled from 'styled-components'


export const Container = styled.div`
    max-width : 1100px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:60px auto;
    


`
export const Item = styled.div`
     margin:auto 20px;
`
export const  Header = styled.button`
        width:100%;
        background-color:#999999;
        padding:20px;
        outline:none;
        border-bottom:1px  solid #777777;
        font-size:2rem;
        display:flex;
        justify-content:space-between;
        @media (max-width:600px){
            font-size:1.5rem;
        }
`

export const Body = styled.p`
       max-height:1200px;
       background-color:#999999;
       font-size:1.2rem;
       line-height:normal;
       color:#000;
       padding:20px;
       @media (max-width:600px){
           font-size:1rem;
       }
       
`
export const Icon = styled.span`   
       font-size:20px;
       color:#fff;
`
