import * as yup from "yup";
export const errorComment = yup.object().shape({
  nombre: yup.string().required("Campo nombre y apellido obligatorio"),

  email: yup
    .string()
    .required("Campo correo electrónico obligatorio")
    .email("Formato de correo electrónico inválido"),
//   tel: yup.string().matches(/^+54\d{3}\d{7}$/, 'Formato Incorrecto'),
  msg: yup.string().required("Campo mensaje obligatorio"),
});