import {Divider, Typography, ListItem, List, Box} from '@mui/material';

import { HausbrandtFuncs } from '../../utils/hausbrandt';

interface compProps {
  data: HausbrandtFuncs;
}

const checkFalseValue = (value: string | number)=>{
  if(isNaN(Number(value))) return '0.00';
  else return Number(value.toString()).toFixed(2);
}

export function HausbrandtData({data}:compProps):JSX.Element {
  return (
    <Box className='rounded-md shadow w-full' sx={{bgcolor: 'background.paper' }}>
      <List >
        <ListItem>
          <Typography variant='body2'>f<sub>1</sub> : <b>{checkFalseValue(data.f1)}</b></Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body2'>f<sub>2</sub> : <b>{checkFalseValue(data.f2)}</b></Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body2'>f<sub>0</sub> : <b>{checkFalseValue(data.f0)}</b></Typography>
        </ListItem>
          <Divider/>
        <ListItem>
          <Typography variant='subtitle1'>Funkcje względnie proste: </Typography>
        </ListItem>
        <ListItem disablePadding>
          <List>
            <ListItem>
              <Typography variant='body2'>f<sub>(1)</sub> : <b>{checkFalseValue(data.simple.lower[1])}</b></Typography>
            </ListItem>
            <ListItem>
              <Typography variant='body2'>f<sub>(2)</sub> : <b>{checkFalseValue(data.simple.lower[2])}</b></Typography>
            </ListItem>
            <ListItem>
              <Typography variant='body2'>f<sup>(1)</sup> : <b>{checkFalseValue(data.simple.upper[1])}</b></Typography>
            </ListItem>
            <ListItem>
              <Typography variant='body2'>f<sup>(2)</sup> : <b>{checkFalseValue(data.simple.upper[2])}</b></Typography>
            </ListItem>
          </List>
        </ListItem>
          <Divider/>
        <ListItem>
          <Typography variant='subtitle1'>Funkcje względnie kwadratowe:</Typography>
        </ListItem>
        <ListItem disablePadding>
          <List>
            <ListItem>
              <Typography variant='body2'>f<sub>(1)</sub> : <b>{checkFalseValue(data.quadratic.lower[1])}</b></Typography>
            </ListItem>
            <ListItem>
              <Typography variant='body2'>f<sub>(2)</sub> : <b>{checkFalseValue(data.quadratic.lower[2])}</b></Typography>
            </ListItem>
            <ListItem>
              <Typography variant='body2'>f<sup>(1)</sup> : <b>{checkFalseValue(data.quadratic.upper[1])}</b></Typography>
            </ListItem>
            <ListItem>
              <Typography variant='body2'>f<sup>(2)</sup> : <b>{checkFalseValue(data.quadratic.upper[2])}</b></Typography>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
};