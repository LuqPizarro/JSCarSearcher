import {brand, year, minimum, maximum, doors, transmission, color, searchData} from './variables.js'
import {showCars, showYear, carFIlter} from './functions.js'

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    showCars(cars);

    // Insertar los años
    showYear();
});

// EventListener para select de busqueda
brand.addEventListener('change', e => {
    searchData.brand = e.target.value;

    carFIlter();
});
year.addEventListener('change', e => {
    searchData.year = parseInt(e.target.value);    // Te trae los numeros como strings y hay que cambiarlo a número

    carFIlter();
});
minimum.addEventListener('change', e => {
    searchData.minimum = e.target.value;

    carFIlter();
});
maximum.addEventListener('change', e => {
    searchData.maximum = e.target.value;

    carFIlter();
});
doors.addEventListener('change', e => {
    searchData.doors = parseInt(e.target.value);

    carFIlter();
});
transmission.addEventListener('change', e => {
    searchData.transmission = e.target.value;

    carFIlter();
});
color.addEventListener('change', e => {
    searchData.color = e.target.value;

    carFIlter();
});