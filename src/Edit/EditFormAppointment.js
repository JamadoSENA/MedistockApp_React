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
import AssignmentIcon from '@mui/icons-material/Assignment';


const FormAppointment = () => {
    let navigate = useNavigate()

    const {id} = useParams()

    const [agendamiento, setAgendamiento] = useState ({

        fecha:"",
        motivo: "",
        estado:"",
        FkId_Paciente:""

    })

    const{fecha, motivo, estado, FkId_Paciente} = agendamiento

    const onInputChange = (e) => {
       
        setAgendamiento({...agendamiento, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.put(`http://localhost:8086/api/agendamiento/update/${id}`,agendamiento)
        navigate("/appointments");

    };

    useEffect(() => {
      
      const loadAppointment = async () => {
        const result = await axios.get(`http://localhost:8086/api/agendamiento/list/${id}`);
        setAgendamiento(result.data.data);
      };
      loadAppointment();
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
                <AssignmentIcon color="dark" fontSize="small" />
                <Typography fontWeight="medium">Agendamiento</Typography>
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
              height: { xs: 350, sm: 400, md: 375 },
              width: '100%',
              borderRadius: '20px',
              border: '0.2px solid ',
              borderColor: 'gray',
              backgroundColor: 'background.paper',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle2">Nuevo Agendamiento</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}> 
            <FormControl fullWidth>
              <InputLabel htmlFor="fecha">
                Fecha
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={fecha} type="text" name="fecha" required />
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl fullWidth>
              <InputLabel htmlFor="motivo">
                Motivo
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={motivo} type="text" name="motivo" placeholder="Descripcion breve" required/>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl fullWidth>
            <InputLabel htmlFor="estado">
                Estado
              </InputLabel>
            <Input className="form-control" onChange={onInputChange} value={estado} type="text" name="estado" placeholder="Descripcion breve" 
            required/>
            </FormControl>
            <FormControl fullWidth>
             <InputLabel htmlFor="paciente">
                ID Paciente
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={FkId_Paciente} type="number" name="FkId_Paciente" required/>
            </FormControl>
          </Box>
        </Box>
        <ButtonGroup color="success" variant="text" aria-label="Basic button group">
          <Button type="submit" color="success" onClick={onSubmit}>Guardar</Button>
          <Button color="success" component={Link} to="/appointments">Cancelar</Button>
        </ButtonGroup>
        </Box>
    </Stack>
  );
};

export default FormAppointment;
