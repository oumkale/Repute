import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import React from 'react';
import { useStyles } from "./styles";

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const classes = useStyles();
    
  return (
    
    <div>
      <Radio
        
        checked={selectedValue === 'd'}
        onChange={handleChange}
        value="d"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'D' }}
      />
      
    </div>
  );
}