import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FaceIcon from '@mui/icons-material/Face';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const FormGrid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function UserForm() {
  const [paymentType, setPaymentType] = React.useState('creditCard');
  const [cardNumber, setCardNumber] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    if (value.length <= 16) {
      setCardNumber(formattedValue);
    }
  };

  const handleCvvChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const handleExpirationDateChange = (event) => {
    const value = event.target.value.replace(/\D/g, ''); // Elimina todos los caracteres que no sean dígitos
    const formattedValue = value
        .replace(/^(\d{4})(\d)/g, '$1-$2') // Añade un guión después de los primeros cuatro dígitos (AAAA)
        .replace(/^(\d{4})-(\d{2})(\d)/g, '$1-$2-$3') // Añade un guión después de los siguientes dos dígitos (MM)
        .replace(/^(\d{4})-(\d{2})-(\d{2})\d*/, '$1-$2-$3'); // Limita el día a dos dígitos (DD)
    if (value.length <= 8) { // Longitud máxima de 8 caracteres (AAAA-MM-DD)
        setExpirationDate(formattedValue);
    }
};

  let navigate = useNavigate()

  const [Usuario, setUsuario] = useState ({

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

  })

  const{apellido,contrasenia,correo,departamento,direccion,documento,fechaNacimiento,municipio,nombre,profesion,telefono} = Usuario

  const onInputChange = (e) => {
    
      setUsuario({...Usuario, [e.target.name]:e.target.value})

  };

  const onSubmit = async (e) => {

      e.preventDefault();
      axios.post("http://localhost:8086/api/usuario/create",Usuario)
      navigate("DashboardUsers.js")

  };

  return (
    <Stack spacing={{ xs: 5, sm: 5 }} useFlexGap>
      <FormControl component="fieldset" fullWidth onSubmit={onSubmit}>
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
                <FaceIcon color="dark" fontSize="small" />
                <Typography fontWeight="medium">Usuario</Typography>
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
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: 2
              }}
            >
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="documento" required>
                  Documento
                </FormLabel>
                <OutlinedInput
                  id="documento"
                  autoComplete="documento"
                  placeholder="Numero de documento"
                  required
                  onChange={onInputChange} 
                  value={documento}
                />
              </FormGrid>
              <FormGrid sx={{ maxWidth: '20%' }}>
                <FormLabel htmlFor="contrasenia" required>
                  Contraseña
                </FormLabel>
                <OutlinedInput
                  id="contrasenia"
                  autoComplete="contrasenia"
                  placeholder="Contraseña"
                  required
                  onChange={onInputChange} 
                  value={contrasenia}
                />
              </FormGrid>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-name" required>
                  Nombre
                </FormLabel>
                <OutlinedInput
                  id="card-name"
                  autoComplete="card-name"
                  placeholder="Nombre"
                  onChange={onInputChange} 
                  value={nombre}
                  required
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-name" required>
                  Apellido
                </FormLabel>
                <OutlinedInput
                  id="card-name"
                  autoComplete="card-name"
                  placeholder="Apellido"
                  onChange={onInputChange} 
                  value={apellido}
                  required
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="date" required>
                  Fecha de Nacimiento
                </FormLabel>
                <OutlinedInput
                  id=""
                  autoComplete="card-expiration"
                  placeholder="AAAA-MM-DD"
                  required
                  onChange={onInputChange} 
                  value={fechaNacimiento}
                />
              </FormGrid>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
            <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-name" required>
                Departamento
                </FormLabel>
                <OutlinedInput
                  id="card-name"
                  autoComplete="card-name"
                  placeholder="Departamento"
                  onChange={onInputChange} 
                  value={departamento}
                  required
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-name" required>
                Municipio
                </FormLabel>
                <OutlinedInput
                  id="card-name"
                  autoComplete="card-name"
                  placeholder="Municipio"
                  onChange={onInputChange} 
                  value={municipio}
                  required
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-name" required>
                  Direccion
                </FormLabel>
                <OutlinedInput
                  id="card-name"
                  autoComplete="card-name"
                  placeholder="Direccion"
                  onChange={onInputChange} 
                  value={direccion}
                  required
                />
              </FormGrid>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
            <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-name" required>
                Profesion
                </FormLabel>
                <OutlinedInput
                  id="card-name"
                  autoComplete="card-name"
                  placeholder="Profesion"
                  onChange={onInputChange} 
                  value={profesion}
                  required
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-name" required>
                Telefono
                </FormLabel>
                <OutlinedInput
                  id="card-name"
                  autoComplete="card-name"
                  placeholder="Telefono"
                  onChange={onInputChange} 
                  value={telefono}
                  required
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-name" required>
                  Correo
                </FormLabel>
                <OutlinedInput
                  id="card-name"
                  autoComplete="card-name"
                  placeholder="Correo electronico"
                  onChange={onInputChange} 
                  value={correo}
                  required
                />
              </FormGrid>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
              </Box>
          </Box>
          <ButtonGroup color="success" variant="text" aria-label="Basic button group">
            <Button type="submit" color="success">Guardar</Button>
            <Button color="success" component={Link} to="/Users">Cancelar</Button>
          </ButtonGroup>
        </Box>
      )}
    </Stack>
  );
}