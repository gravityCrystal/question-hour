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