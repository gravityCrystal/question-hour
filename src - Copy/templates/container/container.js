import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import WelcomeScreen from './../welcome/welcomeScreen';
import Question from './../question/question';
import DenseTable from './../results/results';
import { withRouter } from 'react-router-dom'
// import default from '@material-ui/core/colors/cyan';

export default class ResponsiveContainer extends Component {

  constructor() {
    super();
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

    console.log(this.props);
    return (
      <React.Fragment>
        <CssBaseline />
        <Container >
          <WelcomeScreen props={{
            dummy: this.state.dummy,
            changeText: this.changeText
          }}></WelcomeScreen>
          <Question {...{ props: this.props }}></Question>
          <DenseTable></DenseTable>
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '75vh' }} />
        </Container>
      </React.Fragment >
    );
  }
}