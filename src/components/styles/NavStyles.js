import styled from 'styled-components';


const NavStyles = styled.ul`
  
  a,
  button {
    align-items: center;
    color: black;
    position: relative;
   
    font-weight: 900;
    font-size: .8em;
    background: none;
 
  }
 
  
  .cta-btn {
   padding: 0.875rem;
   margin: 1rem;
   background-color: rgb(255, 103, 0);
   background-image:  linear-gradient(0deg, rgb(255, 103, 0) 10%, rgb(255, 160, 0) 90%);
   border-top: 1px solid var(--clr-orange);
   border-right: 1px solid var(--clr-orange);
   border-bottom: 1px solid var(--clr-orange);
   border-left: 1px solid var(--clr-orange);
   border-radius: 0px;
   padding: 0.775em 0.875em;
   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
   text-transform: uppercase;
   font-weight: bold;
   font-size: 1rem;
   cursor: pointer;
   color: white;
   overflow: hidden;
}

`;


export default NavStyles;
