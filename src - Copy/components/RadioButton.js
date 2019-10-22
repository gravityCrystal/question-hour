import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function RadioButton({ props }) {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = event => {
    setSelectedValue(event.target.value);
    props.getRadioParams(event.target.value, props.question, props.index)
  };

  return (
    <div>
      <RadioGroup aria-label="gender" name={props.name} value={props.checkedValue} >
        <FormControlLabel value="True" control={<Radio color='secondary' name={props.name}
          checked={selectedValue === 'True'}
          onChange={handleChange}
          value="True" />} label="True" />
        <FormControlLabel value="False" control={<Radio color='secondary' name={props.name}
          checked={selectedValue === 'False'}
          onChange={handleChange}
          value="False" />}
          label="False" />
      </RadioGroup>
    </div>
  )
}
