import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function RadioButton({ props }) {
  console.log(props);
  const classes = useStyles();
  const [value, setValue] = React.useState('yes');
  const { changeText } = props;

  const handleChange = event => {
    console.log(event.target.value);
    setValue(event.target.value);
    // this.changeText(event.target.value);
  };

  return (
    <div>
      <RadioGroup aria-label="gender" name={props.name} id={props.name} key={props.name} value={props.dummy} onChange=() => this.handleSort(column)}>
        <FormControlLabel value="yes" control={<Radio />} label="yes" />
        <FormControlLabel value="no" control={<Radio />} label="no" />
      </RadioGroup>
    </div>
  );
}
