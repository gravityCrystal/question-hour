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
        'Question1',
        'Question2',
        'Question3',
        'Question4',
        'Question5',
        'Question6',
        'Question7',
        'Question8',
        'Question9',
        'Question10'
    ];
}


export default function HorizontalLinearStepper({ props }) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();
    console.log(props);

    const isStepOptional = step => {
        return step === 1;
    };

    const isStepSkipped = step => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(prevSkipped => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
                        {
                    steps.map((v, k) => {
                        // console.log(k, v)
                        return (


            <Stepper classes={{ root: classes.stepper }} activeStep={5} alternativeLabel nonLinear={'true'} >
                {
                    steps.map((v, k) => {
                        // console.log(k, v)
                        return (
                            <Step key={v} >
                                <StepLabel>{v}</StepLabel>
                            </Step>
                        );
                    })}
            </Stepper>
              );
            })}
        </div>
    );
}