const inputCalc = document.querySelector('.account');
const resultCalc = document.querySelector('.result');
const btnInd = document.querySelector('.btn-indigo'); //['-', '+', '/', '*', '%']

function input(i) {
    inputCalc.value = inputCalc.value + i;
}
function BtnIndigo(i) {
    if (inputCalc.value == btnInd.value  ) {
        inputCalc.value = '';
    } 
    else {
        inputCalc.value = inputCalc.value + i;
    }
}

function result() {
    if (eval(inputCalc.value) == undefined) {
        resultCalc.value = '0,00';
        inputCalc.value = '0,00';
    }
    if (eval(inputCalc.value) == Infinity) {
        resultCalc.value = '0,00';
        inputCalc.value = 'Не делится на 0';
    }
    resultCalc.value = eval(inputCalc.value);
    inputCalc.value = eval(inputCalc.value);
}

function backspace() {
    inputCalc.value = inputCalc.value.substring(0,inputCalc.value.length-1);
}

function reset() {
     resultCalc.value = '';
     inputCalc.value = '';
}