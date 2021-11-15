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
      review
      </Typography>
    <CardContent>
      
      <Typography variant="h5" component="div">
      LUX
      </Typography>
      
      <Typography variant="body2">
        OUR SOAP SHOP IS FAMOUS IN THIS REGION. WE MAINTAIN QUALITY FOR EVERY SOAP. WE TALK ABOUT QUALITY NOT FOR QUANTITY
        <br />
        
      </Typography>
    </CardContent>
    <CardContent>
      
      <Typography variant="h5" component="div">
      SANDALINA
      </Typography>
      
      <Typography variant="body2">
        OUR SOAP SHOP IS FAMOUS IN THIS REGION. WE MAINTAIN QUALITY FOR EVERY SOAP. WE TALK ABOUT QUALITY NOT FOR QUANTITY
        <br />
        
      </Typography>
    </CardContent>
    <CardContent>
      
      <Typography variant="h5" component="div">
      MERIL
      </Typography>
      
      <Typography variant="body2">
        OUR SOAP SHOP IS FAMOUS IN THIS REGION. WE MAINTAIN QUALITY FOR EVERY SOAP. WE TALK ABOUT QUALITY NOT FOR QUANTITY
        <br />
        
      </Typography>
    </CardContent>
    
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}