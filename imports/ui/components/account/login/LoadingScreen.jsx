import { Meteor } from 'meteor/meteor';
import React from 'react';
import PulseLoader from 'halogen/PulseLoader';
import PacmanLoader from 'halogen/PacmanLoader';

// Import success and error notifications
import { successMsgs } from '../AccountAlerts.js';
import { errorMsgs } from '../AccountAlerts.js';



// Import React components
import Button from '../../common/Button.jsx';

import { Accounts } from 'meteor/accounts-base';

//Gallery for loader
/*
 https://github.com/yuanyan/halogen
 http://madscript.com/halogen/
 */

export default class ForgetAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="box-typical box-typical-padding" style={{textAlign: 'center'}}>

          <h5 className="m-t-lg">
            <p>Loading</p>

            <p><strong>Fill in your NUS E-mail below:</strong></p>
          </h5>
          <PulseLoader postition='relative' color="#ff9702" />
        </div>
      </div>
    );
  }
}