import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Title from './Title.js';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Appointments() {
  const [ListAgendamientos, setListAgendamientos] = useState([]);

    useEffect(() => {
        getAgendamientos();
    }, []);

    //GET ALL SCHEDULINGS
    const getAgendamientos = () => {
        axios.get("http://localhost:8086/api/agendamiento/all")
            .then((response) => {
                setListAgendamientos(response.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    //GET ALL SCHEDULINGS


    //DELETE SCHEDULINGS
    const deleteAgendamiento = async (idAgendamiento) => {
        await axios.delete(`http://localhost:8086/api/agendamiento/delete/${idAgendamiento}`)
        getAgendamientos()
    };
    //DELETE SCHEDULINGS
  return (
    <React.Fragment>
      <Title style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Dashboard Agendamientos
      </Title>
      <Fab size="small" color="success" aria-label="add" style={{ marginBottom: '10px' }} component={Link} to="/appointments/create" >
          <AddIcon />
      </Fab>
      <Box sx={{ height: 400, width: '100%' }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Motivo</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Paciente</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {ListAgendamientos.map((agendamiento, index) => (
            <TableRow key={index}>
              <TableCell>{agendamiento.fecha}</TableCell>
              <TableCell>{agendamiento.motivo}</TableCell>
              <TableCell>{agendamiento.estado}</TableCell>
              <TableCell>{agendamiento.FkId_Paciente}</TableCell>
              <TableCell align="center">
               <Link to = {`/appointments/edit/${agendamiento.id}`}><Fab color="success" aria-label="edit"><EditIcon /></Fab></Link>
               <IconButton onClick={() => deleteAgendamiento (agendamiento.id)} aria-label="delete" size="large"  style={{ marginLeft: '8px' }}><DeleteIcon fontSize="inherit" /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
    </React.Fragment>
  );
}