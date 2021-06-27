import styled from 'styled-components';


const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a,
  button {
    padding: 1rem 1.5rem;
    
    align-items: center;
    color: black;
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 900;
    font-size: .8em;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    }
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

  .nav-links a {
    &:after {
      height: 2px;
      background: rgb(252, 83, 8);
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      text-decoration:none;
      &:after {
        width: calc(100% - 60px);
      }
      @media (max-width: 700px) {
        width: calc(100% - 10px);
      }
  }

`;


export default NavStyles;
