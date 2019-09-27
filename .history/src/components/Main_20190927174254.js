import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Topbar from './Topbar';
import { SnackbarProvider, wrapComponent } from 'react-snackbar-alert';

const Container = wrapComponent(function({ createSnackbar }) {
  function showSnackbar() {
    createSnackbar({
      message: 'Great success!',
      theme: 'success'
    });
  }

  return (
    <div>
      <button onClick={showSnackbar}>Show Snackbar</button>
    </div>
  );
});
const backgroundShape = require('../images/shape.svg');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingTop: 150
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2)
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1)
  },
  actionButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1),
    width: 152
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  block: {
    padding: theme.spacing(2),
  },
  box: {
    marginBottom: 40,
    height: 65
  },
  inlining: {
    display: 'inline-block',
    marginRight: 10
  },
  buttonBar: {
    display: 'flex'
  },
  alignRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  noBorder: {
    borderBottomStyle: 'hidden'
  },
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: 'absolute',
    top: '40%',
    left: '40%'
  }
});

class Main extends Component {

  state = {
    learnMoredialog: false,
    getStartedDialog: false
  };

  componentDidMount() { }
  simpleAction1 = (event) => {
    this.props.simpleAction2();
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />

        <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={4} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12} md={4}>
              
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography style={{ textTransform: 'uppercase', display: 'flex', justifyContent: 'center' }} color='secondary' gutterBottom>
                      Welcome to Question Hour
                    </Typography>
                    <Typography style={{ display: 'flex', justifyContent: 'center' }} variant="body2" gutterBottom>
                      Click to start test
                    </Typography>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to='/dashboard' className={classes.link}>
                      <Button color='primary' variant="contained" className={classes.actionButtom}>
                        Start Test
                    </Button>
                    </Link>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          {/* <MySnackbarContentWrapper /> */}
          {/* <button onClick={this.simpleAction1}>Test redux action</button>
          <pre>
            {
              JSON.stringify(this.props)
            }
          </pre> */}
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(Main));
