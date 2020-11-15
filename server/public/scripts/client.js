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

function readyNow () { // click handlers live here
    console.log('JQ is loaded...');
    getData();
    $('#add').on('click', add);
    $('#subtract').on('click', subtract);
    $('#multiply').on('click', multiply);
    $('#divide').on('click', divide);
    $('#submitBtn').on('click', handleData);
    $('#clearBtn').on('click', handleClear);
    $('#deleteDataBtn').on('click', deleteData);
}

function deleteData () { // DELETE request function
    console.log('in delete function');
    confirm('Are you sure you want to delete your calculation history?');
    if (confirm) { // must confirm before delete
        $.ajax({
            method: 'DELETE',
            url: '/calculation/:id',
        }).then( function (response) {
            console.log('Back from server...', response);
            alert('All previous calculations have been deleted. There is no history to show.');
            $('#answerSpot').empty();
            $('#mathSpot').empty();
        }).catch( function (error) {
            alert('Something went wrong, please try again.');
            console.log('Error', error);
        })
    }
}

function handleClear () { // clear input button function
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


function handleData (data) { // making sure the data is stored properly before it's sent over
    console.log('Handling calculations...');
    calculation = {
        firstNumber: $('#firstNumber').val(),
        operator: operator,
        secondNumber: $('#secondNumber').val()
    }
    sendDataToSever(data);
}

function sendDataToSever (data) { // sending data to server
    if ($('#firstNumber').val() == '' || operator == '' || $('#secondNumber').val() == '') {
        alert('Please fill in all fields! Choose an operator if you haven\'t already!')
    } else { // conditions above ensure all fields are filled in before anything is sent to the server
    $.ajax({ // ajax POST request
        method: 'POST',
        url: '/calculation',
        data: calculation //
    }).then(function (response) {
        console.log('back from server...');
        $('#firstNumber').val('');
        operator = '';
        $('#secondNumber').val('');
        getData();
        // getSolution();
    }).catch(function (error) {
        console.log('Error...', error);
        alert('Something went wrong, please try again.')
    })
    }
}



function getData () { // run this function in readyNow to properly
    $.ajax({          // display any remaining data on refresh
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
    $('#answerSpot').empty(); // gotta empty before you append...
    $('#mathSpot').empty();
    if (array.length != 0) { // had errors on page load, because it was trying to display an empty array.
    $('#answerSpot').append(`<h2>${array[array.length-1].result}</h2>`)
    for (let i=0; i<array.length; i++) {
        $('#mathSpot').append(`
        <li>
        ${array[i].firstNumber} ${array[i].operator} ${array[i].secondNumber} = ${array[i].result}
        </li>`);
    }
    }
    console.log('Equations are...', array);

}