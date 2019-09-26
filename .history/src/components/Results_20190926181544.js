import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import CardItem from './cards/CardItem';

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
import Topbar from './Topbar';
import ReactRadioButtonGroup from 'react-radio-button-group';
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

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={10} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12}>
                {/* <SectionHeader   /> */}
                {questions.map((k, v) => {
                  return (
                    <div className={classes.bigContainer} key={v + 1}>
                      <Paper className={classes.paper}>
                        <div className={classes.topInfo}>
                          <div>
                            <Typography variant="subtitle1" style={{ fontWeight: 'bold' }} gutterBottom>
                              {v + 1}.  {ReactHtmlParser(k.question)}
                            </Typography>
                            {/* <Typography variant="body1" gutterBottom> */}
                            <RadioGroup aria-label="gender" name="'radio'+v" value={this.state.value} onClick={this.handleChange}>
                              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                              <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                            {/* </Typography> */}
                          </div>
                        </div>
                      </Paper>
                    </div>)
                })};
                <CardItem />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Results);