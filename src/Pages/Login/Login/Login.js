import { Button, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {user, loginUser, authError, signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);   
    }
    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                    LOGIN FORM
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                    <TextField 
                    sx={{width:'75%', m:1}}
                    id="standard-basic" 
                    label="YOUR EMAIL" 
                    name="email"
                    onChange={handleOnChange}
                    variant="standard" />
                    <TextField
                     sx={{width:'75%', m:1}}
                      id="standard-basic"
                      label="YOUR PASSWORD"
                      name="password"
                      onChange={handleOnChange}
                      type="password"
                      
                      variant="standard"
                    />
                   
                    <Button 
                    sx={{width:'75%', mt:3}} 
                    type="submit" 
                    color="inherit" 
                    variant="contained">LOGIN</Button>
                     <NavLink style={{textDecoration:'none'}} to="/register">
                    <Button 
                    color="secondary" 
                    variant="outlined" 
                    sx={{width:'75%', mt:2, textDecoration:'none'}}
                    >NEW USER? PLEASE REGISTER</Button>
                    </NavLink>
                    { user?.email && <Alert
                    sx={{ mt:2}} 
                     severity="success">login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>------------------------------------------------------------------</p>
                    <Button onClick={handleGoogleSignIn} 
                    sx={{width:'75%'}} 
                    type="submit" 
                    color="inherit" 
                    variant="contained">GOOGLE SIGN IN</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%', borderRadius:'10px'}} src="https://image.shutterstock.com/z/stock-photo-homemade-soaps-variety-of-colorful-handmade-soap-bars-on-wooden-background-602946728.jpg" alt=""/>
                </Grid>
        
            </Grid>
        </Container>
    );
};

export default Login;