let data = {
    firstNumber: 0,
    operator: '',
    secondNumber: 0
};

console.log('Client.js is loaded...')

$(document).ready(readyNow);

function readyNow () {
    console.log('JQ is loaded...');
    $('#add').on('click', add);
    $('#subtract').on('click', subtract);
    $('#multiply').on('click', multiply);
    $('#divide').on('click', divide);
    $('#submitBtn').on('click', handleSubmit);
    $('#clearBtn').on('click', handleClear);
}

function handleClear () {
    console.log('in clear button');
}

function handleSubmit () {
    console.log('in submit button');
}

function add () {
    console.log('in addition');
}

function subtract () {
    console.log('in subtract');
}

function divide () {
    console.log('in divide');
}

function multiply () {
    console.log('in multiply');
}

function handleData () {
    console.log('Handling calculations...');
    data = {
        firstNumber: $('#firstNumber').val(),
        operator: '',
        secondNumber: $('#secondNumber').val()
    }
}

function getData () {
    $.ajax({
        method: 'GET',
        url:'/calculation'
    }).then(function (response) {
        console.log('Got response', response)
        renderData(response);
    }).catch(function (error) {
        console.log('Error', error);
        alert('Something went wrong, please try again.')
    })
    console.log('End of getData...');
}

function renderData (array) {
    console.log('Solutions are...', array);
}