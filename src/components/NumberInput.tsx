import {ChangeEvent} from 'react';
import {TextField} from '@mui/material';

interface CompProps {
  label: string;
  value: number;
  setter: (x: number)=>void;

}

const _Comp = (props: CompProps):JSX.Element=>{
  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    props.setter(Number(e.target.value));
  }

  if(props.value)
  return (
    <TextField color='error' className='' value={props.value || ''} onChange={handleChange} size='small' id="outlined-basic" label={`${props.label}`} type={"number"} variant="outlined" />
  )
  else
  return(
    <TextField error={props.value ? false : true} color='error' helperText="Podaj wartość" className='' value={props.value || ''} onChange={handleChange} size='small' id="outlined-basic" label={`${props.label}`} type={"number"} variant="outlined" />
  )
}

export const NumberInput = _Comp;