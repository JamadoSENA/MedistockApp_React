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
import Box from '@mui/material/Box';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Products() {
  const [ListProductos, setListProductos] = useState([]);

  useEffect(() => {
      getProductos();
  }, []);

  //GET ALL PRODUCTS
  const getProductos = () => {
      axios.get("http://localhost:8086/api/producto/all")
          .then((response) => {
              setListProductos(response.data.data);
          })
          .catch((e) => {
              console.log(e);
          });
  };
  //GET ALL PRODUCTS


  //DELETE PRODUCTS
  const deleteProducto = async (idProducto) => {
      await axios.delete(`http://localhost:8086/api/producto/delete/${idProducto}`)
      getProductos()
  }
  //DELETE PRODUCTS

  return (
    <React.Fragment>
      <Title style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
        Dashboard Productos
      </Title>
      <Fab size="small" color="success" aria-label="add" style={{ marginBottom: '15px' }} component={Link} to="/products/create" >
          <AddIcon />
      </Fab>
      <Box sx={{ height: 400, width: '100%' }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Cantidad</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Fecha Caducidad</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ListProductos.map((producto, index) => (
            <TableRow key={index}>
              <TableCell>{producto.nombre}</TableCell>
              <TableCell>{producto.cantidad}</TableCell>
              <TableCell>{producto.estado}</TableCell>
              <TableCell>{producto.fechaCaducidad}</TableCell>
              <TableCell align="center">
               <Fab color="success" aria-label="edit"><EditIcon /></Fab>
               <IconButton  onClick={() => deleteProducto (producto.id)} aria-label="delete" size="large"  style={{ marginLeft: '8px' }}><DeleteIcon fontSize="inherit" /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
    </React.Fragment>
  );
}