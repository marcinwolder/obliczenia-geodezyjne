import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {BsTrashFill} from 'react-icons/bs';

export interface Data {
  Xa: string;
  Xb: string;
  Ya: string;
  Yb: string;
  d: string;
  A: string;
}

interface compProps {
  data: Data[];
  editData: (data: Data[])=>void;
}

export function AzymutyTable({data, editData}:compProps):JSX.Element {
  return (
    <TableContainer className='w-64' component={Paper}>
      <Table
        className='overflow-scroll'
        size='small'
      >
        <TableHead>
          <TableRow>
            <TableCell>Xa</TableCell>
            <TableCell>Xb</TableCell>
            <TableCell>Ya</TableCell>
            <TableCell>Yb</TableCell>
            <TableCell>d</TableCell>
            <TableCell>A</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow
              key={i}
            >
              {[
                ...Object.entries(row).map((x)=>{
                return <TableCell key={x[0]}>{parseFloat(x[1])}</TableCell>
                }), 
                <TableCell><button onClick={()=>{
                  const bufData= [...data];
                  bufData.splice(i, 1);
                  editData(bufData);
                }}><BsTrashFill className='text-red-salsa' /></button></TableCell>
              ]}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}