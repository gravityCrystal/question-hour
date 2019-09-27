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
  const [value, setValue, selectedValue, setSelectedValue = React.useState('a');] = React.useState('yes');
  const { changeText } = props;

  const handleChange = (event, id) => {
    console.log(event.target.value, id);
    // setValue(event.target.value);
    props.changeText(event.target.value);
  };

  return (
    <div>
      <RadioGroup aria-label="gender" name={props.name} value={props.checkedValue} onChange={handleChange}>
        <FormControlLabel value="yes" control={<Radio name={props.name} checked={props.checkedValue} />} label="yes" />
        <FormControlLabel value="no" control={<Radio name={props.name} checked={props.checkedValue} />}
          label="no" />
      </RadioGroup>
    </div>
  );
}
