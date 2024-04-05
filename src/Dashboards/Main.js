import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';


function SkeletonChildrenDemoA(props) {
  const { loading = false } = props;

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ margin: 1 }}>
        </Box>
        <Box sx={{ width: '100%',}}>
          {loading ? (
            <Skeleton width="75%">
              <Typography>.</Typography>
            </Skeleton>
          ) : (
            <Typography sx={{marginBottom: '10px'}}><Typography variant="h4" gutterBottom sx={{ textAlign: 'center'}}>
            Gestion de Inventario y Citas
          </Typography></Typography>
          )}
        </Box>
      </Box>
      {loading ? (
        <Skeleton variant="rectangular" width="100%">
          <div style={{ paddingTop: '57%' }} />
        </Skeleton>
      ) : (
        <Typography variant="h5" gutterBottom sx={{textAlign:'justify'}}>
            Estimado usuario el sistema MediStock de inventario de medicamentos, comienza con la
            fase de adquisición, donde se definieron los requisitos específicos del sistema en relación con las
            normas y prácticas recomendadas de la industria farmacéutica Dimedical. Luego, en la fase de desarrollo, se
            implementarón procesos que aseguren la calidad y la conformidad con las regulaciones pertinentes,
            integrando características esenciales como el seguimiento en tiempo real, alertas de vencimiento y
            un sistema de clasificación detallado.
            La fase de prueba sería crucial, aplicando evaluaciones según los estándares de calidad definidos en
            ISO 15504 para verificar la funcionalidad, seguridad y eficacia del software. La fase de
            implementación se llevaría a cabo con procedimientos detallados y capacitación del personal para
            garantizar una transición fluida al nuevo sistema. La fase de mantenimiento, vital en un entorno
            médico en constante evolución, se beneficiaría de la evaluación periódica de procesos mediante
            auditorías internas, asegurando la adaptabilidad del software a cambios normativos y tecnológicos.
            La aplicación del modelo ISO 15504 en cada etapa del ciclo de vida del proyecto no solo garantizaría
            la conformidad con estándares de calidad reconocidos internacionalmente, sino que también
            proporciona un marco para la mejora continua, fortaleciendo así la eficiencia y la efectividad de
            nuestro sistema de inventario de medicamentos.
          </Typography>
      )}
    </div>
  );
}

SkeletonChildrenDemoA.propTypes = {
  loading: PropTypes.bool,
};

export default function SkeletonChildren() {
  return (
    <Grid container spacing={8}>
      <Grid item xs>
        <SkeletonChildrenDemoA />
      </Grid>
    </Grid>
  );
}