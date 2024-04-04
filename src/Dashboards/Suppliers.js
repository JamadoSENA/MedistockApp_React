import * as React from 'react';
import axios from 'axios';
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
import { useEffect, useState } from 'react';


export default function Suppliers() {
  const [ListProveedores, setListProveedores] = useState([]);

    useEffect(() => {
        getProveedores();
    }, []);

    //GET ALL SUPPLIERS
    const getProveedores = () => {
        axios.get("http://localhost:8086/api/proveedor/all")
            .then((response) => {
                setListProveedores(response.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    //GET ALL SUPPLIERS


    //DELETE SUPPLIERS
    const deleteProveedor = async (idProveedor) => {
        await axios.delete(`http://localhost:8086/api/proveedor/delete/${idProveedor}`)
        getProveedores()
    }
    //DELETE SUPPLIERS

  return (
    <React.Fragment>
      <Title style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
        Dashboard Proveedores
      </Title>
      <Fab size="small" color="success" aria-label="add" style={{ marginBottom: '10px' }} component={Link} to="/suppliers/create" >
          <AddIcon />
      </Fab>
      <Box sx={{ height: 400, width: '100%' }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>NIT</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Telefono</TableCell>
            <TableCell>Correo</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {ListProveedores.map((proveedor, index) => (
            <TableRow key={index}>
              <TableCell>{proveedor.nit}</TableCell>
              <TableCell>{proveedor.nombre}</TableCell>
              <TableCell>{proveedor.telefono}</TableCell>
              <TableCell>{proveedor.correo}</TableCell>
              <TableCell align="center">
               <Fab color="success" aria-label="edit"><EditIcon /></Fab>
               <IconButton onClick={() => deleteProveedor (proveedor.id)} aria-label="delete" size="large"  style={{ marginLeft: '8px' }}><DeleteIcon fontSize="inherit" /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
    </React.Fragment>
  );
}