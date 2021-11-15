import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
      <Typography variant="h3" component="div">
      DELIVERY WAY
      </Typography>
      <hr/>
    <CardContent>
      
      
      <Typography variant="h4" component="div">
      OFFLINE
      </Typography>
      
      <Typography variant="body2">
        <h2>location: COX'S BAZAR,TARABANIAR CHARA</h2>
        <br />
        
      </Typography>
    </CardContent>
    <CardContent>
      
      <Typography variant="h4" component="div">
      ONLINE
      </Typography>
      
      <Typography variant="body2">
        <h2>OUR WEBSITE LINK:  HTTPS://PROGRAMMING.HERO.COM</h2>
        <br />
        <h2>PHONE:  01849917083</h2>
        <br />
        <h2>EMAIL: emansar@gmail.com</h2>
        <br />

        
      </Typography>
    </CardContent>
    
    
  </React.Fragment>
);

export default function Delivery() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}