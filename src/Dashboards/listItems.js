import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FaceIcon from '@mui/icons-material/Face';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import TodayIcon from '@mui/icons-material/Today';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
     <ListSubheader component="div" inset>Dashboards</ListSubheader>
    <ListItemButton component={Link} to="/Appointments">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Agendamientos" />
    </ListItemButton>
    <ListItemButton component={Link} to="/Dates">
      <ListItemIcon>
        <TodayIcon />
      </ListItemIcon>
      <ListItemText primary="Citas" />
    </ListItemButton>
    <ListItemButton component={Link} to="/Pacients">
      <ListItemIcon>
        <AirlineSeatFlatIcon />
      </ListItemIcon>
      <ListItemText primary="Pacientes" />
    </ListItemButton>
    <ListItemButton component={Link} to="/Products">
      <ListItemIcon>
        <VaccinesIcon />
      </ListItemIcon>
      <ListItemText primary="Productos" />
    </ListItemButton>
    <ListItemButton component={Link} to="/Suppliers">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Proveedores" />
    </ListItemButton>
    <ListItemButton component={Link} to="/Users">
      <ListItemIcon>
        <FaceIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div"inset>Cuenta</ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </ListItemButton>
    <ListItemButton component={Link} to="/login">
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Cerrar Sesion" />
    </ListItemButton>
  </React.Fragment>
);
