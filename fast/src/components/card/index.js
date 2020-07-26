import React, { Fragment } from 'react';
import './style.css';
import achat from "../../img/device.png";
import facture from "../../img/fature.png";
import paiemnt from "../../img/paiemtn.png";

const FuncCard = (props) =>{

  return(
    <Fragment>
      <div className="containerBox">


          <div className="box">
              <span className="titre">Achat de device</span>
              <div className="boxImg">
                <img src={achat} className="image"/>
              </div>
              <p className="texte">Lorem Ipsum hasbeen the industry'standard dummy text ever since the 1500s, when an unknown printerook a galley</p>
          </div>
          <div className="box">
          <span className="titre">Paiement de facture</span>
              <div className="boxImg">
                <img src={facture} className="image"/>
              </div>
              <p className="texte">Lorem Ipsum hasbeen the industry'standard dummy text ever since the 1500s, when an unknown printerook a galley</p>
          </div>
          <div className="box">
          <span className="titre">Suivi de paiement</span>
              <div className="boxImg">
                <img src={paiemnt} className="image"/>
              </div>
              <p className="texte">Lorem Ipsum hasbeen the industry'standard dummy text ever since the 1500s, when an unknown printerook a galley</p>
          </div>
          
       

      </div>
      </Fragment>
   
  )
}

export default FuncCard;