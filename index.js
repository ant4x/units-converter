const displayNumber = document.getElementById("display--number");
const input = document.getElementById("input--number");
const meters = document.getElementById("meters");
const liters = document.getElementById("liters");
const kilograms = document.getElementById("kilograms");

function convertMeters() {
    let unit = input.value;
    let toFeet = unit * 3.28084;
    let toMeters = unit * 0.3048;
    meters.textContent = `${unit} meters = ${toFeet.toFixed(3)} feet | ${unit} feet = ${toMeters.toFixed(3)} meters`;
}

function convertLiters() {
    let unit = input.value;
    let toGallons = unit * 0.2641722;
    let toLiters = unit * 3.785;
    liters.textContent = `${unit} liters = ${toGallons.toFixed(3)} gallons | ${unit} gallons = ${toLiters.toFixed(3)} liters`;
}

function convertKilograms() {
    let unit = input.value;
    let toKilograms = unit * 0.453592;
    let toPounds = unit * 2.20462;
    kilograms.textContent = `${unit} kilos = ${toPounds.toFixed(3)} pounds | ${unit} pounds = ${toKilograms.toFixed(3)} kilos`;
}

input.addEventListener('input', function () {
    displayNumber.textContent = input.value;
    if (!isNaN(input.value)) {
        displayNumber.classList.remove('header--error');
        convertMeters();
        convertLiters();
        convertKilograms();
    } else {
        displayNumber.textContent = 'Enter a number!';
        displayNumber.classList.add('header--error');
    }
})
