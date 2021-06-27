import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import './styles/GlobalStyles.css'
import styled from 'styled-components';

const SidebarStyles = styled.div`
.rec-links {
    width: 280px;
    margin-right: 1rem;
}
.rec-links h3{
    border-top: 1px solid var(--clr-orange);
    border-bottom: 1px solid var(--clr-orange);
    text-transform: uppercase;
    font-size: 18px;
    text-align: center;
    padding: 1rem 0;
}
.logo-links {
    margin-left: .5rem;
    
}
.double {
    margin-bottom: 1rem;
}
.square {
    padding-right: 1rem;
}
.singles {
    display: flex;
    flex-direction: column;
    width:90%;
}
`

const Sidebar = ({data}) => {
return (
    <SidebarStyles>
<div className="rec-links">
     <h3>Recommended Links</h3>
     <div className="logo-links">
       
     <div className="double">
         <a href="https://madico.com/" alt="madico site" class="square"> <StaticImage src="../images/madico.png" alt="Madico Film" placeholder="blurred" width={120} /></a>
         <a href="https://www.skincancer.org/blog/surprising-danger-planes-trains-automobiles/" alt="madico site">      <StaticImage src="../images/SCF.png" alt="Madico Film" placeholder="blurred" width={120} /></a>
         
     </div>
        <div class="singles">
        <a href="https://madico.com/safety-security/anti-intrusion/safetyshield" alt="madico safety shield"><StaticImage src="../images/SafetyShield-Premier-Partner-Color-5a390c2ab872f.png" alt="Madico Film" placeholder="blurred" width={300} /></a>
        <a href="https://madico.com/sunscape" alt="madico sunscape"><StaticImage src="../images/grfx_logo2.png" alt="Madico Film" placeholder="blurred" width={300} /></a>
        <a href="https://northamerica.llumar.com/vista-window-films" alt="Llumar window film"><StaticImage src="../images/VistaLogo-WebColor500-5e6f76e256ce2.png" alt="Madico Film" placeholder="blurred" width={300} /></a>
     </div>
     </div>
 </div>
 </SidebarStyles>
 )
}

export default Sidebar