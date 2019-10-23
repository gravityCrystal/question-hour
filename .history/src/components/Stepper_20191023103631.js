import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const getSteps = () => {
    return [
        { 'Question1': false },
        { 'Question2': false },
        { 'Question3': true },
        { 'Question4': false },
        { 'Question5': false },
        { 'Question6': true },
        { 'Question7': false },
        { 'Question8': true },
        { 'Question9': false },
        { 'Question10': false }
    ];
}


export default function HorizontalLinearStepper({ props }) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();
    console.log(props);

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper classes={{ root: classes.stepper }} alternativeLabel nonLinear={'true'} >
                {
                    steps.map((v, k) => {
                        console.log(v['Question' + (k + 1)], v)
                        return (
                            <Step key={v} active={v['Question' + (k + 1)]} >
                                <StepLabel>{}</StepLabel>
                            </Step>
                        );
                    })}
            </Stepper>
        </div>
    );
}


// {
//     steps.map((v, k) => {
//         // console.log(k, v)
//         return (
//             <Stepper classes={{ root: classes.stepper }} activeStep={} alternativeLabel >
//                 {
//                     v && (
//                         <Step key={v} >
//                             <StepLabel>{v}</StepLabel>
//                         </Step>
//                     )
//                 }
//             </Stepper>
//         );
//     })}