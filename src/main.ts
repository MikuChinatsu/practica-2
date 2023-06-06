import { Persona } from './models/person';
import { Direccion } from './models/direccion';
import { Mail } from './models/mail';
import { Telefono } from './models/telefono';

const direccion1 = new Direccion('Calle Principal', '123', 1, 'A', '12345', 'Ciudad', 'Provincia');
const direccion2 = new Direccion('Calle Secundaria', '456', 2, 'B', '54321', 'Ciudad2', 'Provincia2');
const direccion3 = new Direccion('Calle Tercera', '789', 3, 'C', '98765', 'Pueblo Nuevo', 'Estado Nuevo');

const telefono1 = new Telefono('Móvil', '1234567890');
const telefono2 = new Telefono('Casa', '9876543210');
const telefono3 = new Telefono('Trabajo', '5555555555');

const mail1 = new Mail('Personal', 'persona1@example.com');
const mail2 = new Mail('Trabajo', 'persona2@example.com');
const mail3 = new Mail('Otro', 'persona3@example.com');

const persona1 = new Persona('Nombre1', 'Apellido1', 30, '123456789', new Date(), 'Azul', 'Hombre', [direccion1], [mail1], [telefono1], ['Nota 1']);
const persona2 = new Persona('Nombre2', 'Apellido2', 25, '987654321', new Date(), 'Rojo', 'Mujer', [direccion2], [mail2], [telefono2], ['Nota 2']);
const persona3 = new Persona('Nombre3', 'Apellido3', 35, '543216789', new Date(), 'Verde', 'Masculino', [direccion3], [mail3], [telefono3], ['Nota 3']);

const dniDeseado = '123456789'
const personaAModificar = [persona1, persona2, persona3].find(persona => persona.dni === dniDeseado) || null;

const nuevaDireccion = new Direccion('Nueva Calle', '789', 3, 'C', '54321', 'Otra Ciudad', 'Otra Provincia');
const nuevoMail = new Mail('Otro', 'otro@example.com');
const nuevoTelefono = new Telefono('Trabajo', '5555555555');

console.log('Registro de Persona 1:');
console.log('Nombre:', persona1.nombre);
console.log('Apellidos:', persona1.apellidos);
console.log('Edad:', persona1.edad);
console.log('DNI:', persona1.dni);
console.log('Cumpleaños:', persona1.cumpleanos);
console.log('Color Favorito:', persona1.colorFavorito);
console.log('Sexo:', persona1.sexo);
console.log('Direcciones:', persona1.direcciones);
console.log('Mails:', persona1.mails);
console.log('Teléfonos:', persona1.telefonos);
console.log('Notas:', persona1.notas);

console.log('\n __________________ \n');

console.log('Registro de Persona 2:');
console.log('Nombre:', persona2.nombre);
console.log('Apellidos:', persona2.apellidos);
console.log('Edad:', persona2.edad);
console.log('DNI:', persona2.dni);
console.log('Cumpleaños:', persona2.cumpleanos);
console.log('Color Favorito:', persona2.colorFavorito);
console.log('Sexo:', persona2.sexo);
console.log('Direcciones:', persona2.direcciones);
console.log('Mails:', persona2.mails);
console.log('Teléfonos:', persona2.telefonos);
console.log('Notas:', persona2.notas);

console.log('\n __________________ \n');

console.log('Registro de Persona 3:');
console.log('Nombre:', persona3.nombre);
console.log('Apellidos:', persona3.apellidos);
console.log('Edad:', persona3.edad);
console.log('DNI:', persona3.dni);
console.log('Cumpleaños:', persona3.cumpleanos);
console.log('Color Favorito:', persona3.colorFavorito);
console.log('Sexo:', persona3.sexo);
console.log('Direcciones:', persona3.direcciones);
console.log('Mails:', persona3.mails);
console.log('Teléfonos:', persona3.telefonos);
console.log('Notas:', persona3.notas);

if (personaAModificar) {
  personaAModificar.direcciones.push(nuevaDireccion);
  personaAModificar.mails.push(nuevoMail);
  personaAModificar.telefonos.push(nuevoTelefono);
}

console.log('\n __________________ \n');
console.log('\n TRAS MODIFICACIONES \n');
console.log('\n __________________ \n');

console.log('Registro de Persona 1:');
console.log('Nombre:', persona1.nombre);
console.log('Apellidos:', persona1.apellidos);
console.log('Edad:', persona1.edad);
console.log('DNI:', persona1.dni);
console.log('Cumpleaños:', persona1.cumpleanos);
console.log('Color Favorito:', persona1.colorFavorito);
console.log('Sexo:', persona1.sexo);
console.log('Direcciones:', persona1.direcciones);
console.log('Mails:', persona1.mails);
console.log('Teléfonos:', persona1.telefonos);
console.log('Notas:', persona1.notas);

console.log('\n __________________ \n');

console.log('Registro de Persona 2:');
console.log('Nombre:', persona2.nombre);
console.log('Apellidos:', persona2.apellidos);
console.log('Edad:', persona2.edad);
console.log('DNI:', persona2.dni);
console.log('Cumpleaños:', persona2.cumpleanos);
console.log('Color Favorito:', persona2.colorFavorito);
console.log('Sexo:', persona2.sexo);
console.log('Direcciones:', persona2.direcciones);
console.log('Mails:', persona2.mails);
console.log('Teléfonos:', persona2.telefonos);
console.log('Notas:', persona2.notas);

console.log('\n __________________ \n');

console.log('Registro de Persona 3:');
console.log('Nombre:', persona3.nombre);
console.log('Apellidos:', persona3.apellidos);
console.log('Edad:', persona3.edad);
console.log('DNI:', persona3.dni);
console.log('Cumpleaños:', persona3.cumpleanos);
console.log('Color Favorito:', persona3.colorFavorito);
console.log('Sexo:', persona3.sexo);
console.log('Direcciones:', persona3.direcciones);
console.log('Mails:', persona3.mails);
console.log('Teléfonos:', persona3.telefonos);
console.log('Notas:', persona3.notas);

