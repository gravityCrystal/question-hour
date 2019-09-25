import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import WelcomeScreen from './../welcome/welcomeScreen';
// import default from '@material-ui/core/colors/cyan';

export default class Question extends Component {

    constructor() {
        super(this.props);
        this.changeText = this.changeText.bind(this);
        this.state = {
            dummy: ''
        };
    }
    changeText(event) {
        console.log(event.target.value);
        this.setState({
            dummy: event.target.value
        });
    }
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container >
                    <div>asd</div>
                </Container>
            </React.Fragment>
        );
    }
}