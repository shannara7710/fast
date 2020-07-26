import React, { Fragment, Component } from 'react';
import { RadioGroup,Button,Icon } from 'react-materialize';
import {NavLink} from "react-router-dom";
import { Redirect,useHistory  } from 'react-router-dom';

class AccountChoise extends Component {


    render(){
     
        return (
        
        <Fragment >
             <ul className="collection">
                        <li class="collection-item avatar">
                            <i class="material-icons circle">account_circle</i>
                            <h5 class="title">Entreprise</h5>
                           
                            <NavLink to="/creer-compte/entreprise" class="secondary-content"><i class="material-icons">arrow_forward</i></NavLink>
                        </li>

                        <li class="collection-item avatar">
                            <i class="material-icons circle">account_circle</i>
                            <h5 class="title">Commercant</h5>
                           
                            <NavLink to="/creer-compte/commercant" class="secondary-content"><i class="material-icons">arrow_forward</i></NavLink>
                        </li>

                        <li class="collection-item avatar">
                            <i class="material-icons circle">account_circle</i>
                            <h5 class="title">Particulier</h5>
                           
                            <NavLink to="/creer-compte/particulier" class="secondary-content"><i class="material-icons">arrow_forward</i></NavLink>
                        </li>
                           
  </ul>
                        
        </Fragment>)
        
    }

}

export default AccountChoise;