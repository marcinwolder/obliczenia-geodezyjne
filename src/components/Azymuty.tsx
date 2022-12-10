import { useState } from 'react';
import {BsCalculatorFill} from 'react-icons/bs';

import { Typography , Stack, Button, styled, ButtonProps } from '@mui/material';
import { NumberInput } from './NumberInput'; 
import { BasicTable, Data } from './BasicTable';

import { getA, getD } from '../utils/azymuty';

const _Azymuty = ():JSX.Element =>{

  const [Xa, setXa] = useState(0);
  const [Ya, setYa] = useState(0);
  const [Xb, setXb] = useState(0);
  const [Yb, setYb] = useState(0);

  const [rows, setRows] = useState<Data[]>([]);

  let disabled: boolean = Xa && Xb && Ya && Yb ? false : true;

  const handleClick = ()=>{
    if(Xa && Xb && Ya && Yb) {
      setXa(0);
      setXb(0);
      setYa(0);
      setYb(0);
      const d = Number(getD(Xb-Xa, Yb-Ya).toFixed(4));
      const A = Number(getA(Xb-Xa, Yb-Ya).toFixed(4));
      const row: Data = {Xa, Xb, Ya, Yb, d, A};
      setRows([...rows, row]);
    }
  }

  const SubmitBtn = styled(Button)<ButtonProps>({'alignSelf': 'self-end', 'color': 'var'})

  return (
    <Stack alignItems={'baseline'} direction="column" spacing={1} className='w-max mx-auto bg-light-salmon rounded-xl p-4'>
      <Typography className='text-jet' variant='overline'>Obliczanie Azymutu AB</Typography>
      <NumberInput label='Xa' value={Xa} setter={setXa} />
      <NumberInput label='Ya' value={Ya} setter={setYa} />
      <NumberInput label='Xb' value={Xb} setter={setXb} />
      <NumberInput label='Yb' value={Yb} setter={setYb} />
      <SubmitBtn
        disabled={disabled}
        onClick={handleClick}
        color="error"
        size="large"
        variant="outlined"
      >
        <BsCalculatorFill className='mr-2' />Oblicz
      </SubmitBtn>
      <BasicTable data={rows} />
    </Stack>
  );
}

export const Azymuty = _Azymuty;