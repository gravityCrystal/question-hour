import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  text: {
    display: 'inline-block',
    verticalAlign: 'text-bottom'
  },
  result: {
    float: 'right',
    display: 'inline-block',
    zIndex: 1000
  },
  gridLayout: {
    paddingTop: 20,
    position: 'absolute'
  }
});

class Back extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={3} className="gridLayout">
          <Grid item xs={6} sm={6}>
            <Typography variant="h6" gutterBottom className="col-6">
              <Link className={classes.link} to={{ pathname: "/" }}>
                <KeyboardArrowLeft />
                <span className={classes.text}>Home</span>
              </Link>
            </Typography>
          </Grid>
          {/* <Grid item xs={6} sm={6}>
          <Typography variant="h6" gutterBottom className="col-6">
            <Link className={classes.result} to={{ pathname: "/results" }}>
              <Button color='primary' variant="contained" className={classes.actionButtom}>
                Submit
            </Button>
           
            </Link>
             </Typography>
          </Grid> */}
        </Grid>

      </div>
    )
  }
}

export default withRouter(withStyles(styles)(Back));