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
import Button from '@material-ui/core/Button';
import { Link, Route } from 'react-router-dom';
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
  },
  floatRight: {
    position: 'relative',
    top: -26,
    left: 825

  },
  colorGreen: {
    color: 'green'
  },
  colorRed: {
    color: 'red'
  }
})

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      answeredQuestions: [{ "question": "The first &quot;Metal Gear&quot; game was released for the PlayStation 1.", "correctAnswer": "True" }, { "question": "Scientists can grow teeth from urine.", "correctAnswer": "True", "isCorrectAnswer": true }, { "question": "Rannamaari was a sea demon that haunted the people of the Maldives and had to be appeased monthly with the sacrifice of a virgin girl.", "correctAnswer": "True", "isCorrectAnswer": true }, { "question": "Throughout the entirety of &quot;Dragon Ball Z&quot;, Goku only kills two characters: a miniboss named Yakon and Kid Buu.", "correctAnswer": "False" }, { "question": "In Scandinavian languages, the letter &Aring; means river.", "correctAnswer": "False" }, { "question": "All of these maps were in &quot;Tom Clancy&#039;s Rainbow Six Siege&quot; on its initial release: House, Clubhouse, Border, Consulate.", "correctAnswer": "False", "isCorrectAnswer": true }, { "question": "Pete Townshend&#039;s solo album, &quot;White City: A Novel&quot;, is set in the metropolitan area of Chicago.", "correctAnswer": "False", "isCorrectAnswer": true }, { "question": "In the &quot;To Love-Ru&quot; series, Peke is considered a female robot.", "correctAnswer": "False" }, { "question": "Janus was the Roman god of doorways and passageways.", "correctAnswer": "False" }, { "question": "The singer Billie Holiday was also known as &quot;Lady Day&quot;.", "correctAnswer": "False" }]
    };
    console.log(this.props, this.state)

  }
  render() {
    const { classes, location } = this.props;
    console.log(this.props, this.state)
    const { answeredQuestions } = this.state;
    const currentPath = this.props.location.pathname
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
                      Start Test
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