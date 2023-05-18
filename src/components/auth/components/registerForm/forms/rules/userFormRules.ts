const trigger = 'blur'
import { FormRules } from 'element-plus'

const userFormRules = {
 username: [
  {
   required: true,
   message: 'Por favor ingrese su correo electrónico',
   trigger: trigger,
  },
  {
   type: 'email',
   message: 'Por favor ingrese un correo electrónico válido',
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
} as FormRules

export default userFormRules
