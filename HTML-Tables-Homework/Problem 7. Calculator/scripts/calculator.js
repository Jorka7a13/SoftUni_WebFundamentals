function calculate() {
    var equation = document.getElementById('input').value;
    document.getElementById('input').value = eval(equation);
}

function addPlus() {
    document.getElementById('input').value += " + ";
}

function addMinus() {
    document.getElementById('input').value += " - ";
}

function addMul() {
    document.getElementById('input').value += " * ";
}

function addDiv() {
    document.getElementById('input').value += " / ";
}

function clearText() {
    document.getElementById('input').value = "0";
}

function addOne() {
    if (document.getElementById('input').value != 0) {
        document.getElementById('input').value += 1;
    }
    else {
        document.getElementById('input').value = 1;
    }
}

function addTwo() {
    if (document.getElementById('input').value != 0) {
        document.getElementById('input').value += 2;
    }
    else {
        document.getElementById('input').value = 2;
    }
}

function addThree() {
    if (document.getElementById('input').value != 0) {
        document.getElementById('input').value += 3;
    }
    else {
        document.getElementById('input').value = 3;
    }
}

function addFour() {
    if (document.getElementById('input').value != 0) {
        document.getElementById('input').value += 4;
    }
    else {
        document.getElementById('input').value = 4;
    }
}

function addFive() {
    if (document.getElementById('input').value != 0) {
        document.getElementById('input').value += 5;
    }
    else {
        document.getElementById('input').value = 5;
    }
}

function addSix() {
    if (document.getElementById('input').value != 0) {
        document.getElementById('input').value += 6;
    }
    else {
        document.getElementById('input').value = 6;
    }
}

function addSeven() {
    if (document.getElementById('input').value != 0) {
        document.getElementById('input').value += 7;
    }
    else {
        document.getElementById('input').value = 7;
    }
}

function addEight() {
    if (document.getElementById('input').value != 0) {
        document.getElementById('input').value += 8;
    }
    else {
        document.getElementById('input').value = 8;
    }
}

function addNine() {
    if (document.getElementById('input').value != 0) {
        document.getElementById('input').value += 9;
    }
    else {
        document.getElementById('input').value = 9;
    }
}

function addZero() {
    if (document.getElementById('input').value != 0) {
        document.getElementById('input').value += 0;
    }
    else {
        document.getElementById('input').value = 0;
    }
}