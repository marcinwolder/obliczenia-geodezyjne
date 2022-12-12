import { useState } from 'react';
import {BsRulers, BsTrashFill} from 'react-icons/bs';

import { Divider, Typography , Stack, Button, styled, ButtonProps } from '@mui/material';
import { NumberInput } from './NumberInput'; 
import { PoleDzialkiTable, Data } from './PoleDzialkiTable';

const _PoleDzialki = ():JSX.Element =>{
  const [valueX, setX] = useState('');
  const [valueY, setY] = useState('');
  const [punkty, setPunkty] = useState<Data[]>([]);

  const disabledAddBtn: boolean = valueX && valueY ? false : true;
  const disabledResetBtn: boolean = punkty.length ? false : true;

  const handleClick = ()=>{
    if(valueX && valueY) {
      setX('');
      setY('');
      setPunkty([...punkty, {X: valueX, Y: valueY}]);
    }
  }

  const SubmitBtn = styled(Button)<ButtonProps>({'alignSelf': 'self-end'})

  return (
    <Stack alignItems={'center'} divider={<Divider variant='middle' flexItem/>} spacing={2} direction="column" className='w-72 my-4 mx-auto bg-light-salmon rounded-xl p-4'>
      <Typography alignSelf='self-start' className='text-jet' variant='overline'>Dziennik podziału działki</Typography>
      <div className='flex flex-col gap-2 w-64'>
        <NumberInput helper rowNums={punkty.length} label='X' value={valueX} setter={setX} />
        <NumberInput helper rowNums={punkty.length} label='Y' value={valueY} setter={setY} />
        <div className='flex gap-2'>
          <SubmitBtn
            disabled={disabledResetBtn}
            onClick={()=>{setPunkty([])}}
            color="error"
            size="small"
            variant="outlined"
          >
            <BsTrashFill className='mr-2 text-2xl' />Wyczyść punkty
          </SubmitBtn>
          <SubmitBtn
            disabled={disabledAddBtn}
            onClick={handleClick}
            color="error"
            size="small"
            variant="outlined"
          >
            <BsRulers className='mr-2 text-2xl' />Dodaj punkt
          </SubmitBtn>
        </div>
      </div>
      <div className='flex flex-col gap-2 w-64'>
        <PoleDzialkiTable data={punkty} editData={setPunkty} />
      </div>
    </Stack>
  );
}

export const PoleDzialki = _PoleDzialki;