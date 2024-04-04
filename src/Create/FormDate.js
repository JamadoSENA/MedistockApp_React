import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import PeopleIcon from '@mui/icons-material/People';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FaceIcon from '@mui/icons-material/Face';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import TodayIcon from '@mui/icons-material/Today';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function DateForm() {
  
  let navigate = useNavigate()

    const [Cita, setCita] = useState ({

        fecha:"",
        diagnostico: "",
        tratamiento:"",
        recomendaciones:"",
        FkId_Agendamiento:"",
        FkId_Medico:""

    })

    const{fecha, diagnostico, tratamiento, FkId_Agendamiento, FkId_Medico} = Cita

    const onInputChange = (e) => {
       
        setCita({...Cita, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.post("http://localhost:8086/api/cita/create",Cita)
        navigate("/dates")

    };

  return (
    <Stack spacing={{ xs: 5, sm: 5 }} useFlexGap>
      <FormControl component="fieldset" fullWidth>
        <RadioGroup
          aria-label="Payment options"
          name="paymentType"
          value={paymentType}
          onChange={handlePaymentTypeChange}
          sx={{
            flexDirection: { sm: 'column', md: 'row' },
            gap: 2,
          }}
        >
          <Card
            raised={paymentType === 'creditCard'}
            sx={{
              maxWidth: { sm: '100%', md: '50%' },
              flexGrow: 1,
              outline: '1px solid',
              outlineColor:
                paymentType === 'creditCard' ? 'success.main' : 'divider',
              backgroundColor:
                paymentType === 'creditCard' ? 'background.default' : '',
            }}
          >
            <CardActionArea onClick={() => setPaymentType('creditCard')}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TodayIcon color="dark" fontSize="small" />
                <Typography fontWeight="medium">Cita Medica</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </RadioGroup>
      </FormControl>
      {paymentType === 'creditCard' && (
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
              <InputLabel htmlFor="nombre">
                Fecha
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={fecha} type="date" name="fecha" placeholder="AAAA-MM-DD" required />
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl fullWidth>
              <InputLabel htmlFor="diagnostico">
                Diagnostico
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={diagnostico} type="text" name="diagnostico" placeholder="Descripcion breve" required/>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl fullWidth>
            <InputLabel htmlFor="tratamiento">
                Tratamiento
              </InputLabel>
            <Input className="form-control" onChange={onInputChange} value={tratamiento} type="text" name="tratamiento" placeholder="Descripcion breve" 
            required/>
            </FormControl>
            <FormControl fullWidth>
             <InputLabel htmlFor="agendamiento">
                ID Agendamiento
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={FkId_Agendamiento} type="number" name="FkId_Agendamiento" required/>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="medico">
                ID Medico
              </InputLabel>
              <Input className="form-control" onChange={onInputChange} value={FkId_Medico} type="number" name="FkId_Medico" required/>
            </FormControl>
          </Box>
        </Box>
        <ButtonGroup color="success" variant="text" aria-label="Basic button group">
          <Button type="submit" color="success" onClick={onSubmit}>Guardar</Button>
          <Button color="success" component={Link} to="/dates">Cancelar</Button>
        </ButtonGroup>
        </Box>
      )}
    </Stack>
  );
}