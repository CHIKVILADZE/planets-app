import React from 'react'
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import {useState} from 'react';
import chevron from '../assets/icon-chevron.svg';
 
export default function MobileList( showList : any, setShowList :any, handleClick:any,  ) {
  





    const handleClick0 = () =>{
        setShowList(!showList)
       }
    


  return (
   
     <MainMob>
        <Line/>
       <Ul>
            <Li>
               <ItemBox>
                    <Item></Item>
                    
                    <NavLink to="/" onClick={handleClick }   style={({ color:"white", textDecoration:"nones" })}>Mercury</NavLink>
                </ItemBox> 
                <Img src={chevron}/>
            </Li>
            <Li>
               <ItemBox>
                    <Item1></Item1>
                   <Link to="venus"  onClick={handleClick0}  style={({ color:"white", textDecoration:"nones" })}>Venus</Link>
                   
                </ItemBox> 
                <Img src={chevron}/>
            </Li>
            <Li>
               <ItemBox>
                    <Item2></Item2>
                    <Link to="earth" onClick={handleClick0}  style={({ color:"white", textDecoration:"nones" })}>Earth</Link>
                </ItemBox> 
                <Img src={chevron}/>
            </Li>
            <Li>
               <ItemBox>
                    <Item3></Item3>
                    <Link to="mars" onClick={handleClick0}  style={({ color:"white", textDecoration:"nones" })}>Mars</Link>
                </ItemBox> 
                <Img src={chevron}/>
            </Li>
            <Li>
               <ItemBox>
                    <Item4></Item4>
                    <Link to="jupiter" onClick={handleClick0}  style={({ color:"white", textDecoration:"nones" })} >Jupiter</Link>
                </ItemBox> 
                <Img src={chevron}/>
            </Li>
            <Li>
               <ItemBox>
                    <Item5></Item5>
                    <Link to="saturn" onClick={handleClick0}  style={({ color:"white", textDecoration:"nones" })}>Saturn</Link>
                </ItemBox> 
                <Img src={chevron}/>
            </Li>
            <Li>
               <ItemBox>
                    <Item6></Item6>
                    <Link to="uranus" onClick={handleClick0}  style={({ color:"white", textDecoration:"nones" })}>Uranus</Link>
                </ItemBox> 
                <Img src={chevron}/>
            </Li>
            <Li>
               <ItemBox>
                    <Item7></Item7>
                    <Link to="neptune" onClick={handleClick0}  style={({ color:"white", textDecoration:"nones" })}>Neptune</Link>
                </ItemBox> 
                <Img src={chevron}/>
            </Li>
            
  </Ul>
        
       
      
    </MainMob>
  )
}

const MainMob = styled.div`
    width:100%;
    height:100vh;
    display:none;

 
   
    @media screen and (max-width:550px){
        display:block;
        
       
       
    }
  
    
`    
   


const Line = styled.div`
   
    width:100%;
    height:1px;
    background-color:white;
    opacity:20%;
    margin-bottom:24px;

   
   
`


const Li = styled.li`
    color:white;
  
    margin-top:20px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
   
 
`

const Ul = styled.ul`

    width:100%;
  
   
`
const ItemBox = styled.div`
    width:50%;
  
    display:flex;
    margin-left:24px;
    flex-direction: row;
    align-items: center;
    gap:24px;
  
   
   
   
`

const Item = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:#DEF4FC;
`
const Item1 = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:#F7CC7F;
`
const Item2 = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:#545BFE;
`
const Item3 = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:#FF6A45;
`
const Item4 = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:#ECAD7A;
`
const Item5 = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:#FCCB6B;
`
const Item6 = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:#65F0D5;
`
const Item7  = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:#497EFA;
`
const Img = styled.img`
margin-right:24px;`