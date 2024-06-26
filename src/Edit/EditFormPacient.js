import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';


const FormPacient = () => {
    let navigate = useNavigate()

    const {id} = useParams()

    const [paciente, setPaciente] = useState ({

        documento:"",
        tipoDocumento:"",
        genero:"",
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        edad:"",
        departamento:"",
        municipio:"",
        direccion:"",
        profesion:"",
        telefono: "",
        correo: ""

    })

    const{documento, tipoDocumento, genero, nombre, apellido, fechaNacimiento, edad, departamento, municipio, direccion, profesion, telefono, correo} = paciente

    const onInputChange = (e) => {
       
        setPaciente({...paciente, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.put(`http://localhost:8086/api/paciente/update/${id}`,paciente)
        navigate("/pacients");

    };

    useEffect(() => {
      
      const loadPacient = async () => {
        const result = await axios.get(`http://localhost:8086/api/paciente/list/${id}`);
        setPaciente(result.data.data);
      };
      loadPacient();
    }, [id]);
  
  return (
    
    <Stack spacing={{ xs: 5, sm: 5 }} useFlexGap>
      <FormControl component="fieldset" fullWidth>
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
                <AirlineSeatFlatIcon color="dark" fontSize="small" />
                <Typography fontWeight="medium">Paciente</Typography>
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
              height: { xs: 350, sm: 400, md: 550 },
              width: '100%',
              borderRadius: '20px',
              border: '0.2px solid ',
              borderColor: 'gray',
              backgroundColor: 'background.paper',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle2">Nuevo Paciente</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}> 
            <FormControl fullWidth>
              <InputLabel htmlFor="documento">
                Documento
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={documento} type="number" name="documento" placeholder="Ingrese el número de documento" required/>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="tipoDocumento">
                Tipo de documento
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={tipoDocumento} type="text" name="tipoDocumento" placeholder="(NUIP / CC / TI)" required/>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl fullWidth>
              <InputLabel htmlFor="genero">
                Genero
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={genero} type="text" name="genero" placeholder="(Femenino / Masculino)" required/>
            </FormControl>
          <FormControl fullWidth>
              <InputLabel htmlFor="nombre">
                Nombre
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={nombre} type="text" name="nombre" placeholder="Ingrese el nombre" 
              required/>
          </FormControl>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
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
            <FormControl fullWidth>
              <InputLabel htmlFor="edad">
                Edad
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={edad} type="number" name="edad" placeholder="(Años)" 
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
          <Button color="success" component={Link} to="/pacients">Cancelar</Button>
        </ButtonGroup>
        </Box>
    </Stack>
  );
};

export default FormPacient;
