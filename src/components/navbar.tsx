import React from 'react'
import styled from 'styled-components'

import GlobalStyles from './GlobalStyles';




export default function Navbar ():any {
  return (
    <NavBarBox>
      <GlobalStyles/>

       

      
    </NavBarBox>
  )
};



const NavBarBox = styled.div`
  
  width:100vw;
  height:69px;
  padding-left:24px;
  padding-right:24px;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
`


