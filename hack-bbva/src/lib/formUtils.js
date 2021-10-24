export const UPDATE_FORM = 'UPDATE_FORM';

export const onInputChange = (name, value, dispatch, formState) => {

  const { hasError, error } = validateInput(name, value);
  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];
    if (key === name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATE_FORM,
    data: { name, value, hasError, error, touched: false, isFormValid }
  });
};

export const onFocusOut = (name, value, dispatch, formState) => {
  
  const { hasError, error } = validateInput(name, value);
  let isFormValid = true;
  
  for (const key in formState) {
    const item = formState[key];
    if(key === name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATE_FORM,
    data: { name, value, hasError, error, touched: true, isFormValid }
  });
};

export const validateInput = (name, value) => {
  let hasError = false,
  error = '';
  
  switch (name) {
    case 'names':
    case 'lastNames':
      if (value.trim() === "") {
        hasError = true;
        error = "Campo incompleto";
      } else if (!/^[a-zA-Z ]+$/.test(value)) {
        hasError = true
        error = "Nombre invalido, evite caracteres especiales"
      } else {
        hasError = false
        error = ""
      }
      break;
    case "email":
      if (value.trim() === "") {
        hasError = true
        error = "Email no puede estar vacio"
      } else if (
        !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          value
        )
      ) {
        hasError = true
        error = "Email invalido"
      } else {
        hasError = false
        error = ""
      }
      break;
    case 'password':
      if (value.trim() === "") {
        hasError = true
        error = "Password no puede estar vacio"
      } else if (value.trim().length < 8) {
        hasError = true
        error = "Debe tener al menos 8 caracteres"
      } else {
        hasError = false
        error = ""
      }
      break;
    case 'passwordConfirm':
      if (value.trim() === "") {
        hasError = true
        error = "Password no puede estar vacio"
      } else if (value.trim().length < 8) {
        hasError = true
        error = "Debe tener al menos 8 caracteres"
      } else {
        hasError = false
        error = ""
      }
      break;
    case 'cellphone':
      if (value.trim() === "") {
        hasError = true
        error = "Campo obligatorio"
      } else if (!/^[0-9]{10}$/.test(value)) {
        hasError = true
        error = "Celular invalido. Debe tener 10 digitos"
      } else {
        hasError = false
        error = ""
      }
      break;
    case 'citicenship':
      if (value.trim() === "") {
        hasError = true
        error = "Campo obligatorio"
      } else if (!/^[0-9]{8}$/.test(value)) {
        hasError = true
        error = "Cedula de ciudadania invalida. Debe tener 8 digitos"
      } else {
        hasError = false
        error = ""
      }
      break;
    case 'nit':
      if (value.trim() === "") {
        hasError = true
        error = "Campo obligatorio"
      } else if (!/^[0-9]{9}$/.test(value)) {
        hasError = true
        error = "NIT invalido. Debe tener 9 digitos"
      } else {
        hasError = false
        error = ""
      }
      break;
    default:
      break;
  }

  return { hasError, error };
};