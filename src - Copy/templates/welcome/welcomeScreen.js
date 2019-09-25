import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import './welcomeScreen.css';

export default ({ props, history }) =>
    <div className="custom-button">
        <Button className="mdc-button  set" variant="outlined">
            <span className="mdc-button__label" onClick={() => { history.push('/new-location') }} > Welcome to the Test</span>
        </Button>
    </div>;
