import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
}

export function BasicTable({data}:compProps):JSX.Element {
  return (
    <TableContainer sx={()=>({width: '14rem'})} component={Paper}>
      <Table
        className='overflow-scroll'
      >
        <TableHead>
          <TableRow>
            <TableCell>Xa</TableCell>
            <TableCell>Xb</TableCell>
            <TableCell>Ya</TableCell>
            <TableCell>Yb</TableCell>
            <TableCell>d</TableCell>
            <TableCell>A</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow
              key={i}
            >
              {Object.entries(row).map((x)=>{
                return <TableCell key={x[0]}>{parseFloat(x[1])}</TableCell>
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}