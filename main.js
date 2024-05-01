/* EXPRESIONES REGULARES  */

const regexName = /^([A-Za-zñÑáéíóúÁÉÍÓÚ]{2,60}\s?)+$/;
const regexEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const regexPassword = /^[a-zA-Z0-9]{6,10}$/;

/* FUNCION PARA VALIDAR NOMBRE */

function validarNombre(input) {
  if (regexName.test(input.value)) {
    return true;
  } else {
    alert(
      "El nombre suministrado solo puede contener caracteres alfanumericos"
    );
    input.focus();
    return false;
  }
}

/* FUNCION PARA VALIDAR CORREO */

function validarCorreo(input) {
  if (regexEmail.test(input.value)) {
    return true;
  } else {
    alert("Debe usar un correo valido");
    input.focus();
    return false;
  }
}

/* FUNCION PARA VALIDAR CONTRASEÑA */

function validarPassword(input) {
  if (regexPassword.test(input.value)) {
    return true;
  } else {
    alert(
      "La contraseña solo admite caracteres alfanumericos y que como minimo tenga 6 caracteres y como maximo 10 caracteres"
    );
    return false;
  }
}

function validarInputs(f) {
  let typesValidos = ["text", "email", "password"];
  for (const input of f.elements) {
    if (typesValidos.includes(input.type)) {
      if (input.value == "") {
        alert(
          `Un input de tipo ${input.type}, se encuentra vacio, debe suministrar un valor`
        );
        input.focus();
        return false;
      }
    }
    if (input.type == "select-one") {
      if (input.selectedIndex == 0) {
        alert("Debe seleccionar una ciudad");
        input.focus();
        return false;
      }
    }
    if (input.type == "checkbox") {
      if (!input.checked) {
        alert(`Debe marcar la casilla de terminos`);
        input.focus();
        return false;
      }
    }
  }
  return true;
}

function validarForm(form) {
  if (validarInputs(form)) {
    if (
      validarNombre(form.nombre) &&
      validarCorreo(form.correo) &&
      validarPassword(form.clave)
    ) {
      alert("EL FORMULARIO ES VALIDO");
      return true;
    } else {
      alert("Los campos están llenos pero hay valores erroneos") 
      return false;
    }
  } else {
    alert("FORMULARIO INVALIDO");
    return false;
  }
}
