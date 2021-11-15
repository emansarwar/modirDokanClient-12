import React from 'react';

import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import BookingModal from '../BookingModal/BookingModal';



const Booking = ({booking, setBookingSuccess}) => {
    const {name, description} = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    
    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py:5}}>
                <Typography sx={{ color: 'success.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">{name}</Typography>
            
                <Typography variant="h6" gutterBottom component="div">{description}</Typography>
                <Button onClick={handleBookingOpen} color="inherit" variant="contained">PURCHASE NOW</Button>
            
               
            </Paper>
        </Grid>
        <BookingModal
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        setBookingSuccess={setBookingSuccess}
        ></BookingModal>
    </>
    );
};

export default Booking;