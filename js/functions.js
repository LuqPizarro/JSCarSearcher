import {year, result, max, min, searchData} from './variables.js'

// Funciones
export function showCars(cars) {

    cleanHTML();

    cars.forEach( car => {

        const {brand, model, year, doors, transmission, price, color} = car;
        const carHTML = document.createElement('p');

        carHTML.textContent = `
        ${brand} ${model} - ${year} - ${doors} doors - transmission: ${transmission} - Precio: ${price} - color ${color}
        `
        

        //Insertar en el HTML
        result.appendChild(carHTML);
    });
}

function cleanHTML() {
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
}

export function showYear(){
    for( let i = max; i >= min; i--){
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
    }
}

export function carFIlter(){
    const result = cars.filter(brandFilter).filter(yearFilter).filter(minimumFilter).filter(maximumFilter).filter(doorsFilter).filter(transmissionFilter).filter(colorFIlter)

    // console.log(result);

    if (result.length){
        showCars(result);
    } else {
       noResult();
    }
}

function noResult(){
    
    cleanHTML()
    
    const noResult = document.createElement('div');
    noResult.classList.add('alert', 'error');
    noResult.textContent = 'Nothing to Show';
    result.appendChild(noResult);

}  

function brandFilter(car) {
    const {brand} = searchData;
    if (brand) {
        return car.brand === brand;
    }
    return car;
}

function yearFilter(car) {
    const {year} = searchData;
    if (year) {
        return car.year === year;
    }
    return car;
}

// Estas no necesitan parseInt porque no es estricto (===)
function minimumFilter(car) {
    const {minimum} = searchData;
    if (minimum) {
        return car.precio >= minimum;
    }
    return car;
}

function maximumFilter(car) {
    const {maximum} = searchData;
    if (maximum) {
        return car.precio <= maximum;
    }
    return car;
}

function doorsFilter(car) {
    const {doors} = searchData;
    if (doors) {
        return car.doors === doors;
    }
    return car;
}

function transmissionFilter(car) {
    const {transmission} = searchData;
    if (transmission) {
        return car.transmission === transmission;
    }
    return car;
}

function colorFIlter(car) {
    const {color} = searchData;
    if (color) {
        return car.color === color;
    }
    return car;
}