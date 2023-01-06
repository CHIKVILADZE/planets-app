import React from 'react'
import styled from 'styled-components'
import uranus from '../assets/planet-uranus.svg'
import uranusgeo from '../assets/geology-uranus.png'
import uranusint from '../assets/planet-uranus-internal.svg'
import data from '../data.json'
import GlobalStyles from '../components/GlobalStyles';
import source from '../assets/icon-source.svg'

import {Props} from '../interface'




export default function Uranus({overview, setOverview, structure, setStructure, surface, setSurface,
   sourceText, setSourceText,  }: Props ) {

    const Data = data[6]

  const handleClick1 = () =>{
    setOverview(true)
    setStructure(false)
    setSurface(false)
    setSourceText (false)
  }
  const handleClick2 = () =>{
    setOverview(false)
    setStructure(true)
    setSurface(false) 
    setSourceText (false)
  }
  const handleClick3 = () =>{
    setOverview(true)
    setStructure(false)
    setSurface(true)
    setSourceText (true)
   
  }


  
  




  return (
    <>
    <GlobalStyles/>
    <Main>
      <MobileInfo>
        <MobileText onClick={handleClick1}>OVERVIEW</MobileText>
         <MobileText onClick={handleClick2}>STRUCTURE</MobileText>
          <MobileText onClick={handleClick3}>SURFACE</MobileText>
      </MobileInfo>
        
        <ImgSpace>
        <ImgDiv >
            {overview && <Img src={uranus}/>}
            {structure && <Img src={uranusint}/>}
            {surface &&  <Imggeo  src={uranusgeo}/> }
        </ImgDiv>
        </ImgSpace>
        <Section>
          <Info>
              <TitleBox>
                <Title>{Data.name}</Title>
                <Text>
                  {overview && !sourceText && <Txt>{Data.overview.content}</Txt>}
                  {structure && <Txt>{Data.structure.content}</Txt>}
                  {sourceText &&  <Txt>{Data.geology.content}</Txt>}
                </Text>
                <Source>
                  < SourceText>Source :  </SourceText>
                                {overview && !sourceText && < Link href={Data.overview.source} target="_blank">Wikipedia</Link>}
                                {structure && <Link href={Data.structure.source} target="_blank">Wikipedia</Link>}
                                {sourceText &&  <Link href={Data.geology.source} target="_blank">Wikipedia</Link>}
                <SrcImg src={source}/></Source>
              </TitleBox>
            <Infosection>
              <InfoBox onClick={handleClick1}>
                <Infonum>01</Infonum>
                <Infotext>OVERVIEW</Infotext>
              </InfoBox>
              <InfoBox onClick={handleClick2}>
                <Infonum>02</Infonum>
                <Infotext>Internal Structure</Infotext>
              </InfoBox>
              <InfoBox onClick={handleClick3}>
                <Infonum>03</Infonum>
                <Infotext>Surface Geology</Infotext>
              </InfoBox>
                
                
               
            </Infosection>
          
          </Info>
        </Section>
     

    </Main>
    <Result>
      <ResultBox>
        <ResultTitle>ROTATION TIME</ResultTitle>
        <ResultNums>{Data.rotation}</ResultNums>
      </ResultBox>
      <ResultBox>
        <ResultTitle>REVOLUTION TIME</ResultTitle>
        <ResultNums>{Data.revolution}</ResultNums>
      </ResultBox>
      <ResultBox>
        <ResultTitle>RADIUS</ResultTitle>
        <ResultNums>{Data.radius}</ResultNums>
      </ResultBox>
      <ResultBox>
        <ResultTitle>AVERAGE TEMP.E</ResultTitle>
        <ResultNums>{Data.temperature}</ResultNums>
      </ResultBox>
    </Result>
    </>
  )
}


const Main = styled.div`

  height:100vh;
  width:100%;
  display:flex;
  flex-direction: row;

  @media screen and (max-width:1000px){
    flex-direction:column;
   }
   @media screen and (max-width:550px){
    height:687px;
   }
`   
const MobileInfo = styled.div`
  display:none;
  font-family: 'Spartan';


  
  @media screen and  (max-width:1000px){
    display:none;
  }

  @media screen and (max-width:550px){
    display:inherit;
    width:100%;
    height:50px;
    display:flex;
    flex-direction:row;
    padding-left:24px;
    padding-right:24px;
    justify-content: space-between;
  }
`
const MobileText = styled.div`
font-style: normal;
font-weight: 700;
font-size: 9px;
line-height: 10px;
text-align: center;
letter-spacing: 1.92857px;
text-transform: uppercase;
border:1px solid white;
display:flex;
align-items: center;
border:1px solid #070724;

&:hover{
  border-bottom-width: 3px;
  border-bottom-color:#1EC1A2;


}
  
`




  
const ImgSpace = styled.div`
  width:50%;
 
  height:80vh;
  display:flex;

  align-items:center;
  padding-left:335px;

  @media screen and (max-width:1000px){
    width:100%;
    height:700px;
    align-items:center;
    justify-content:center;
    padding:0;
  }
   
 
`
const ImgDiv = styled.div`
  width:310px;
 
  border-top-width:5px;
  border-top-color:black ;
 
  height:310px;
 
  display:flex;
  align-items:center;
  justify-content: center;
  position:relative;
`

const Img = styled.img`
  width:290px;
  height:290px;

 @media screen and (max-width:1000px){
  width:184px;
  height:184px;
 }


`
const Imggeo = styled.img`
  width:140px;
  height:155px;
  position:absolute;
  top:261px;
  
  background: none;

  @media screen and (max-width:1000px){
    width:100px;
    height:115px;
    top:220px;
  }
 
`



const Section = styled.div`
  width:360px;
  height:80vh;
  margin-left:150px;
  margin-top:100px;
 
  display:flex;


  @media screen and (max-width:1000px){
    width:100%;
    height:253px;
    display:flex;
    flex-direction: row;
    margin-top:0px;
    
    margin-left:39px;
  }


`


const TitleBox=styled.div`
  width:100%;

  
  @media screen and (max-width:550px){
     
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    
    padding-right:24px;
  }
`



const Title = styled.h1`
  
font-family: 'Antonio';
font-style: normal;
font-weight: 400;
font-size: 80px;
line-height: 104px;
text-transform: uppercase;
color: #FFFFFF;

@media screen and (max-width:1000px){
  font-size:48px;
  margin-top:-30px;
}

`

const Text = styled.div`
font-family: 'Spartan';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 25px;
color: #FFFFFF;
width:350px;
  height:150px;
  margin-top:24px;
  
  @media screen and (max-width:1000px){
    margin-top:0;
  }

`
const Txt = styled.p`
  
`



const Info = styled.div`
 

  @media screen and (max-width:1000px){
    width:100%;
    height:253px;
    display:flex;
    flex-direction: row;
  }
 
 @media screen and (max-width:550px){
  justify-content: center;
 }
`


const Source = styled.div`
  width:130px;
  height:25px;
  
  font-family: 'Spartan';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  color: #FFFFFF;
  display:flex;
  flex-direction: row;
  mix-blend-mode: normal;
  align-items:center;
 
`
const SrcImg = styled.img`
  width:12px;
  height:12px;
  margin-left:8px;
`
const SourceText = styled.p`
  font-family: 'Spartan';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 25px;



color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.5;
`

const Link = styled.a`
font-family: 'Spartan';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 25px;
color:white;
opacity:0.5;
  
`
const Infosection = styled.div`
  width:100%;
  height:176px;

  margin-top:39px;
  display:flex;
  flex-direction: column;
  gap:16px;

  @media screen and (max-width:550px){
    display:none;
  }
`

const InfoBox =styled.button`
  width:95%;
  height:48px;
  border:1px solid white;
  font-family: 'Spartan';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 25px;
  display:flex;
  align-items:center;
  cursor:pointer;
  letter-spacing: 2.57143px;
  text-transform: uppercase;
  color: #FFFFFF;

  &:hover  {
    background-color:#1EC1A2;

  }

  
`
const Infotext = styled.p`
 font-family: 'Spartan';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 25px;
letter-spacing: 2.57143px;
text-transform: uppercase;
margin-left:28px;
color: #FFFFFF;
background:none;
`
const Infonum = styled.p`
margin-left:28px;
font-family: 'Spartan';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 25px;
letter-spacing: 2.57143px;
text-transform: uppercase;
color: #FFFFFF;
mix-blend-mode: normal;
opacity: 0.5;
background:none;
`
const Result = styled.div`
  width:100%;

  height:186px;
  margin-top:50px;
  display:flex;
  flex-direction:row;
 justify-content: space-between;
 padding-left:145px;
  padding-right:145px;
  gap:30px;

  @media screen and (max-width:1000px){
    margin-top:50px;
    padding-left:39px;
    padding-right:40px;
    gap:11px;
  }
  @media screen and (max-width:550px){
    padding-left:24px;
    padding-right:24px;
    display:flex;
    flex-direction:column;
    margin-top:28px;
    
    height:270px;
  }
`


  const ResultBox = styled.div`
  width:295px;
  height:128px;
  border:1px solid white;

 

  @media screen and (max-width:1000px){
    width:164px;
    height:88px;
  }
  
  @media screen and (max-width:550px){
    width:100%;
    height:48px;
    display:flex; 
    flex-direction: row;
    
    padding-left:24px;
    padding-right:24px;
    justify-content: center;
    justify-content: space-between;
    align-items:center;
    
    
  }
  `
  

const ResultTitle = styled.p`
  font-family: 'Spartan';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top:20px;
  margin-left:23px;

  @media screen and (max-width:1000px){
    font-size:8px;
    margin-top:16px;
    margin-left:15px;
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    line-height: 16px;
    letter-spacing: 0.727273px;
    text-transform: uppercase;
    margin-top:5px;
    color: #FFFFFF;

    mix-blend-mode: normal;
    opacity: 0.5;

  }
 

  `
 








const ResultNums = styled.p`
  font-family: 'Antonio';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  letter-spacing: -1.5px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-top:4px;
  margin-left:23px;

  @media screen and (max-width:1000px){
    font-size:24px;
    margin-top:6px;
    margin-left:15px;
    font-family: 'Antonio';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 31px;
/* identical to box height */

letter-spacing: -0.9px;
text-transform: uppercase;

color: #FFFFFF;
  }

  @media screen and (max-width:550px){
    font-size:20px;
    line-height: 26px;
    margin-top:0;
  }
  `




