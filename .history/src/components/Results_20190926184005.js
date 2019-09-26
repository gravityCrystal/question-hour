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
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      answeredQuestions: [{ "category": "Entertainment: Video Games", "type": "boolean", "difficulty": "hard", "question": "In &quot;The Sims&quot; series, the most members in a household you can have is 8.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "History", "type": "boolean", "difficulty": "hard", "question": "The Kingdom of Prussia briefly held land in Estonia.", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "Entertainment: Video Games", "type": "boolean", "difficulty": "hard", "question": "The first &quot;Metal Gear&quot; game was released for the PlayStation 1.", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "Science: Mathematics", "type": "boolean", "difficulty": "hard", "question": "If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "History", "type": "boolean", "difficulty": "hard", "question": "The Battle of Trafalgar took place on October 23rd, 1805", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "History", "type": "boolean", "difficulty": "hard", "question": "The USS Missouri (BB-63) last served in the Korean War.", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "Entertainment: Board Games", "type": "boolean", "difficulty": "hard", "question": "The board game Go has more possible legal positions than the number of atoms in the visible universe.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Politics", "type": "boolean", "difficulty": "hard", "question": "George Clinton, Vice President of the United States (1805-1812), is an ancestor of President Bill Clinton.", "correct_answer": "False", "incorrect_answers": ["True"] }, { "category": "Entertainment: Music", "type": "boolean", "difficulty": "hard", "question": "The song Scatman&#039;s World was released after Scatman (Ski-Ba-Bop-Ba-Dop-Bop).", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Entertainment: Japanese Anime & Manga", "type": "boolean", "difficulty": "hard", "question": "In the &quot;Kagerou Daze&quot; series, Shintaro Kisaragi is prominently shown with the color red.", "correct_answer": "True", "incorrect_answers": ["False"] }]
    };


  }
  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname
    const { answeredQuestions, loading } = this.state;
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
                {answeredQuestions.map((k, v) => {
                  return (
                    <div className={classes.bigContainer} key={v + 1}>
                      <Paper className={classes.paper}>
                        <div className={classes.topInfo}>
                          <div>
                            <Typography variant="subtitle1" style={{ fontWeight: 'bold' }} gutterBottom>
                              {v + 1}.  {ReactHtmlParser(k.question)}
                            </Typography>
                            {/* <Typography variant="body1" gutterBottom> */}
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