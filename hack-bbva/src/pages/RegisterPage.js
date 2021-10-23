import React from 'react';
import RegisterForm from '../components/RegisterForm';

import { Box, Grid } from '@mui/material';

const RegisterPage = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
      >
        <RegisterForm></RegisterForm>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
      >
        <Box>
          Aqui va una imagen
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;