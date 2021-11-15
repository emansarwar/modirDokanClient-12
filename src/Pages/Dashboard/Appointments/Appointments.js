import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Appointments = () => {
    const {user, token} = useAuth();
    const [appointments, setAppointments] = useState([])

    useEffect( () => {
        const url =`https://damp-basin-75114.herokuapp.com/appointments?email=${user.email}`
        fetch(url, {
          headers: {
            'authorization': `Bearer ${token}`
          }
        })
            .then(res => res.json())
            .then(data => setAppointments(data));

    }, [user.email, token])

    return (
        <div>
            <h2> appointments: {appointments.length}</h2>
             {/* component={Paper} */}
            <TableContainer sx={{width:'100%'}} component={Paper}>
      <Table aria-label="appointments table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell>EMAIL</TableCell>
            
            <TableCell>SERVICE NAME</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.serviceName}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Appointments;