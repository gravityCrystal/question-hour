import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

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



export default function StatusStepper({ props }) {
    const classes = useStyles();
<<<<<<< HEAD
    const { statusSteps } = props;
    return (
        <div className={classes.root}>
            <Stepper classes={{ root: classes.stepper }} alternativeLabel nonLinear={true} >
                {
                    statusSteps.length > 0 && statusSteps.map((v, k) => {
                        console.log(v, k)
                        return (
                            <Step key={k} active={v} >
                                <StepLabel>{'Question' + (k + 1)}</StepLabel>
=======
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const {steps} = getSteps || props;
    console.log(props);

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper classes={{ root: classes.stepper }} alternativeLabel >
                {
                  steps && steps.map((v, k) => {
                        console.log(k, v)
                        return (
                            <Step key={v} active={false} >
                                <StepLabel>{v.toString()}</StepLabel>
>>>>>>> bbd942d0caf131497b2d45f1a183da425e82b506
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