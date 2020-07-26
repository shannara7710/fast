import React, { Fragment } from 'react'
import 'materialize-css';
import { Dropdown,Button,Divider,Icon,Modal,TextInput } from 'react-materialize';
import './style.css';
import {NavLink} from "react-router-dom";
import AccountChoise from '../createAccountchoise';

const NavBar = () => {
    return(

      <Fragment>
    
      
      
      <nav>
          <div className="nav-wrapper colorNavbar">
            <NavLink to="/" className="brand-logo">Fast Business</NavLink>
            <ul id="nav-mobile" className="left hide-on-med-and-down colorUl ">
              <li><NavLink to="/" className='light-blue-text'>Acceuil</NavLink></li>
              <li>
              <Dropdown id="Dropdown_6" options={{ autoTrigger: true,closeOnClick: true, constrainWidth: true, container: null, coverTrigger: true,hover: false,
             inDuration: 150,onCloseEnd: null,onCloseStart: null,onOpenEnd: null,onOpenStart: null,outDuration: 250 }}

                   trigger={<a href="#"  className='light-blue-text'>Rubriques - Fonctionnalites </a>}>

                    <NavLink to="/mandat-sepa"  className='light-blue-text'> Signer mandat SEPA </NavLink>
                      <Divider></Divider>
                    <NavLink to="/achat-device"  className='light-blue-text'>Achat de device</NavLink>
                       <Divider />
                    <NavLink to="/paiement-facture"  className='light-blue-text'> Paiment de facture </NavLink>
                    <Divider />
                    <NavLink to="/suivi-paiement"  className='light-blue-text'> Suivi de paiement</NavLink>
              </Dropdown>

              </li>
            

              <li><NavLink to="/a-propos" className='light-blue-text'>A propos</NavLink></li>
            </ul>

            <ul  className="right hide-on-med-and-down positionLogin ">
              <li>
              <Modal
              actions={[
                <Button flat modal="close" node="button" waves="green">Close</Button>
              ]}
              bottomSheet={false}
              fixedFooter
              header=""
              id="Modal-0"
              open={false}
              className="connexionModal"
              options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
              }}
            
              trigger={<Button node="button" className="connexion">Se connecter</Button>}
            >
              <div className="container">
                <h2 className="connexion">Connexion</h2>

                <TextInput email id="TextInput-4" label="Email" validate />

                <TextInput id="TextInput-4" label="Password" password/>

                <div className="containerConnexionButton">
                    <Button node="button" type="submit"  waves="light" className="buttonConnexion">
                                    Se connecter
                                    <Icon right>
                                      login
                                    </Icon>
                                  </Button>
                </div>

                <div className="motpasse">
                  <a href="">Mot de passe oublier</a>
                </div>

                <div className="containeCreateAccount">
                          
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                 nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum <a href="#">Creer un compte</a>

                </div>

      
              </div>
             
            </Modal>




              </li>
                <li>
                            <Modal
              actions={[
                <Button flat modal="close" node="button" waves="green">Close</Button>
              ]}
              bottomSheet={false}
              fixedFooter
              header=""
              id="Modal-0"
              open={false}
              options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
              }}
            
              trigger={<Button node="button">Ouvrir un compte</Button>}
            >
              <div className="container">
                <h2 className="connexion">Creer votre compte</h2>
                <h6 className="connexionSpan">Choisir le type de compte que vous souhaitez créer</h6>

                <div className="containerFrom">
                <AccountChoise/>
                </div>                
                  

                

                <div className="motpasse">
                  <a href="">vous avez un compte ? cliquer ici</a>
                </div>

                <div className="containeCreateAccount">
                          
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                 nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 

                </div>

      
              </div>
             
            </Modal>

            </li>


            </ul>

          </div>
  </nav>
  </Fragment>
    )
}

export default NavBar;