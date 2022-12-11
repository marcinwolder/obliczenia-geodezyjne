import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {ImArrowUp} from 'react-icons/im';
import {BsTrashFill} from 'react-icons/bs';

export interface Data {
  X: string;
  Y: string;
  dX: string;
  dY: string;
  p2P: string;
  n2P: string;
}

interface compProps {
  data: Data[];
  editData: (data: Data[])=>void;
}

export function PoleDzialkiTable({data, editData}:compProps):JSX.Element {

  let [sumDX, sumDY, sumP2P, sumN2P] = [0,0,0,0];
  const rows = data.map((row, index)=>{
    const handleMove = ()=>{
      const bufData= [...data];
      [bufData[index], bufData[index-1]] = [bufData[index-1], bufData[index]];
      editData(bufData);
    }
    const handleDelete = ()=>{
      const bufData= [...data];
      bufData.splice(index, 1);
      editData(bufData);
    }
    const adminBtn = index ? <TableCell key="btn"><button onClick={handleMove}><ImArrowUp className='text-red-salsa'/></button></TableCell> : <TableCell key="btn"></TableCell>;
    const [indexUp, indexDown] = [index - 1 >= 0 ? index - 1 : data.length-1, index + 1 < data.length ? index + 1 : 0];

    row.dY = (parseFloat(data[indexDown].Y) - parseFloat(data[indexUp].Y)).toFixed(2);
    sumDY += parseFloat(row.dY);
    row.dX = (parseFloat(data[indexDown].X) - parseFloat(data[indexUp].X)).toFixed(2);
    sumDX += parseFloat(row.dX);
    row.p2P = (parseFloat(row.X) * parseFloat(row.dY)).toFixed(2);
    sumP2P += parseFloat(row.p2P);
    row.n2P = (parseFloat(row.Y) * parseFloat(row.dX)).toFixed(2);
    sumN2P += parseFloat(row.n2P);

    return (
      <>
        <TableRow key={index}>
          {[
            adminBtn,
            ...Object.entries(row).map(([name, value]: string[], index)=>{
              return (
                <TableCell key={name}>{parseFloat(value).toFixed(2)}</TableCell>
              )
            }),
            <TableCell><button onClick={handleDelete}><BsTrashFill className='text-red-salsa' /></button></TableCell>
          ]}
        </TableRow>
      </>
    )
  });

  return (
    <TableContainer className='w-64' component={Paper}>
      <Table
        className='overflow-scroll'
        size='small'
      >
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>X</TableCell>
            <TableCell>Y</TableCell>
            <TableCell>ΔY</TableCell>
            <TableCell>ΔX</TableCell>
            <TableCell>P</TableCell>
            <TableCell>-P</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
          <TableRow>
            <TableCell colSpan={2}/>
            <TableCell>Sumy: </TableCell>
            <TableCell>{sumDY.toFixed(2)}</TableCell>
            <TableCell>{sumDX.toFixed(2)}</TableCell>
            <TableCell>{sumP2P.toFixed(2)}</TableCell>
            <TableCell>{sumN2P.toFixed(2)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}