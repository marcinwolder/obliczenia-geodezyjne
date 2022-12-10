import {useState, ChangeEvent} from 'react';
import {TextField} from '@mui/material';

interface CompProps {
  label: string;
  value: string;
  setter: (x: string)=>void;
}

const _Comp = (props: CompProps):JSX.Element=>{
  const [start, setStart] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    if(start) setStart(false);
    if(parseFloat(e.target.value)){
      props.setter(e.target.value);
    }
  }

  if(props.value)
  return (
    <TextField color='error' className='' value={start ? '' : props.value} onChange={handleChange} size='small' id="outlined-basic" label={`${props.label}`} type='number' variant="outlined" />
  )
  else
  return(
    <TextField error={props.value ? false : true} color='error' helperText="Podaj wartość" className='' value={start ? '' : props.value} onChange={handleChange} size='small' id="outlined-basic" label={`${props.label}`} type='number' variant="outlined" />
  )
}

export const NumberInput = _Comp;