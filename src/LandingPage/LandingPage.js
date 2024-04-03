import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LoginIcon from '@mui/icons-material/Login';
import InventoryIcon from '@mui/icons-material/Inventory';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: '¡Bienvenido a MediStock!',
  description:
    "Administrar un inventario médico de forma eficiente y precisa es fundamental para cualquier institución de salud. Nuestra aplicación, MediStock, te ofrece la solución ideal para llevar un control exhaustivo de tus suministros.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description'
};

const featuredPosts = [
  {
    title: 'Introducción a Medistock',
    date: 'Abril 05',
    description:
      'Medistock es una plataforma innovadora que gestiona eficientemente el inventario médico. Facilita la coordinación entre proveedores y centros de salud, optimizando el suministro de equipos y medicamentos esenciales.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Proceso de Seguimiento en Tiempo Real',
    date: 'Abril 05',
    description:
      'Con Medistock, los usuarios pueden realizar un seguimiento en tiempo real de los niveles de inventario, evitando escasez o excesos. La plataforma garantiza una distribución equitativa.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'Integración y Facilidad de Uso',
  description:
    'Medistock se destaca por su interfaz intuitiva y su capacidad de integración con sistemas existentes. Permite una colaboración efectiva entre diferentes partes interesadas en el sector de la salud, mejorando la eficiencia y la calidad del cuidado.',
  social: [
    { name: 'Almacenamiento de Datos', icon: ManageSearchIcon },
    { name: 'Autenticacion de Usuarios', icon: LoginIcon },
    { name: 'Gestion de Inventario', icon: InventoryIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LandingPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Transformación Total con Medistock." posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="MediStock"
        description="Donde la gestión eficiente de tu inventario médico es nuestra prioridad."
      />
    </ThemeProvider>
  );
}