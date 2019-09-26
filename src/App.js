import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import './App.css';
import Routes from './routes'
import { blue, indigo } from '@material-ui/core/colors'
import { connect } from "react-redux";
import { simpleAction } from './redux/actions/simpleAction'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  simpleAction2: () => dispatch(simpleAction())
})
class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {

    return (
      <div>
        <ThemeProvider theme={theme}>
          <Routes {...this.props}/>  
        </ThemeProvider>
      </div>
    );
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(App);

