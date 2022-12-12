import { useState } from 'react';
import {BsRulers, BsTrashFill} from 'react-icons/bs';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

import { Divider, Typography , Stack, Button, ButtonGroup, styled, ButtonProps } from '@mui/material';

import { NumberInput } from '../components/NumberInput';
import { Matrix, Hausbrandt as HausbrandtClass } from '../utils/hausbrandt';

import { MatrixRow } from '../components/Hausbrandt/MatrixRow';

const _HausbrandtPage = ()=>{
  
  const [valueA, setA] = useState('');
  const [valueB, setB] = useState('');
  const [valueC, setC] = useState('');
  const [valueD, setD] = useState('');
  
  const [matrices, setMatrices] = useState<Matrix[]>([]);
  
  const disabled: boolean = valueA && valueB && valueC && valueD ? false : true;
  
  type Nums = [number, number, number, number];
  const handleClick = ()=>{
    const hausbrandt = new HausbrandtClass();
    hausbrandt.setValues(matrices);
    hausbrandt.addValues(...[valueA, valueB, valueC, valueD].map(x=>Number(x)) as Nums);
    setMatrices(hausbrandt.getMatrices());
  }

  const SubmitBtn = styled(Button)<ButtonProps>({'alignSelf': 'self-end'})

  return (
    <Stack alignItems={'center'} divider={<Divider variant='middle' flexItem/>} spacing={2} direction="column" className='w-72 my-4 mx-auto bg-light-salmon rounded-xl p-4'>
      <Typography alignSelf='self-start' className='text-jet' variant='overline'>Hausbrandt</Typography>
      <div className='flex flex-col gap-2 w-full'>
        <Stack alignItems={'center'} divider={<Divider light orientation='vertical' variant='fullWidth' flexItem/>} spacing={1} direction="row">
          <div className='w-1/2 grid grid-cols-2 gap-2'>
            <NumberInput label='A' value={valueA} setter={setA} rowNums={matrices.length} />
            <NumberInput label='B' value={valueB} setter={setB} rowNums={matrices.length} />
            <NumberInput label='C' value={valueC} setter={setC} rowNums={matrices.length} />
            <NumberInput label='D' value={valueD} setter={setD} rowNums={matrices.length} />
            <SubmitBtn
              sx={{gridColumn: '1 / 3'}}
              disabled={disabled}
              onClick={handleClick}
              color="error"
              size="small"
              variant="outlined"
            >
              <BsRulers className='mr-2 text-2xl' />Dodaj matryce
            </SubmitBtn>
          </div>
          <div className='w-1/2 flex flex-col gap-2 items-center bg-seashell p-3 rounded-md shadow'>
            <Button color='error' size='small' className='col-span-2'><BsTrashFill className='mr-2'/>Usuń</Button>
            <MatrixRow label='A'></MatrixRow>
            <MatrixRow label='B'></MatrixRow>
            <MatrixRow label='C'></MatrixRow>
            <MatrixRow label='D'></MatrixRow>
            <ButtonGroup size='small'>
              <Button color='error' ><AiOutlineArrowLeft/></Button>
              <Button color='error' ><AiOutlineArrowRight/></Button>
            </ButtonGroup>
          </div>
        </Stack>
      </div>
    </Stack>
  );
}

export const HausbrandtPage = _HausbrandtPage;