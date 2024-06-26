const celsiusinput = document.querySelector('#celsius > input');
const fahrenheitinput = document.querySelector('#fahrenheit > input');
const kelvininput = document.querySelector('#kelvin > input');

function roundnum(num){
    return Math.round(num*100)/100

}

function celsiustofahrenheitandkelvin (){
    const ctemp =parseFloat (celsiusinput.value);
    const ftemp = (ctemp * (9/5)) + 32;
    const ktemp = (ctemp + 273.15)
    fahrenheitinput.value = roundnum(ftemp);
    kelvininput.value =roundnum (ktemp);

}

function ftcak(){
    const ftemp = parseFloat (fahrenheitinput.value);
    const ctemp = (ftemp -32) * (5/9);
    const ktemp = (ftemp + 459.67) * 5/9;
    celsiusinput.value=roundnum(ctemp)
    kelvininput.value=roundnum(ktemp)
}

function ktcaf(){
    const ktemp = parseFloat (kelvininput.value)
    const ctemp = ktemp - 273.15;
    const ftemp = 9/5 * (ktemp - 273.15) + 32;
    celsiusinput.value=roundnum(ctemp)
    fahrenheitinput.value=roundnum(ftemp)
}

celsiusinput.addEventListener('input',celsiustofahrenheitandkelvin);
fahrenheitinput.addEventListener('input',ftcak)
kelvininput.addEventListener('input', ktcaf)