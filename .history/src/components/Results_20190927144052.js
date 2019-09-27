import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import CardItem from './cards/CardItem';
import Icon from '@material-ui/core/Icon';
// import Right from '@material-ui/icons/Right';
import { withRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Back from './common/Back'
import ReactHtmlParser from 'react-html-parser';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import ReactRadioButtonGroup from 'react-radio-button-group';
// import { MatIconModule } from '@angular/material/icon'
import Topbar from './Topbar';
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
    console.log(this.props, this.state)
    const currentPath = this.props.location.pathname
    const { displayResults } = location;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={10} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12}>
                {/* <SectionHeader   /> */}
                {/* <Fade
                  in={loading}
                  style={{
                    transitionDelay: loading ? '800ms' : '0ms',
                  }}
                  unmountOnExit
                >
                  <CircularProgress style={{ marginBottom: 32, width: 100, height: 100 }} />
                </Fade> */}
                {displayResults & displayResults.map((k, v) => {
                  return (
                    <div className={classes.bigContainer} key={v + 1}>
                      <Paper className={classes.paper}>
                        <div className={classes.topInfo}>
                          <div>
                            <Typography variant="subtitle1" style={{ fontWeight: 'bold' }} gutterBottom>
                              {v + 1}.  {ReactHtmlParser(k.question)}
                            </Typography>
                            {/* <Typography variant="body1" gutterBottom> */}
                            {isCorrectAnswer ? (
        <i className="material-icons">done</i>
      ) : (
        i className="material-icons">cancel</i>
      )}
 
                            {v.isCorrectAnswer & <i className="material-icons">done</i>}
                            {v.isCorrectAnswer & <i className="material-icons">cancel</i>}
                            {/* </Typography> */}
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