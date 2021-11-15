import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import { typography, typographyVariant } from '@mui/system';

const services=[
   { "id": 1,
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
  }]
  

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" component="div">
                    SERVICES WE PROVIDE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {
                   services.map(service=><Service
                   key={service.name}
                   service={service}
                   ></Service>)
               }
                </Grid>
            
            </Container>
        </Box>
    );
};

export default Services;


// [ 
//     {   
        
//         "name": "Waylon",
//         "description": "my name is khan",
//         "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBxE5EMLqMyPzJ_-6o1FTwaOeY5osodOYR2Pnfwl-6ww4at7w26zx1RB1MsEuFJlQw67I&usqp=CAU"
//       }, {
//         "name": "Thornton",
//         "description": "your name is modi",
//         "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGyFHb0kKr-JMieqK7N-1j0-bPrDWYQ4U4D9XlJMYklHoQlnhWr_sMCAdryall0CK8kZA&usqp=CAU"
//       }, {
//         "name": "Winne",
//         "description": "you dunno who am i",
//         "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAaVfSiTMlxSdVVOJDPV3zCljPdu6GP4Zxg&usqp=CAU"
//       }]