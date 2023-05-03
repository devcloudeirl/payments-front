const trigger = 'blur'

const loginRules = {
 username: [
  {
   required: true,
   message: 'Por favor ingrese su correo electrónico',
   trigger: trigger,
  },
 ],
 password: [
  {
   required: true,
   message: 'Por favor ingrese su contraseña',
   trigger: trigger,
  },
  {
   min: 8,
   message: 'La contraseña debe tener al menos 8 caracteres',
   trigger: trigger,
  },
 ],
} as Record<string, any>

export default loginRules