import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    return (
        <Box container>
            {/* <Grid item xs={8}>
              <Calendar></Calendar>
            </Grid> */}
            <Grid item xs={12}>
              <Appointments></Appointments>
              
            </Grid>
          </Box>
    );
};

export default DashboardHome;