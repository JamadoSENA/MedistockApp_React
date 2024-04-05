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


export default function Pacients() {
  const [ListPacientes, setListPacientes] = useState([]);

  useEffect(() => {
      getPacientes();
  }, []);

  //GET ALL PACIENTS
  const getPacientes = () => {
      axios.get("http://localhost:8086/api/paciente/all")
          .then((response) => {
              setListPacientes(response.data.data);
          })
          .catch((e) => {
              console.log(e);
          });
  };
  //GET ALL PACIENTS


  //DELETE PACIENTS
  const deletePaciente = async (idPaciente) => {
      await axios.delete(`http://localhost:8086/api/paciente/delete/${idPaciente}`)
      getPacientes()
  }
  //DELETE PACIENTS
  return (
    <React.Fragment>
      <Title style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
        Dashboard Pacientes
      </Title>
      <Fab size="small" color="success" aria-label="add" style={{ marginBottom: '10px' }} component={Link} to="/pacients/create" >
          <AddIcon />
      </Fab>
      <Box sx={{ height: 400, width: '100%' }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Documento</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Correo</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {ListPacientes.map((paciente, index) => (
            <TableRow key={index}>
              <TableCell>{paciente.documento}</TableCell>
              <TableCell>{paciente.nombre}</TableCell>
              <TableCell>{paciente.apellido}</TableCell>
              <TableCell>{paciente.correo}</TableCell>
              <TableCell align="center">
              <Link to = {`/pacients/edit/${paciente.id}`}><Fab color="success" aria-label="edit"><EditIcon /></Fab></Link>
               <IconButton onClick={() => deletePaciente (paciente.id)} aria-label="delete" size="large"  style={{ marginLeft: '8px' }}><DeleteIcon fontSize="inherit" /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
    </React.Fragment>
  );
}