import React from 'react'
import './style.css'

/**
* @author
* @function ProgressBarAccount
**/

const ProgressBarAccount = (props) => {



  return(
    <div>
         <div className="progressPerso">
             <div className="ico"> 
                 <i className="material-icons" >brightness_1</i>
             </div>
        </div>
        <div className="list">
            <p className="item1">Bienvenu</p>
            <p className="item2">Entreprise</p>
            <p className="item3">Representant legal</p>
            <p className="item4">Finalisation</p>
        </div>
    </div>
   )

 }

export default ProgressBarAccount