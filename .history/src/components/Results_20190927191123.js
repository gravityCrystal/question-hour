import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ReactHtmlParser from 'react-html-parser';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
import '../index.css';
const backgroundShape = require('../images/shape.svg');


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['A500'],
    overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    marginTop: 200,
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    width: 1000
  },

  colorGreen: {
    color: 'green'
  },
  colorRed: {
    color: 'red'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    position: 'absolute',
    top: 111
  },

  floatRight: {
    position: 'relative',
    top: -26,
    left: 872
  }

})

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      answeredQuestions: []
    };
    console.log(this.props, this.state)

  }
  render() {
    const { classes, location } = this.props;
    const { answeredQuestions } = this.state;
    const { displayResults } = location;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">

            <Grid spacing={10} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12}>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Link to='/dashboard' className={classes.link}>
                    <Button color='primary' variant="contained" className={classes.actionButtom}>
                      Play Test again
                    </Button>
                  </Link></div>
                {answeredQuestions && answeredQuestions.map((v, k) => {
                  return (
                    <div className={classes.bigContainer} key={'answer' + k + 1}>
                      <Paper className={classes.paper}>
                        <div className={classes.topInfo}>
                          <div>
                            <Typography variant="subtitle1" style={{ fontWeight: 'bold', paddingTop: 21, marginLeft: 10 }} gutterBottom>
                              {k + 1 + '  '}.  {ReactHtmlParser(v.question)}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              {
                                v.isCorrectAnswer ? (
                                  <i color="primary" className={[classes.floatRight, classes.colorGreen, "material-icons"].join(' ')}  >done</i>
                                ) : (
                                    < i className={[classes.floatRight, classes.colorRed, "material-icons"].join(' ')}>cancel</i>
                                  )}
                            </Typography>
                          </div>
                        </div>
                      </Paper>
                    </div>)
                })};

              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Results);