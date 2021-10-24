import { useReducer } from 'react';

import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { UPDATE_FORM, onInputChange, onFocusOut } from '../lib/formUtils';

const initialState = {
  names: { value: '', touched: false, hasError: true, error: '' },
  lastNames: { value: '', touched: false, hasError: true, error: '' },
  citicenship: { value: '', touched: false, hasError: true, error: '' },
  nit: { value: '', touched: false, hasError: true, error: '' },
  cellphone: { value: '', touched: false, hasError: true, error: '' },
  email: { value: '', touched: false, hasError: true, error: '' },
  password: { value: '', touched: false, hasError: true, error: '' },
  passwordConfirm: { value: '', touched: false, hasError: true, error: '' },
  isFormValid: false
};

const registerFormReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } = action.data;
      return {
        ...state,
        [name]: { ...state.name, value, hasError, error, touched },
        isFormValid
      }
    default:
      return state
  }
};

const RegisterButton = styled(Button)({
  boxShadow: 'none',
  backgroundColor: '#026888',
  color: '#FFF',
  padding: '1em 4em',
  borderRadius: '0',
  '&:disabled': {
    backgroundColor: '#e0e0e0',
    color: '#a6a6a6'
  }
});

const RegisterForm = () => {

  const [formState, dispatch] = useReducer(registerFormReducer, initialState);

  const submitForm = event => {
    event.preventDefault();
    console.log('submiting form');
  };

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
          'padding': '2em',
      }} >
        <Typography variant="h2" component="div">
          Registro
        </Typography>
        
        <TextField 
          id="nombres" 
          name="names" 
          label="Nombres" 
          variant="outlined"
          value={formState.names.value}
          onChange={e => {
            onInputChange('names', e.target.value, dispatch, formState)
          }}
          onBlur={e => {
            onFocusOut('name', e.target.value, dispatch, formState)
          }}
          helperText={formState.names.touched}
          
        />
        <TextField 
          id="apellidos" 
          name="lastNames" 
          label="Apellidos" 
          variant="outlined" 
          value={formState.lastNames.value}
          onChange={e => {
            onInputChange('lastNames', e.target.value, dispatch, formState)
          }}
        />
        <TextField 
          id="cedulaciudadania" 
          name="citicenship" 
          label="Cedula de ciudadania" 
          variant="outlined"
          value={formState.citicenship.value}
          onChange={e => {
            onInputChange('citicenship', e.target.value, dispatch, formState)
          }}
        />
        <TextField 
          id="nit" 
          name="nit" 
          label="Numero de NIT" 
          variant="outlined"
          value={formState.nit.value}
          onChange={e => {
            onInputChange('nit', e.target.value, dispatch, formState)
          }}
        />
        <TextField 
          id="celular"
          name="cellphone" 
          label="celular" 
          variant="outlined"
          value={formState.cellphone.value}
          onChange={e => {
            onInputChange('cellphone', e.target.value, dispatch, formState)
          }}
        />
        <TextField 
          id="email"
          name="email"
          label="E-mail"
          variant="outlined"
          value={formState.email.value}
          onChange={e => {
            onInputChange('email', e.target.value, dispatch, formState)
          }}
        />
        <TextField
          id="password"
          name="password" 
          label="Contraseña" 
          variant="outlined"
          value={formState.password.value}
          onChange={e => {
            onInputChange('password', e.target.value, dispatch, formState)
          }}
          type="password"
        />
        <TextField 
          id="passwordconfirm" 
          name="passwordConfirm" 
          label="Confirmar contraseña" 
          variant="outlined"
          value={formState.passwordConfirm.value}
          onChange={e => {
            onInputChange('passwordConfirm', e.target.value, dispatch, formState)
          }}
          type="password"
        />

        <Typography variant="body2">
          Enviaremos un mensaje de texto con un código al número que proporcionaste
        </Typography>

        <RegisterButton disableElevation variant="contained" onClick={submitForm} disabled={!formState.isFormValid}>
          Enviar
        </RegisterButton>
      </Box>
    </Box>
  );
};

export default RegisterForm;