import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

const Image = styled('img')({
  width: '50%',
  height: '275px',
});

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
            <Typography sx={{marginBottom: '10px'}}><Typography variant="h5" gutterBottom sx={{ textAlign: 'center'}}>
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
        <Image
          src="https://images.pexels.com/photos/208541/pexels-photo-208541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          sx={{borderRadius: '10px'}}
        />
      )}
    </div>
  );
}

function SkeletonChildrenDemoB(props) {
    const { loading = false } = props;
  
    return (
      <div>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ margin: 1 }}>
          </Box>
          <Box sx={{ width: '100%' }}>
            {loading ? (
              <Skeleton width="100%">
                <Typography>.</Typography>
              </Skeleton>
            ) : (
              <Typography sx={{marginBottom: '10px'}}><Typography variant="h5" gutterBottom>
              Gestion de Citas
            </Typography></Typography>
            )}
          </Box>
        </Box>
        {loading ? (
          <Skeleton variant="rectangular" width="100%">
            <div style={{ paddingTop: '57%' }} />
          </Skeleton>
        ) : (
          <Image
            src="https://images.pexels.com/photos/4416541/pexels-photo-4416541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
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