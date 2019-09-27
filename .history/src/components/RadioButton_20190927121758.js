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
  // console.log(props);
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = event => {
    setSelectedValue(event.target.value);
    props.changeText(event.target.value, props.question)
  };

  return (
    <div>
      <RadioGroup aria-label="gender" name={props.name} value={props.checkedValue} >
        <FormControlLabel value="True" control={<Radio name={props.name}
          checked={selectedValue === 'True'}
          onChange={handleChange}
          value="True" />} label="True" />
        <FormControlLabel value="no" control={<Radio name={props.name}
          checked={selectedValue === 'no'}
          onChange={handleChange}
          value="no" />}
          label="no" />
      </RadioGroup>
    </div>
  );
}
