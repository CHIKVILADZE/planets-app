import {Routes, Route, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {useState} from 'react';
import Mercury from './pages/mercury';
import Venus from './pages/venus';
import Earth from './pages/earth';
import Mars from './pages/mars';
import Neptune from './pages/neptune';
import Saturn from './pages/saturn';
import Uranus from './pages/uranus';
import Jupiter from './pages/jupiter';
import hamburger from './assets/icon-hamburger.svg'

import MobileList from './components/mobileList';
import background from './assets/background.svg'







function App() {

  const [overview, setOverview] = useState<boolean>(true)
  const [structure, setStructure] = useState <boolean> (false)
  const [surface, setSurface] = useState<boolean> (false)
  const [sourceText, setSourceText] = useState <boolean>(false)
  const [showList, setShowList] = useState<boolean>(false)

  const handleClick = () => {
    setShowList (!showList)
  }



  let activeStyle = {
    color: "white",
    fontFamily: `$(Spartan)`,
    fontSize:"11px",
    textDecoration:"none",
    cursor:"pointer",
    borderTopWidth:"3px",
    borderTopColor:"#419EBB",
};

let style = {
  color: "grey",
  fontFamily: `$(Spartan)`,
  fontSize:"11px",
  textDecoration:"none",
  cursor:"pointer",
};


  return (
  
    <Container>
      
      <Header>
          <Title>THE PLANETS</Title>
          <Img onClick={handleClick} src={hamburger}/>
        
          
          <LinkBox>
          
         
            <Li>
              <NavLink to="/"   style={({ isActive }) =>isActive ? activeStyle : style }>Mercury</NavLink>
             </Li>
             <Li>
              <NavLink to="/venus"  style={({ isActive }) =>isActive ? activeStyle : style }>Venus</NavLink>
             </Li>
             <Li>
              <NavLink to="/earth"  style={({ isActive }) =>isActive ? activeStyle : style }>Earth</NavLink>
             </Li>
             <Li>
              <NavLink to="/mars"  style={({ isActive }) =>isActive ? activeStyle : style } >Mars</NavLink>
             </Li>
             <Li>
              <NavLink to="jupiter/"  style={({ isActive }) =>isActive ? activeStyle : style } >Jupiter</NavLink>
             </Li>
             <Li>
              <NavLink to="/saturn"  style={({ isActive }) =>isActive ? activeStyle : style }>Saturn</NavLink>
             </Li>
             <Li>
              <NavLink to="/uranus"  style={({ isActive }) =>isActive ? activeStyle : style }>Uranus</NavLink>
             </Li>
             <Li>
              <NavLink to="/neptune"  style={({ isActive }) =>isActive ? activeStyle : style } >Neptune</NavLink>
             </Li>
            
            
        </LinkBox>
        
        
      </Header>     
       
      
      
      {showList === true ? <MobileList showList={showList} setShowList={setShowList} handleClick={handleClick} /> : 
      
       <Routes>
       
        
          <Route path="/" element={
          <Mercury overview={overview} setOverview={setOverview} 
                  structure={structure} setStructure={setStructure}
                  surface={surface} setSurface={setSurface}
                 sourceText={sourceText} setSourceText={setSourceText}/>}/>
          <Route path="venus" element={
          <Venus overview={overview} setOverview={setOverview} 
                  structure={structure} setStructure={setStructure}
                  surface={surface} setSurface={setSurface}
                 sourceText={sourceText} setSourceText={setSourceText} />}/>
          <Route path="earth" element={
          <Earth overview={overview} setOverview={setOverview} 
                  structure={structure} setStructure={setStructure}
                  surface={surface} setSurface={setSurface}
                 sourceText={sourceText} setSourceText={setSourceText} />}/>
          <Route path="mars" element={
          <Mars overview={overview} setOverview={setOverview} 
                  structure={structure} setStructure={setStructure}
                  surface={surface} setSurface={setSurface}
                sourceText={sourceText} setSourceText={setSourceText}/>}/>
          <Route path="neptune" element=
          {<Neptune overview={overview} setOverview={setOverview} 
                  structure={structure} setStructure={setStructure}
                  surface={surface} setSurface={setSurface}
                sourceText={sourceText} setSourceText={setSourceText}/>}/>
          <Route path="jupiter" element={
          <Jupiter overview={overview} setOverview={setOverview} 
                  structure={structure} setStructure={setStructure}
                  surface={surface} setSurface={setSurface}
                sourceText={sourceText} setSourceText={setSourceText} />}/>
          <Route path="uranus" element=
          {<Uranus overview={overview} setOverview={setOverview} 
                  structure={structure} setStructure={setStructure}
                  surface={surface} setSurface={setSurface}
                sourceText={sourceText} setSourceText={setSourceText} />}/>
          <Route path="saturn" element={
          <Saturn overview={overview} setOverview={setOverview} 
                  structure={structure} setStructure={setStructure}
                  surface={surface} setSurface={setSurface}
                sourceText={sourceText} setSourceText={setSourceText} />}/>
          
        
      </Routes>
       }
      </Container>  

  );
}

export default App;
 
const Container = styled.div`
  height:100%;
  background-color:#070724;
  background-image: url(${background});

 
  display:flex;
  flex-direction: column;
  align-items: center;
  
  
` 
const Header = styled.div`
 
  width:100vw;
  height:69px;
  padding-left:32px;
  padding-right:41px;
  border-bottom: 2px solid grey;
  
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;


  @media screen and (max-width:1000px){
    flex-direction:column;
    height:120px;
  }

  @media screen and (max-width:550px){
    flex-direction:row;
    height:68px;
    align-items: center;
    padding-left:24px;
  padding-right:24px;
  }
`



const Title = styled.h1`

font-family: 'Antonio';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 36px;
letter-spacing: -1.05px;
text-transform: uppercase;
color: #FFFFFF;

@media screen and (max-width:1000px){
  margin-top:30px;
}
@media screen and (max-width:550px){
  margin-top:0;
}
`

const Img = styled.img`
  display:none;

  @media screen and (max-width:1000px){
    display:none;
  }
  @media screen and (max-width:550px){
    display:inherit;
  }
`
  
const LinkBox = styled.ul`
  width:50%;

  display:flex;
  flex-direction:row;
  justify-content: space-between;

  @media screen and (max-width:1000px){
    width:100%;
    justify-content: space-around;
  
  }
  @media screen and (max-width:550px){
    display:none;
  }

`

const Li = styled.li`
  font-family: 'Spartan';
font-style: normal;
font-weight: 700;
font-size: 11px;
line-height: 25px;
letter-spacing: 1px;
text-transform: uppercase;
color: #FFFFFF;
mix-blend-mode: normal;
opacity: 0.75;
list-style-type:none;
border-top-width: 3px;

`

