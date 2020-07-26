import React from 'react'
import './style.css'
import { Dropdown,Button,Divider,Icon,Modal,TextInput } from 'react-materialize';

/**
* @author
* @function EmailAccount
**/

const EmailAccount = (props) => {
  return(
    <div>
          <div className="row posi">
    <div className="col s12 m5">
      <div className="card-panel ">
      <TextInput
  email
  id="TextInput-4"
  label="Email"
  validate
/>
      </div>
    </div>
  </div>
    </div>
   )

 }

export default EmailAccount