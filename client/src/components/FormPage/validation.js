export const validate = (form, setErrors) => {
    let errorsAux = {
      usernameErrors: {
        isEmail: "",
        isEmpty: "",
        validLength: "",
      },
      passwordErrors: {
        hasNumber: "",
        validLength: "",
      },
    };
  
    // username
    if (!/\S+@\S+\.\S+/.test(form.username)) {
      errorsAux.usernameErrors.isEmail = "No es un email válido.";
    }
    if (form.username === "") {
      errorsAux.usernameErrors.isEmpty = "Este campo no puede estar vacío.";
    }
    if (form.username.length > 30) {
      errorsAux.usernameErrors.validLength = "El name es demasiado largo.";
    }
  
    // password
    if (!/\d/.test(form.password)) {
      errorsAux.passwordErrors.hasNumber =
        "La contraseña tiene que tener al menos un número.";
    }
    if (form.password.length < 6 || form.password.length > 10) {
      errorsAux.passwordErrors.validLength =
        "La contraseña tiene que tener una longitud entre 6 y 10 caracteres.";
    }
  
    //
    setErrors({ ...errorsAux });
  };
  