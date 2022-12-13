import { useState } from 'react';

import {BsTrashFill} from 'react-icons/bs';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import { Button, ButtonGroup } from '@mui/material';
import { MatrixRow } from './MatrixRow';

import { Matrix } from '../../utils/hausbrandt';

interface Props {
  data: Matrix[];
  setter: (data: Matrix[])=>void;
}

export const CurrentMatrix = ({data, setter}: Props)=>{

  const [index, setIndex] = useState(0);
  if(index > data.length) setIndex(0);

  const disabledLeft: boolean = index ? false : true;
  const disabledRight: boolean = index >= data.length-1 ? true : false;
  const disabledDel: boolean = data.length ? false : true;

  const handleDel = ()=>{
    const buff = [...data];
    buff.splice(index, 1);
    setter(buff);
    if(index >= data.length - 1) setIndex(0);
  }

  let a:string = '';
  let b:string = '';
  let c:string = '';
  let d:string = '';

  if(data[index]){
    a = data[index].a.toFixed(3);
    b = data[index].b.toFixed(3);
    c = data[index].c.toFixed(3);
    d = data[index].d.toFixed(3);
  }

  return (
    <div className='w-1/2 flex flex-col gap-2 items-center bg-seashell p-3 rounded-md shadow'>
      <Button disabled={disabledDel} color='error' size='small' onClick={handleDel} className='col-span-2'><BsTrashFill className='mr-2'/>Usuń</Button>
      <MatrixRow label='A'>{a}</MatrixRow>
      <MatrixRow label='B'>{b}</MatrixRow>
      <MatrixRow label='C'>{c}</MatrixRow>
      <MatrixRow label='D'>{d}</MatrixRow>
      <ButtonGroup size='small'>
        <Button disabled={disabledLeft} onClick={()=>setIndex((curr)=>curr-1)} color='error' ><AiOutlineArrowLeft/></Button>
        <Button disabled={disabledRight} onClick={()=>setIndex((curr)=>curr+1)} color='error' ><AiOutlineArrowRight/></Button>
      </ButtonGroup>
    </div>
  )
}