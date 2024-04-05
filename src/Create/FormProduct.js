import React, { useState } from 'react';
import axios from 'axios';
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
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { Link } from 'react-router-dom';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from 'react-router-dom';


export default function ProductForm() {
  const navigate = useNavigate();

  const [Producto, setProducto] = useState ({
    nombre:"",
    descripcion: "",
    indicacioneUso:"",
    fechaCaducidad:"",
    cantidad:"",
    estado:"",
    FkId_Proveedor:""
  });

  const [alertaVisible, setAlertaVisible] = useState(false);

  const {nombre, descripcion, indicacioneUso, fechaCaducidad, cantidad, estado, FkId_Proveedor} = Producto

  const onInputChange = (e) => {
    setProducto({...Producto, [e.target.name]:e.target.value})
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8086/api/producto/create", Producto);
      setAlertaVisible(true);
      // Navega a la lista de productos después de 2 segundos
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }; 

  return (
    <Stack spacing={{ xs: 5, sm: 5 }} useFlexGap onSubmit={onSubmit}>
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
                <VaccinesIcon color="dark" fontSize="small" />
                <Typography fontWeight="medium">Producto</Typography>
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
            height: { xs: 350, sm: 400, md: 480 },
            width: '100%',
            borderRadius: '20px',
            border: '0.2px solid ',
            borderColor: 'gray',
            backgroundColor: 'background.paper',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="subtitle2">Nuevo Producto</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}> 
            <FormControl fullWidth>
              <InputLabel htmlFor="nombre">Nombre</InputLabel>
              <Input className="form-control" onChange={onInputChange} value={nombre} type="text" name="nombre" placeholder="Ingrese el nombre" required/>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl fullWidth>
              <InputLabel htmlFor="descripcion">Descripcion</InputLabel>
              <Input className="form-control" onChange={onInputChange} value={descripcion} type="text" name="descripcion" placeholder="Ingrese una breve descripción" required/>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl fullWidth>
              <InputLabel htmlFor="indicacioneUso">Indicaciones de Uso</InputLabel>
              <Input className="form-control" onChange={onInputChange} value={indicacioneUso} type="text" name="indicacioneUso" placeholder="Ingrese un breve texto sobre las indicaciones de uso" required/>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="fechaCaducidad">Fecha de Caducidad</InputLabel>
              <Input className="form-control" onChange={onInputChange} value={fechaCaducidad} type="date" name="fechaCaducidad" placeholder="AAAA-MM-DD" required/>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="estado">Estado</InputLabel>
              <Input className="form-control" onChange={onInputChange} value={estado} type="text" name="estado" placeholder="Disponible-No Disponible" required/>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="cantidad">Cantidad</InputLabel>
              <Input className="form-control" onChange={onInputChange} value={cantidad} type="number" name="cantidad" placeholder="Ingrese el numero de unidades disponibles" required/>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl fullWidth>
              <InputLabel htmlFor="FkId_Proveedor">ID Proveedor</InputLabel>
              <Input className="form-control" onChange={onInputChange} value={FkId_Proveedor} type="number" name="FkId_Proveedor" placeholder="ID Proveedor" required/>
            </FormControl>
          </Box>
        </Box>
        <ButtonGroup color="success" variant="text" aria-label="Basic button group">
          <Button type="submit" color="success" onClick={onSubmit}>Guardar</Button>
          <Button color="success" component={Link} to="/products">Cancelar</Button>
        </ButtonGroup>
      </Box>
      {alertaVisible && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          ¡El producto se guardó exitosamente!
        </Alert>
      )}
    </Stack>
  );
}
