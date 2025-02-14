import * as React from 'react';





export const EmailTemplate = ({
  firstName, lastName, email, company, institutionType, phone, message
}) => (
  <div>
    <h1>Haz recibido un nuevo contacto por la pagina de Vasto Foods</h1>
    <p>Estos son los datos del contacto:</p>
    <ul>
      <li>Nombre: {firstName} {lastName}</li>
      <li>Email: {email}</li>
      <li>Empresa: {company}</li>
      <li>Tipo de Institucion: {institutionType}</li>
      <li>Telefono: {phone}</li>
      <li>Mensaje: {message}</li>
    </ul>
  </div>
);