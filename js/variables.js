// Variables
export const brand = document.querySelector('#brand');
export const year = document.querySelector('#year');
export const minimum = document.querySelector('#minimum');
export const maximum = document.querySelector('#maximum');
export const doors = document.querySelector('#doors');
export const transmission = document.querySelector('#transmission');
export const color = document.querySelector('#color');

export const result = document.querySelector('#result');


export const max = new Date().getFullYear();
export const min = max -10;

// Generar un objeto con los datos de la busqueda
export const searchData = {
    brand: '',
    year: '',
    minimum: '',
    maximum: '',
    doors: '',
    transmission: '',
    color: '',
}
