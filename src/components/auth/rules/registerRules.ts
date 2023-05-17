const trigger = "blur";

const registerRules = {
    username: [
      {
        required: true,
        message: "Por favor ingrese su correo electrónico",
        trigger: trigger,
      },
      {
        type: "email",
        message: "Por favor ingrese un correo electrónico válido",
        trigger: trigger,
      },
    ],
    password: [
      {
        required: true,
        message: "Por favor ingrese su contraseña",
        trigger: trigger,
      },
      {
        min: 6,
        message: "La contraseña debe tener al menos 6 caracteres",
        trigger: trigger,
      },
      {
        pattern: /(?=.*[0-9])/,
        message: "La contraseña debe tener al menos un número",
        trigger: trigger,
      },
      {
        pattern: /(?=.*[A-Z])/,
        message: "La contraseña debe tener al menos una letra mayúscula",
        trigger: trigger,
      },
      {
        pattern: /(?=.*[!@#$%^&*])/,
        message: "La contraseña debe tener al menos un caracter especial",
        trigger: trigger,
      },
    ],
    confirm_password: [
      {
        required: true,
        message: "Por favor confirme su contraseña",
        trigger: trigger,
      },
    ],
    conditions: [
      {
        required: true,
        message: "Por favor acepte los términos y condiciones",
        trigger: trigger,
      },
    ],
    document_number: [
      {
        required: true,
        message: "Por favor ingrese su número de documento",
        trigger: trigger,
      },
      {
        min: 8,
        message: "El número de documento debe tener al menos 8 caracteres",
        trigger: trigger,
      },
      {
        max: 10,
        message: "El número de documento debe tener máximo 10 caracteres",
        trigger: trigger,
      },
      {
        type: "string",
        message: "El número de documento debe ser alfanumérico",
        trigger: trigger,
      },
      {
        pattern: /^[0-9]+$/,
        message: "El número de documento debe ser numérico",
        trigger: trigger,
      },
    ],
    name: [
      {
        required: true,
        message: "Por favor ingrese su nombre",
        trigger: trigger,
      },
    ],
    first_last_name: [
      {
        required: true,
        message: "Por favor ingrese su apellido",
        trigger: trigger,
      },
    ],
    second_last_name: [
      {
        required: true,
        message: "Por favor ingrese su segundo apellido",
        trigger: trigger,
      },
    ],
    phone: [
      {
        required: true,
        message: "Por favor ingrese su número de teléfono",
        trigger: trigger,
      },
      {
        max: 9,
        message: "El número de teléfono debe tener máximo 9 caracteres",
        trigger: trigger,
      }
    ],
  } as Record<string, any>;
  export default registerRules;