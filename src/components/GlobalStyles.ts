import {createGlobalStyle} from 'styled-components'
import background from '../assets/background.svg';

const GlobalStyles = createGlobalStyle`
*{
  @import url('https://fonts.googleapis.com/css2?family=Antonio&family=League+Spartan:wght@400;700&display=swap');
    margin:0;
    padding:0;
    box-sizing: border-box;
    background-color:#070724;
    
  background-image:url(${background});
}


`

export default GlobalStyles