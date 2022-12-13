import {Divider, Typography, ListItem, List, Box} from '@mui/material';

import { HausbrandtFuncs } from '../../utils/hausbrandt';

interface compProps {
  data: HausbrandtFuncs;
}

export function HausbrandtData({data}:compProps):JSX.Element {
  return (
    <Box className='rounded-md shadow w-full' sx={{bgcolor: 'background.paper' }}>
      <List >
        <ListItem>
          <Typography variant='body2'>f<sub>1</sub> : <b>{data.f1 || 0}</b></Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body2'>f<sub>2</sub> : <b>{data.f2 || 0}</b></Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body2'>f<sub>0</sub> : <b>{data.f0 || 0}</b></Typography>
        </ListItem>
          <Divider/>
        <ListItem>
          <Typography variant='subtitle1'>Funkcje względnie proste: </Typography>
        </ListItem>
        <ListItem disablePadding>
          <List>
            <ListItem>
              <Typography variant='body2'>f<sub>(1)</sub> : <b>{data.simple.lower[1] || 0}</b></Typography>
            </ListItem>
            <ListItem>
              <Typography variant='body2'>f<sub>(2)</sub> : <b>{data.simple.lower[2] || 0}</b></Typography>
            </ListItem>
            <ListItem>
              <Typography variant='body2'>f<sup>(1)</sup> : <b>{data.simple.upper[1] || 0}</b></Typography>
            </ListItem>
            <ListItem>
              <Typography variant='body2'>f<sup>(2)</sup> : <b>{data.simple.upper[2] || 0}</b></Typography>
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
              <Typography variant='body2'>f<sub>[1]</sub> : <b>{data.quadratic.lower[1] || 0}</b></Typography>
            </ListItem>
            <ListItem>
              <Typography variant='body2'>f<sub>[2]</sub> : <b>{data.quadratic.lower[2] || 0}</b></Typography>
            </ListItem>
            <ListItem>
              <Typography variant='body2'>f<sup>[1]</sup> : <b>{data.quadratic.upper[1] || 0}</b></Typography>
            </ListItem>
            <ListItem>
              <Typography variant='body2'>f<sup>[2]</sup> : <b>{data.quadratic.upper[2] || 0}</b></Typography>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
};