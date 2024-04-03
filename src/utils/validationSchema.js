import * as yup from "yup";
export const errorComment = yup.object().shape({
  nombre: yup.string().required("Campo nombre y apellido obligatorio"),

  email: yup
    .string()
    .required("Campo correo electrónico obligatorio")
    .email("Formato de correo electrónico inválido"),
  tel: yup
    .string()
    .max(10, "El número de teléfono debe tener como máximo 10 caracteres")
    .matches(/^[0-9]+$/, "El número de teléfono solo puede contener dígitos numéricos"),
  msg: yup.string().required("Campo mensaje obligatorio"),
});
