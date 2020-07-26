import React from 'react';
import './style.css';
import NavbarAccount from '../../components/Navbar-account';
import ImageAccount from '../../components/image-account/index';
import ProgressBarAccount from '../../components/progressBarAcount';
import EmailAccount from '../../components/pageEmailAccount';

const EntrepriseStep1 = () => {
return(
  <div>
      <NavbarAccount/>
      <div className="container">
          <h1>Creer votre compte</h1>
          <ImageAccount/>
          <ProgressBarAccount/>
          <EmailAccount/>
      </div>

      
     
  </div>
)
}

export default EntrepriseStep1