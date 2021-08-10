import styled from 'styled-components';

const FooterStyles = styled.ul`
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
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
        margin-bottom: .5rem;
        margin-top: 0;
   
       @media (max-width: 640px) {
        flex-direction: column;
       }
    }
    .nav-links a{
        padding-left: 5rem;
       @media(max-width: 1007px){
           padding-left:1rem;
       }
       :hover {
           color: black;
       }
    }

    .social-links {
        padding-top: 1rem;
    }
    .white {
      color: white;
  }
    .info {
        display: flex;
        justify-content: space-evenly;
        
        @media (max-width: 640px) {
            flex-direction: column;
        }
    }
    .callLink {
        font-size: 1.5rem;
        font-weight: Bold;
        color: rgb(255,103,0);
        padding-top: .8rem;
        @media (max-width: 640px) {
            font-size: 1.3rem;
        }
    }
    .cta-btn {
        padding:  0.875rem;
        margin-top: 1rem;
        /* margin-left:2rem; */
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
        font-size: 1rem;
        cursor: pointer;
        color: white;
        overflow: hidden;
        @media (max-width: 1007px) {

            font-size: .8rem;
        }
  }

  span.roni {
      color: #007c8f;
  }
`
export default FooterStyles