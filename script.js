function addNumber(numA, numB) {
    return numA + numB;
}

function subtractNumber(numA, numB) {
    if (numA < numB) {
        return numB - numA;
    } else if (numA > numB) {
        return numA - numB;
    } else if (numA === numB) {
        return numA - numB;
    } else {
        return NaN;
    }
    
}

function multiplyNumber(numA, numB) {
    return numA * numB;
}

function divideNumber(numA, numB) {
    if (numB === 0 || numA === 0) {
        throw new Error("Cannot divide by zero");
    } else if (numA > numB) {
        return numA / numB;
    } else if (numA < numB) {
        return numB / numA;
    } else if (numA === numB) {
        return numA / numB;
    } else {
        return NaN;
    }
    
}

function squareNumber(num) {
    return num * num;
}

function performOperation(operation) {
    const numA = parseFloat(document.getElementById('numA').value);
    
    let numB;

    if (operation !== 'square') {
        numB = parseFloat(document.getElementById('numB').value);
    }

    let result;

    switch (operation) {
        case 'add':
            result = addNumber(numA, numB);
            break;
        case'subtract':
            result = subtractNumber(numA, numB);
            break;
        case'multiply':
            result = multiplyNumber(numA, numB);
            break;
        case 'divide':
            result = divideNumber(numA, numB);
            break;
        case'square':
            result = squareNumber(numA);
            break;
        default:
            throw new Error("Invalid operation");
    }
    document.getElementById('result').textContent = result;
}
function clearInputs() {
    document.getElementById('numA').value = '';
    document.getElementById('numB').value = '';
    document.getElementById('result').textContent = '';
    document.querySelector('button.active').classList.remove('active');
}
document.getElementById('clearBtn').addEventListener('click', clearInputs);
document.getElementById('numA').addEventListener('input', () => {
    const numBGroup = document.getElementById('numB-group');
    const operation = document.querySelector('button.active');
    if (operation && operation.textContent === 'Square') {
        numBGroup.style.display = 'none';
    } else {
        numBGroup.style.display = 'block';
    }
});