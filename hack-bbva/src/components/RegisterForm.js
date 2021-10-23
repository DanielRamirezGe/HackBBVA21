import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const RegisterButton = styled(Button)({
  boxShadow: 'none',
  backgroundColor: '#026888',
  color: '#FFF',
  padding: '1em 4em',
  borderRadius: '0'
});

const RegisterForm = () => {
  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Box 
        componente="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          'bgcolor': '#E1E1E1',
          'padding': '2em'
      }} >
        <Typography variant="h2" component="div">
          Registro
        </Typography>
        <TextField id="nombres" label="Nombres" variant="outlined" />
        <TextField id="apellidos" label="Apellidos" variant="outlined" />
        <TextField id="cedulaciudadania" label="Cedula de ciudadania" variant="outlined" />
        <TextField id="nit" label="Numero de NIT" variant="outlined" />
        <TextField id="celular" label="celular" variant="outlined" />
        <TextField id="email" label="E-mail" variant="outlined" />
        <TextField id="password" label="Contraseña" variant="outlined" />
        <TextField id="passwordconfirm" label="Confirmar contraseña" variant="outlined" />

        <Typography variant="body1">
          Enviaremos un mensaje de texto con un código al número que proporcionaste
        </Typography>

        <RegisterButton disableElevation>
          Enviar
        </RegisterButton>
      </Box>
    </Box>
  );
};

export default RegisterForm;