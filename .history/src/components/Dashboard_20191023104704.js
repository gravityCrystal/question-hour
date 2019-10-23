import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { withRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ReactHtmlParser from 'react-html-parser';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Snackbar } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Topbar from './Topbar';
import RadioButton from './RadioButton';
import HorizontalLinearStepper from './Stepper';
import Back from './common/Back'
const backgroundShape = require('../images/shape.svg');


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary['A100'],
    // overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    marginTop: 10,
    paddingTop: 35,
    paddingBottom: 200
  },
  grid: {
    margin: `0 ${theme.spacing(2)}px`
  },
  smallContainer: {
    width: '60%'
  },
  bigContainer: {
    width: '100%'
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  stepGrid: {
    width: '80%'
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1)
  },
  stepper: {
    backgroundColor: 'transparent'
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  topInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 42
  },
  formControl: {
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  borderColumn: {
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    paddingBottom: 24,
    marginBottom: 24
  },
  flexBar: {
    marginTop: 32,
    display: 'flex',
    justifyContent: 'center'
  },
  result: {
    float: 'right',
    display: 'inline-block',
    zIndex: 1000
  },
})

const getSteps = () => {
  let statusSet = new Set([
    { 'Question1': false },
    { 'Question2': false },
    { 'Question3': false },
    { 'Question4': false },
    { 'Question5': false },
    { 'Question6': false },
    { 'Question7': false },
    { 'Question8': false },
    { 'Question9': false },
    { 'Question10': false }
  ]);
  return statusSet;
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      error: null,
      activeStep: null,
      loading: true,
      questions: [],
      answeredQuestions: [],
      checkedValue: false,
      open: true,
      showMessage: false,
      correctAnswerCount: 0,
      statusArray: getSteps()
    };
    this.tempArray = [];
    this.getRadioParams = this.getRadioParams.bind(this);
    this.verifyAnswerArray = this.verifyAnswerArray.bind(this);
    this.checkAllValuesChecked = this.checkAllValuesChecked.bind(this);
  }

  componentDidMount() {
    this.callQuestionApi();
  }


  handleOpen = () => this.setState({ open: true })

  handleClose = () => this.setState({ open: false })

  getRadioParams(answer, question, index) {
    // console.log(answer, question, index);
    var temp = {};
    getAllStatus(index);
    const { answeredQuestions, statusArray } = this.state;
    temp = { 'question': question, correctAnswer: answer };
    if (answeredQuestions.length > 0) {
      answeredQuestions.forEach((v, k) => {
        if (v.question === question) {
          answeredQuestions.splice(k, 1);
          temp = { 'question': question, correctAnswer: answer };
        }
      })
    }

    this.tempArray.push(temp);


    // console.log(this.tempArray);
    this.setState({
      answeredQuestions: this.tempArray,
      activeStep: index
    });
  }

  getAllStatus(){
    
  }
  correctAnswerArray(param) {
    var tempArray = [];
    var temp = {};
    param.map((v, k) => {
      temp = { 'question': v.question, correctAnswer: v.correct_answer };
      tempArray.push(temp);
    });
    // console.log(tempArray);
    // this.verifyAnswerArray();
    return tempArray;
  }
  checkAllValuesChecked() {
    const { questions, answeredQuestions, correctAnswerCount } = this.state;
    if (answeredQuestions.length !== 10) {
      this.setState({
        showMessage: true
      });
    } else {
      this.verifyAnswerArray(questions, answeredQuestions, correctAnswerCount);
      this.setState({
        showMessage: false
      });
    }


  }
  verifyAnswerArray(questions, answeredQuestions, correctAnswerCount) {
    // console.log(questions, answeredQuestions);
    let temp = { isCorrectAnswer: false };
    let tempArray = [];
    // const correctAnswerCount = 0;
    if (answeredQuestions.length === 10) {
      answeredQuestions.forEach(function (answererd, index) {
        questions.forEach(function (original) {
          if (original.question === answererd.question && original.correctAnswer === answererd.correctAnswer) {
            temp.isCorrectAnswer = true;
            answeredQuestions[index].isCorrectAnswer = true;
            correctAnswerCount++;
          }
        });
        tempArray.push(temp);

      });
      // console.log(correctAnswerCount);
      this.setState({
        answeredQuestions: answeredQuestions,
      });
    }

    // console.log(this.props)
    this.props.history.replace({
      pathname: '/results',
      displayResults: this.state.answeredQuestions, correctAnswerCount: correctAnswerCount
    })
  }
  callQuestionApi() {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
      .then(res => res.json())
      .then(
      (result) => {
        this.setState({
          questions: this.correctAnswerArray(result.results),
          loading: false,
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          loading: false,
          error
        });
      }
      );
  }


  render() {

    const { classes } = this.props;
    const { questions, loading, showMessage, open } = this.state;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={10} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12}>
                <Back />
                <Button color='primary' className={classes.result} variant="contained" onClick={this.checkAllValuesChecked} >
                  Submit
                </Button>
                {showMessage && (
                  <Snackbar
                    autoHideDuration={100}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    open={open}
                    message="Please attempt all questions !!!" />)}
                <div className={classes.stepContainer}>
                  <div className={classes.bigContainer}>
                    <HorizontalLinearStepper props={{
                      steps: steps
                    }}></HorizontalLinearStepper>
                  </div>

                  <Fade
                    in={loading}
                    style={{
                      transitionDelay: loading ? '800ms' : '0ms',
                    }}
                    unmountOnExit
                  >
                    <CircularProgress style={{ marginBottom: 32, width: 100, height: 100 }} />
                  </Fade>

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
                              <RadioButton key={'radio' + v + 1} id={'radioID' + v + 1} props={{
                                answeredQuestions: this.state.answeredQuestions,
                                checkedValue: this.state.checkedValue,
                                getRadioParams: this.getRadioParams,
                                name: 'radioID' + v + 1,
                                question: k.question,
                                index: v
                              }} />
                              {/* </Typography> */}
                            </div>
                          </div>
                        </Paper>
                      </div>)
                  })};

                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment >
    )
  }
}

export default withRouter(withStyles(styles)(Dashboard));
