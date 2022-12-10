import { useState } from 'react';
import {BsCalculatorFill} from 'react-icons/bs';

import { Typography , Box, Button } from '@mui/material';
import { NumberInput } from './NumberInput'; 

const _Azymuty = ():JSX.Element =>{

  const [Xa, setXa] = useState(0);
  const [Ya, setYa] = useState(0);
  const [Xb, setXb] = useState(0);
  const [Yb, setYb] = useState(0);

  const handleClick = ()=>{
    if(Xa && Xb && Ya && Yb) {
      console.log('eo');
    }
  }

  return (
    <Box onSubmit={()=>{
      console.log('eo');
    }}
      className='w-min flex-col mx-auto bg-light-salmon rounded-xl p-2'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
    >
      <Typography className='text-jet' variant='overline' align='center'>Obliczanie Azymutu AB</Typography>
      <NumberInput label='Xa' value={Xa} setter={setXa} />
      <NumberInput label='Ya' value={Ya} setter={setYa} />
      <NumberInput label='Xb' value={Xb} setter={setXb} />
      <NumberInput label='Yb' value={Yb} setter={setYb} />
      <Button
        onClick={handleClick}
        color="error"
        disabled={false}
        size="large"
        variant="outlined"
      >
        <BsCalculatorFill className='mr-2' />Oblicz
      </Button>
    </Box>
  );
}

export const Azymuty = _Azymuty;