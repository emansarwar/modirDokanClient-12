import { Button, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink , useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser, authError} = useAuth();

    const  handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData);   
    }
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2 ){
        alert("YOUR PASSWORD DID NOT MATCH")
        return
    }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
        
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                    REGISTER FORM
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                    <TextField 
                    sx={{width:'75%', m:1}}
                    id="standard-basic" 
                    label="YOUR NAME" 
                    name="name"
                    
                     onBlur={ handleOnBlur}
                    variant="standard" />

                    <TextField 
                    sx={{width:'75%', m:1}}
                    id="standard-basic" 
                    label="YOUR EMAIL" 
                    name="email"
                    type="email"
                     onBlur={ handleOnBlur}
                    variant="standard" />
                    <TextField
                     sx={{width:'75%', m:1}}
                      id="standard-basic"
                      label="YOUR PASSWORD"
                      name="password"
                       onBlur={ handleOnBlur}
                      type="password"
                      
                      variant="standard"
                    />
                    <TextField
                     sx={{width:'75%', m:1}}
                      id="standard-basic"
                      label="RETYPE YOUR PASSWORD"
                      name="password2"
                       onBlur={ handleOnBlur}
                      type="password"
                      
                      variant="standard"
                    />
                   
                    <Button 
                    sx={{width:'75%', mt:3}} 
                    type="submit" 
                    color="inherit" 
                    variant="contained">REGISTER NOW</Button>
                     <NavLink style={{textDecoration:'none'}} to="/login">
                    <Button 
                    color="secondary" 
                    variant="outlined" 
                    sx={{width:'75%', mt:3, textDecoration:'none'}}
                    >ALREADY REGISTERED? PLEASE LOGIN</Button>
                    </NavLink>
                    </form>
                    { user?.email && <Alert severity="success">user created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%', borderRadius:'10px'}} src="https://image.shutterstock.com/z/stock-photo-homemade-soaps-variety-of-colorful-handmade-soap-bars-on-wooden-background-602946728.jpg" alt=""/>
                </Grid>
        
            </Grid>
        </Container>
    );
};

export default Register;