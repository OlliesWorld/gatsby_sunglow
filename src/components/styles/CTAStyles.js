import styled from 'styled-components';

const CTAStyles = styled.div`
    padding-bottom: 35px;
    padding-top: 35px;
    color: white; 
    height: 500px;
    text-align: center;
    width: 100%;
    
    @media (max-width: 1245px) {
        margin-left: 15rem;
        width: 95%;
    }
    @media (max-width: 640px) {
        padding: 0;
        margin: 0 auto;
    }
    h2 {
        text-transform:uppercase;
    }
    .cta-content {
        background-color: rgba(0, 0, 0, 0.5);
        width: 50%;
        margin-left: 37rem;
        padding: 1rem;
        @media (max-width: 1245px) {
       
        margin: 0 auto;
        padding: 1rem;
        width: 95%;
        }
        @media (max-width: 640px) {
            background-color: rgba(0, 0, 0, 0.8);
            margin: 0 auto;
        }
    }
    
`

export default CTAStyles