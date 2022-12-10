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

    const str = e.target.value;
    let error: boolean = false;

    if(str.split('').filter((x)=>x==='.').length > 1) error = true;
    if(str.at(-1)==='-' && str.length !== 1) error = true;
    if(str.length > 0 && !('0123456789.-'.includes(str.at(-1) as string))) error = true;

    if(!error){
      props.setter(e.target.value);
    } else {
      props.setter(e.target.value.slice(0, -1))
    };
  }

  if(props.value)
  return (
    <TextField color='error' className='' value={start ? '' : props.value} onChange={handleChange} size='small' id="outlined-basic" label={`${props.label}`} variant="outlined" />
  )
  else
  return(
    <TextField error={props.value ? false : true} color='error' helperText="Podaj wartość" className='' value={start ? '' : props.value} onChange={handleChange} size='small' id="outlined-basic" label={`${props.label}`} variant="outlined" />
  )
}

export const NumberInput = _Comp;