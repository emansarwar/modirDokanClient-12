import { Divider } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Delivery from '../Delivery/Delivery';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <AppointmentBanner></AppointmentBanner>
           <Services></Services>
           <Divider/>
           <Delivery></Delivery>
           <Divider/>
           <Review></Review>
           <Divider/>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;