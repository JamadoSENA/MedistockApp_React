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
import FaceIcon from '@mui/icons-material/Face';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import TodayIcon from '@mui/icons-material/Today';


const FormDate = () => {
    let navigate = useNavigate()

    const {id} = useParams()

    const [cita, setCita] = useState ({

        fecha:"",
        diagnostico: "",
        tratamiento:"",
        recomendaciones:"",

    })

    const{fecha, diagnostico, tratamiento, recomendaciones} = cita
    const onInputChange = (e) => {
       
        setCita({...cita, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.put(`http://localhost:8086/api/cita/update/${id}`,cita)
        navigate("/dates");

    };

    useEffect(() => {
      
      const loadDate = async () => {
        const result = await axios.get(`http://localhost:8086/api/cita/list/${id}`);
        setCita(result.data.data);
      };
      loadDate();
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
                <TodayIcon color="dark" fontSize="small" />
                <Typography fontWeight="medium">Cita Medica</Typography>
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
              <Typography variant="subtitle2">Nueva Cita</Typography>
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
              <InputLabel htmlFor="diagnostico">
                Diagnostico
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={diagnostico} type="text" name="diagnostico" placeholder="Descripcion breve" required/>
            </FormControl>
            <FormControl fullWidth>
            <InputLabel htmlFor="tratamiento">
                Tratamiento
              </InputLabel>
            <Input className="form-control" onChange={onInputChange} value={tratamiento} type="text" name="tratamiento" placeholder="Descripcion breve" 
            required/>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl fullWidth>
              <InputLabel htmlFor="recomendaciones">
                Recomendaciones
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={recomendaciones} type="text" name="recomendaciones" placeholder="Descripcion breve" required/>
            </FormControl>
          </Box>
        </Box>
        <ButtonGroup color="success" variant="text" aria-label="Basic button group">
          <Button type="submit" color="success" onClick={onSubmit}>Guardar</Button>
          <Button color="success" component={Link} to="/dates">Cancelar</Button>
        </ButtonGroup>
        </Box>
    </Stack>
  );
};

export default FormDate;
