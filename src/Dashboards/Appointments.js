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

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    'ID-001',
    'Annie',
    'Hastur',
    'annie@example.com',
  ),
  createData(
    1,
    'ID-002',
    'Jinx',
    'Blabla',
    'jinx@example.com',
  ),
  createData(
    2,
    'ID-003',
    'Lux',
    'Cerulean',
    'lux@example.com',
  ),
  createData(
    3,
    'ID-004',
    'Garen',
    'Demacia',
    'garen@example.com',
  ),
  createData(
    4,
    'ID-005',
    'Ahri',
    'Charm',
    'ahri@example.com',
  ),
];


function preventDefault(event) {
  event.preventDefault();
}

export default function Appointments() {
  return (
    <React.Fragment>
      <Title style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
        Dashboard Agendamientos
      </Title>
      <Fab size="small" color="success" aria-label="add" style={{ marginBottom: '10px' }}>
          <AddIcon />
      </Fab>
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="center">
               <Fab color="success" aria-label="edit"><EditIcon /></Fab>
               <IconButton aria-label="delete" size="large"  style={{ marginLeft: '8px' }}><DeleteIcon fontSize="inherit" /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}