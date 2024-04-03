import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';

function Main(props) {
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
          textAlign: 'justify',
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown className="markdown" key={post.substring(0, 40)}>
          La implementación de esta plataforma de gestión de inventario responde a la necesidad crítica de optimizar la administración de suministros médicos. Al centralizar el registro de implementos utilizados en procedimientos, se agiliza la identificación, seguimiento y control del inventario. Esto no solo mejora la eficiencia operativa en entornos médicos, sino que también reduce riesgos para los pacientes al garantizar el uso adecuado de los suministros, mejorando así la calidad y seguridad en la atención médica.
          En la institución Dimedical S.A.S que opera en Bogotá, tiene una carencia significativa en el control y registro de los implementos médicos utilizados durante procedimientos y citas. Esta ausencia se manifiesta en la falta de un registro integrado junto con la carencia de control tanto digital como físico ha generado una complejidad significativa en el seguimiento de los insumos. Esta situación dificulta la trazabilidad eficiente y precisa de los recursos, lo que puede impactar negativamente en la gestión y operación de diversos procesos.
        </Markdown>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;