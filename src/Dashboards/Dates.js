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
import { Link } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';


export default function Dates() {
  const [ListCitas, setListCitas] = useState([]);

    useEffect(() => {
        getCitas();
    }, []);

    //GET ALL DATES
    const getCitas = () => {
        axios.get("http://localhost:8086/api/cita/all")
            .then((response) => {
                setListCitas(response.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    //GET ALL DATES


    //DELETE DATES
    const deleteCita = async (idCita) => {
        await axios.delete(`http://localhost:8086/api/cita/delete/${idCita}`)
        getCitas()
    }
    //DELETE DATES
  return (
    <React.Fragment>
      <Title style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
        Dashboard Citas
      </Title>
      <Fab size="small" color="success" aria-label="add" style={{ marginBottom: '10px' }} component={Link} to="/dates/create">
          <AddIcon />
      </Fab>
      <Box sx={{ height: 400, width: '100%' }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Diagnostico</TableCell>
            <TableCell>Tratamiento</TableCell>
            <TableCell>Recomendaciones</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {ListCitas.map((cita, index) => (
            <TableRow key={index}>
              <TableCell>{cita.fecha}</TableCell>
              <TableCell>{cita.diagnostico}</TableCell>
              <TableCell>{cita.tratamiento}</TableCell>
              <TableCell>{cita.recomendaciones}</TableCell>
              <TableCell align="center">
              <Link to = {`/dates/edit/${cita.id}`}><Fab color="success" aria-label="edit"><EditIcon /></Fab></Link>
               <IconButton onClick={() => deleteCita (cita.id)} aria-label="delete" size="large"  style={{ marginLeft: '8px' }}><DeleteIcon fontSize="inherit" /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
    </React.Fragment>
  );
}