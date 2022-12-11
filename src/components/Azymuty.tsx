import { useState } from 'react';
import {BsCalculatorFill} from 'react-icons/bs';

import { Typography , Stack, Button, styled, ButtonProps } from '@mui/material';
import { NumberInput } from './NumberInput'; 
import { BasicTable, Data } from './BasicTable';

import { getA, getD } from '../utils/azymuty';

const _Azymuty = ():JSX.Element =>{

  const [Xa, setXa] = useState('');
  const [Ya, setYa] = useState('');
  const [Xb, setXb] = useState('');
  const [Yb, setYb] = useState('');

  const [rows, setRows] = useState<Data[]>([]);

  let disabled: boolean = Xa && Xb && Ya && Yb ? false : true;

  const handleClick = ()=>{
    if(Xa && Xb && Ya && Yb) {
      setXa('');
      setXb('');
      setYa('');
      setYb('');
      const [_Xa, _Xb, _Ya, _Yb]:number[] = [Xa, Xb, Ya, Yb].map((x)=>Number(x));
      const d = getD(_Xb-_Xa, _Yb-_Ya).toFixed(4);
      const A = getA(_Xb-_Xa, _Yb-_Ya).toFixed(4);
      const row: Data = {Xa, Xb, Ya, Yb, d, A};
      setRows([...rows, row]);
    }
  }

  const SubmitBtn = styled(Button)<ButtonProps>({'alignSelf': 'self-end', 'marginBlockEnd': '1rem'})

  return (
    <Stack alignItems={'center'} direction="column" className='w-72 mx-auto bg-light-salmon rounded-xl p-4'>
      <Typography alignSelf='self-start' className='text-jet' variant='overline'>Obliczanie Azymutu AB</Typography>
      <div className='flex flex-col my-4'>
        <NumberInput label='Xa' value={Xa} setter={setXa} />
        <NumberInput label='Ya' value={Ya} setter={setYa} />
        <NumberInput label='Xb' value={Xb} setter={setXb} />
        <NumberInput label='Yb' value={Yb} setter={setYb} />
      </div>
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