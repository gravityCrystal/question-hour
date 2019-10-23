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

    {
        "stepwizard_row": {
            "display": "block"
        },
        "stepwizard_row_div_stepwizard_step": {
            "textAlign": "center",
            "position": "relative",
            "cursor": "default"
        },
        "stepwizard_row_div_stepwizard_step_span": {},
        "stepwizard_row_div_stepwizard_step_span_em": {
            "marginTop": "0",
            "cursor": "default",
            "fontStyle": "normal",
            "display": "none"
        },
        "stepwizard_row_div_stepwizard_step__btn": {},
        "stepwizard_row_div_stepwizard_step__btn_btn_default": {
            "color": "rgba(255, 255, 255, 0.8)",
            "width": "15px",
            "height": "15px",
            "borderRadius": "25px",
            "textAlign": "center",
            "backgroundColor": "rgba(255, 255, 255, 0.7)",
            "padding": "1px 0",
            "fontSize": "0.8rem"
        },
        "stepwizard_row_div_stepwizard_step__before": {
            "content": "\"\"",
            "display": "block",
            "backgroundColor": "rgba(255, 255, 255, 0.7)",
            "height": "2px",
            "width": "48%",
            "position": "absolute",
            "bottom": "8px",
            "left": "0px",
            "zIndex": "9"
        },
        "stepwizard_row_div_stepwizard_step__after": {
            "content": "\"\"",
            "display": "block",
            "backgroundColor": "rgba(255, 255, 255, 0.7)",
            "height": "2px",
            "width": "48%",
            "position": "absolute",
            "bottom": "8px",
            "right": "0px",
            "zIndex": "9"
        },
        "stepwizard_row_div_stepwizard_step_stepwizard_active": {
            "textAlign": "center",
            "position": "relative"
        },
        "stepwizard_row_div_stepwizard_step_stepwizard_active_span": {},
        "stepwizard_row_div_stepwizard_step_stepwizard_active_span_em": {
            "display": "none"
        },
        "stepwizard_row_div_stepwizard_step_stepwizard_active__btn_btn_default": {
            "color": "rgba(255, 255, 255, 0.8)",
            "width": "15px",
            "height": "15px",
            "borderRadius": "25px",
            "textAlign": "center",
            "backgroundColor": "#00A8E5",
            "padding": "1px 0",
            "fontSize": "0.8rem"
        },
        "stepwizard_row_div_stepwizard_step_stepwizard_active__before": {
            "content": "\"\"",
            "display": "block",
            "backgroundColor": "#00A8E5"
        },
        "stepwizard_row_div_stepwizard_step_stepwizard_active__after": {
            "content": "\"\"",
            "display": "block",
            "backgroundColor": "#00A8E5"
        },
        "stepwizard_row_div_stepwizard_step_stepwizard_completed": {
            "textAlign": "center",
            "position": "relative"
        },
        "stepwizard_row_div_stepwizard_step_stepwizard_completed_span": {},
        "stepwizard_row_div_stepwizard_step_stepwizard_completed_span_em": {
            "display": "none"
        },
        "stepwizard_row_div_stepwizard_step_stepwizard_completed__before": {
            "content": "\"\"",
            "display": "block",
            "backgroundColor": "#11C25D"
        },
        "stepwizard_row_div_stepwizard_step_stepwizard_completed__after": {
            "content": "\"\"",
            "display": "block",
            "backgroundColor": "#11C25D"
        },
        "stepwizard_row_div_stepwizard_step_stepwizard_completed__btn": {},
        "stepwizard_row_div_stepwizard_step_stepwizard_completed__btn_btn_default": {
            "color": "rgba(255, 255, 255, 0.8)",
            "width": "15px",
            "height": "15px",
            "borderRadius": "25px",
            "textAlign": "center",
            "backgroundColor": "#11C25D",
            "padding": "1px 0",
            "fontSize": "0.8rem",
            "WebkitAppearance": "unset !important"
        },
        "stepwizard_row_div_stepwizard_step_stepwizard_resubmit": {
            "textAlign": "center",
            "position": "relative"
        },
        "stepwizard_row_div_stepwizard_step_stepwizard_resubmit_span": {},
        "stepwizard_row_div_stepwizard_step_stepwizard_resubmit_span_em": {
            "display": "none"
        },
        "stepwizard_row_div_stepwizard_step_stepwizard_resubmit__before": {
            "content": "\"\"",
            "display": "block",
            "backgroundColor": "#EF9B0B"
        },
        "stepwizard_row_div_stepwizard_step_stepwizard_resubmit__after": {
            "content": "\"\"",
            "display": "block",
            "backgroundColor": "#EF9B0B"
        },
        "stepwizard_row_div_stepwizard_step_stepwizard_resubmit__btn": {},
        "stepwizard_row_div_stepwizard_step_stepwizard_resubmit__btn_btn_default": {
            "color": "rgba(255, 255, 255, 0.8)",
            "width": "15px",
            "height": "15px",
            "borderRadius": "25px",
            "textAlign": "center",
            "backgroundColor": "#EF9B0B",
            "padding": "1px 0",
            "fontSize": "0.8rem",
            "WebkitAppearance": "unset !important"
        }
    }
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
            <div className="stepwizard-step stepwizard-active" ><span className="btn btn-default "><em >1</em></span></div>
            <div className="stepwizard-step stepwizard-active" ><span className="btn btn-default "><em >2</em></span></div>
            <div className="stepwizard-step stepwizard-active" ><span className="btn btn-default "><em >3</em></span></div>


            {/* <Stepper classes={{ root: classes.stepper }} activeStep={5} alternativeLabel nonLinear={'true'} >
                {
                    steps.map((v, k) => {
                        console.log(k, v)
                        return (
                            <Step key={v} >
                                <StepLabel>{v}</StepLabel>
                            </Step>
                        );
                    })}
            </Stepper> */}
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