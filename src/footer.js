import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'


export default class Footer extends Component {
    render() {
        return (
            <div>
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <TypoGraphy variant="h5"
                            color="inherit" >
                            My Footer  
                        </TypoGraphy>
                    </Toolbar>
                </AppBar>

            </div>
        );
    }
}
