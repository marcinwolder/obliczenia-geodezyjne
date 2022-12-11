import {useEffect, useState, ChangeEvent} from 'react';
import {TextField} from '@mui/material';

interface CompProps {
  label: string;
  value: string;
  rowNums: number;
  setter: (x: string)=>void;
  int?: boolean;
}

const _Comp = (props: CompProps):JSX.Element=>{
  const [start, setStart] = useState(true);

  useEffect(()=>{
    setStart(true);
  }, [props.rowNums])

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    if(start) setStart(false);

    const str = e.target.value;
    let error: boolean = false;

    if(str.split('').filter((x)=>x==='.').length > 1) error = true;
    if(str.at(-1)==='-' && str.length > 1) error = true;

    const possible = props.int ? '0123456789-' : '0123456789.-';

    if(str.length > 0 && !(possible.includes(str.at(-1) as string))) error = true;

    if(!error){
      props.setter(e.target.value);
    } else {
      props.setter(props.value);
    };
  }

  const handleBlur = ()=>{
    setStart(false);
  }

  if(props.value || start)
  return (
    <TextField color='error' className='w-64' value={start ? '' : props.value} onChange={handleChange} onBlur={handleBlur} size='small' id="outlined-basic" label={`${props.label}`} variant="outlined" />
  )
  else
  return(
    <TextField error={props.value ? false : true} color='error' helperText={`Podaj wartość ${props.label}`} className='w-64' value={start ? '' : props.value} onChange={handleChange} onBlur={handleBlur} size='small' id="outlined-basic" label={`${props.label}`} variant="outlined" />
  )
}

export const NumberInput = _Comp;