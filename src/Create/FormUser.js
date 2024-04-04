import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FaceIcon from '@mui/icons-material/Face';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';


const FormUser = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    apellido: "",
    contrasenia: "",
    correo: "",
    departamento: "",
    direccion: "",
    documento: "",
    fechaNacimiento: "",
    municipio: "",
    nombre: "",
    profesion: "",
    telefono: ""
  });

  const { apellido, contrasenia, correo, departamento, direccion, documento, fechaNacimiento, municipio, nombre, profesion, telefono } = usuario;

  const onInputChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8086/api/usuario/create", usuario);
      navigate("/users");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const hasError = false;  
  
  return (
    
    <Stack spacing={{ xs: 5, sm: 5 }} useFlexGap onSubmit={onSubmit}>
      <FormControl error={hasError} component="fieldset" fullWidth
      >
        <RadioGroup
          sx={{
            flexDirection: { sm: 'column', md: 'row' },
            gap: 2,
          }}
        >
          <Card
            sx={{
              maxWidth: { sm: '100%', md: '50%' },
              flexGrow: 1,
              outline: '1px solid',
            }}
          >
            <CardActionArea>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FaceIcon color="dark" fontSize="small" />
                <Typography fontWeight="medium">Usuario</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </RadioGroup>
      </FormControl>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            p: 3,
            height: { xs: 350, sm: 400, md: 530 },
            width: '100%',
            borderRadius: '20px',
            border: '0.2px solid ',
            borderColor: 'gray',
            backgroundColor: 'background.paper',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="subtitle2">Nuevo Usuario</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}> 
            <FormControl fullWidth>
              <InputLabel htmlFor="documento">
                Documento
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={documento} type="number" name="documento" placeholder="Ingrese el número de documento" required/>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="contrasenia">
                Contraseña
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={contrasenia} type="password" name="contrasenia" placeholder="Ingrese la contraseña" required/>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl fullWidth>
              <InputLabel htmlFor="nombre">
                Nombre
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={nombre} type="text" name="nombre" placeholder="Ingrese el nombre" 
              required/>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="apellido">
                Apellido
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={apellido} type="text" name="apellido" placeholder="Ingrese el apellido" 
              required/>
            </FormControl>
            <FormControl fullWidth>
            <InputLabel htmlFor="fechaNacimiento">
                Fecha de Nacimiento
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={fechaNacimiento} type="text" name="fechaNacimiento" placeholder="AAAA-MM-DD" 
              required/>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl fullWidth>
            <InputLabel htmlFor="departamento">
                Departamento
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={departamento} type="text" name="departamento" placeholder="Ingrese el departamento" 
              required/>
            </FormControl>
            <FormControl fullWidth>
             <InputLabel htmlFor="municipio">
                Municipio
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={municipio} type="text" name="municipio" placeholder="Ingrese el municipio" 
              required/>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="direccion">
                Direccion
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={direccion} type="text" name="direccion" placeholder="Ingrese la dirección" 
              required/>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl fullWidth>
            <InputLabel htmlFor="profesion">
                Profesion
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={profesion} type="text" name="profesion" placeholder="Ingrese la profesión" 
              required/>
            </FormControl>
            <FormControl fullWidth>
            <InputLabel htmlFor="telefono">
                Telefono
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={telefono} type="number" name="telefono" placeholder="Ingrese el número telefónico" 
              required/>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="correo">
                Correo Electronico
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={correo} type="email" name="correo" placeholder="Ingrese el correo electrónico" 
              required/>
            </FormControl>
          </Box>
        </Box>
        <ButtonGroup color="success" variant="text" aria-label="Basic button group">
          <Button type="submit" color="success" onClick={onSubmit}>Guardar</Button>
          <Button color="success" component={Link} to="/users">Cancelar</Button>
        </ButtonGroup>
      </Box>
    </Stack>
  );
};

export default FormUser;
