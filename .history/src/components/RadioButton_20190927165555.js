import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
// import default from './Dashboard';

const styles = theme => ({
  coloGreen: {
    color: green[400],
    '&$checked': {
      color: green[600]
    }
  }
});

function RadioButton({ props }) {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = event => {
    setSelectedValue(event.target.value);
    props.changeText(event.target.value, props.question, props.index)
  };

  return (
    <div>
      <RadioGroup aria-label="gender" name={props.name} value={props.checkedValue} >
        <FormControlLabel value="True" control={<Radio className={classes.root}classes={coloGreen} name={props.name}
          checked={selectedValue === 'True'}
          onChange={handleChange}
          value="True" />} label="True" />
        <FormControlLabel value="False" control={<Radio color='primary' name={props.name}
          checked={selectedValue === 'False'}
          onChange={handleChange}
          value="False" />}
          label="False" />
      </RadioGroup>
    </div>
  )
}


export default (withStyles)(styles)(RadioButton)