import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings =[{
    "id": 1,
    "name": "LUX",
    "description": "lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et",
    "img": "https://doinikmudibazar.com/wp-content/uploads/2020/09/lux-bathing-soap.jpg"
  }, {
    "id": 2,
    "name": "MERIL",
    "description": "sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula",
    "img": "https://www.shodagor.com/wp-content/uploads/2020/11/meril-milk-beli-soap-bar-75gm_shodagor-product.jpeg"
}, {
  "id": 3,
  "name": "KEYA",
  "description": "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi",
  "img": "https://www.okpapa.com.bd/wp-content/uploads/2020/04/KEYA-SOAP-75G-600x600.jpg"
  }, {
    "id": 4,
    "name": "SANDALINA",
    "description": "tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh",
    "img": "https://i.ytimg.com/vi/pZ58wLpoO3M/hqdefault.jpg"
  }, {
    "id": 5,
    "name": "DOVE",
    "description": "amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel",
    "img": "https://5.imimg.com/data5/SELLER/Default/2021/6/NN/EF/GK/33812545/u5ee6b8ef708644f69ee8eedd6afda5d2w-500x500.jpg"
  }, {
    "id": 6,
    "name": "SAVLON",
    "description": "quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam",
    "img": "https://5.imimg.com/data5/SELLER/Default/2021/5/LM/PJ/GL/34912835/savlon-glycerin-soap-1567581929-10030618-1-500x500.jpg"
  }, {
    "id": 7,
    "name": "LILY",
    "description": "ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit",
    "img": "https://www.bigbasket.com/media/uploads/p/l/40076758-2_2-lux-soap-bar-water-lily-cooling-mint-fresh-splash-save-rs-6-.jpg"
  }, {
    "id": 8,
    "name": "LIFEBOUY",
    "description": "pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac",
    "img": "https://shop.shajgoj.com/wp-content/uploads/2020/03/LIFEBUOY-CARE-SOAP-600x600.jpg"
  }, {
    "id": 9,
    "name": "DETTOL",
    "description": "amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
    "img": "https://5.imimg.com/data5/DT/BJ/MY-35317910/dettol-bath-soap-500x500.jpg"
  }, {
    "id": 10,
    "name": "COSCO",
    "description": "aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque",
    "img": "https://www.khan.com.bd/wp-content/uploads/2020/09/Cosco-Glycerine-Soap-300x300.jpg"
  }]
const AvailableAppointment = () => {
  const [bookingSuccess, setBookingSuccess ] = useState(false);
    return (
        <Container>
            
            <Typography variant="h4" sx={{ color: 'success.main', mb: 2, fontWeight: 600 }}>AVAILAVLE APPOINTMENT</Typography>
            { bookingSuccess && <Alert
                     severity="success"
                     >booked successfully!</Alert>}
            <Grid container spacing={2}>
                {
                bookings.map(booking =><Booking
                key= {Booking.id}
                booking={booking}
                setBookingSuccess={setBookingSuccess}
                ></Booking>)
                }
            </Grid>
        </Container>
            
        
    );
};

export default AvailableAppointment;