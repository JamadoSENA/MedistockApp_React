import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import PeopleIcon from '@mui/icons-material/People';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const FormGrid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function SupplierForm() {
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
        .replace(/^(\d{2})(\d)/g, '$1/$2') // Añade una barra después de los primeros dos dígitos
        .replace(/^(\d{2})\/(\d{2})(\d)/g, '$1/$2/$3') // Añade una barra después de los siguientes dos dígitos
        .replace(/^(\d{2})\/(\d{2})\/(\d{4})\d*/, '$1/$2/$3'); // Limita el año a 4 dígitos
    if (value.length <= 8) { // Longitud máxima de 8 caracteres (DD/MM/AAAA)
      setExpirationDate(formattedValue);
    }
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
                <PeopleIcon color="dark" fontSize="small" />
                <Typography fontWeight="medium">Proveedor</Typography>
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
              <Typography variant="subtitle2">Nuevo Proveedor</Typography>
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
                <FormLabel htmlFor="NIT" required>
                  NIT
                </FormLabel>
                <OutlinedInput
                  id="nit"
                  autoComplete="nit"
                  placeholder="NIT"
                  required
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-name" required>
                  Nombre
                </FormLabel>
                <OutlinedInput
                  id="card-name"
                  autoComplete="card-name"
                  placeholder="Nombre"
                  required
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
                  required
                />
              </FormGrid>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-name" required>
                Telefono
                </FormLabel>
                <OutlinedInput
                  id="card-name"
                  autoComplete="card-name"
                  placeholder="Telefono"
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
                  required
                />
              </FormGrid>
              </Box>
          </Box>
          <ButtonGroup color="success" variant="text" aria-label="Basic button group">
            <Button color="success">Guardar</Button>
            <Button color="success"  component={Link} to="/Suppliers">Cancelar</Button>
          </ButtonGroup>
        </Box>
      )}
    </Stack>
  );
}