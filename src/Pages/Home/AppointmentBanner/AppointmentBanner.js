import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { textAlign } from '@mui/system';
import { Link } from 'react-router-dom';

const appointmentBg = {
    marginTop:150,
    background: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Lh84nacZgSmJNb91oqe_OcKgLGDZ7Rgp1w&usqp=CAU")`
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img 
            style={{width:'400px', height:'500px', marginTop:'-75px', borderRadius:'10px'}} 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv54RTYJPfTCoKpxRCZhwNgXd5i9grrrFEaw&usqp=CAU" alt=""/>
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent:"flex-start", textAlign:"left", alignItems:"center"}}>
            <Box>
            <Typography variant="h6" sx={{mb:3}}  style={{color:'violet'}}>
                APPOINTMENT
            </Typography>
            <Typography variant="h6" sx={{mb:3}}>
                MAKE AN APPOINTMENT TODAY
            </Typography>
            <Typography variant="h8" style={{color:'white'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
            <div>
            <Link style={{textDecoration:'none'}} to="/appointment"><Button sx={{mt:3}} color="inherit" variant="contained">EXPLORE</Button></Link>
            </div>
            </Box>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;