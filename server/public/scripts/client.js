// creating global variables so I can change them later
let firstNumber = 0;
let operator = '';
let secondNumber= 0;

let calculation = {
    firstNumber: firstNumber,
    operator: operator,
    secondNumber: secondNumber
}


console.log('Client.js is loaded...')

$(document).ready(readyNow);

function readyNow () {
    console.log('JQ is loaded...');
    $('#add').on('click', add);
    $('#subtract').on('click', subtract);
    $('#multiply').on('click', multiply);
    $('#divide').on('click', divide);
    $('#submitBtn').on('click', handleData);
    $('#clearBtn').on('click', handleClear);
}

function handleClear () {
    $('#firstNumber').val('');
    operator = '';
    $('#secondNumber').val('');
    console.log('in clear button');
}
// functions to change the operator value based on the button being clicked
function add () {
    operator = '+';
}

function subtract () {
    operator = '-';
}

function multiply () {
    operator = '*';
}

function divide () {
    operator = '/';
}


function handleData (data) {
    console.log('Handling calculations...');
    calculation = {
        firstNumber: $('#firstNumber').val(),
        operator: operator,
        secondNumber: $('#secondNumber').val()
    }
    sendDataToSever(data);
}

function sendDataToSever (data) {
    if ($('#firstNumber').val() == '' )
    $.ajax({
        method: 'POST',
        url: '/calculation',
        data: calculation
    }).then(function (response) {
        console.log('back from server...');
        $('#firstNumber').val('');
        $('#secondNumber').val('');
        getData();
        // getSolution();
    }).catch(function (error) {
        console.log('Error...', error);
        alert('Something went wrong, please try again.')
    })
}

// function getSolution () {
//     $.ajax({
//         method: 'GET',
//         url: '/solution'
//     }).then(function (response) {
//         console.log('Got response', response);
//         renderSolution(response);
//     }).catch(function (error) {
//         console.log('Error', error);
//         alert('Something went wrong, please try again.');
//     });
// }

// function renderSolution (array) {
//     $('#answerSpot').empty();
//     for (let item of array) {
//         $('#answerSpot').append(`
//         <p>
//         ${item}
//         </p>`)
//     }
//     console.log('Solutions are...', array);
// }

function getData () {
    $.ajax({
        method: 'GET',
        url: '/calculation'
    }).then(function (response) {
        console.log('Got response', response)
        renderData(response);
    }).catch(function (error) {
        console.log('Error', error);
        alert('Something went wrong, please try again.');
    })
    console.log('End of getData...');
}

function renderData (array) {
    $('#answerSpot').empty();
    $('#mathSpot').empty();
    for (let item of array) {
        $('#mathSpot').append(`
        <li>
        ${item.firstNumber} ${item.operator} ${item.secondNumber} = ${item.result}
        </li>`);
        $('#answerSpot').append(`<p>${item.result}</p>`)
    }
    console.log('Equations are...', array);

}