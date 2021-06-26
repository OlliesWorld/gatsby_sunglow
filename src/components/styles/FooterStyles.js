import styled from 'styled-components';

const FooterStyles = styled.ul`
    margin: 0;
    padding: 0;
    text-align: center;
    a {
        text-decoration: none;
        text-transform: uppercase;
        color: white;
    }
    .footer-nav {
        background-color: rgb(255, 103, 0);
        justify-content: space-evenly;
        display: flex;
        padding: 1rem;
        margin-bottom: 2rem;
    }
    .nav-links a{
        padding-left: 1rem;
    }
    .social-links a {
        padding-left: 1rem;
    }
    .white {
      color: white;
  }
    .info {
        display: flex;
        justify-content: center;
        
    }

    .cta-btn {
        
      
        padding: 2rem  0.875rem;
        margin: 0 5rem;
        background-color: rgb(255, 103, 0);
        background-image: linear-gradient(0deg, rgb(255, 103, 0) 10%, rgb(255, 160, 0) 90%);
        border-top: 1px solid rgb(255, 103, 0);
        border-right: 1px solid rgb(255, 103, 0);
        border-bottom: 1px solid rgb(255, 103, 0);
        border-left: 1px solid rgb(255, 103, 0);
        border-radius: 0px;
        
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.5rem;
        cursor: pointer;
        color: white;
        overflow: hidden;
        @media (max-width: 1300px) {
        
            
            justify-content: center;
            font-size: 1.5rem;
        }
  }

  .roni a {
      color: blue;
  }
`
export default FooterStyles;