// bringing in express and body parser
// getting local server set up
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
// array to store my solutions and operations
// const solutionArray = [];
const mathArray = [];

// creating a global data object up here so I can manipulate
// it in my function below.
let dataObj = {
    firstNumber: '',
    operator: '',
    secondNumber: '',
    result: ''
}


// static file locations
app.use(express.static('server/public'));
// setting up bodyParser for data transfer
app.use(bodyParser.urlencoded({extended: true}));


// Making a DELETE route

app.delete('/calculation/:id', (req, res) => {
    console.log("Deleting calculation data...");
    mathArray.splice(req.params.id);
    console.log(mathArray);
    res.sendStatus(200);
})

// GET and POST routes go here

// get route to send the calculations

app.get('/calculation', (req, res) => { 
    console.log('Sending calculation data...');
    res.send(mathArray);
});


// post route to receive the calculations

app.post('/calculation', (req, res) => { 
    let calcData = req.body // storing the data object from client
    console.log('Getting calc data from client...', calcData);
    
    doTheMath(calcData); // calling math function here with data from client
    res.sendStatus(200);
})

function doTheMath (calculation) {
    // assigning the data object values 
    // to variables to make the math look easier
    let x = Number(calculation.firstNumber);
    let y = Number(calculation.secondNumber);
    let operation = calculation.operator;
    let result;

    // using a switch statement to account for the different
    // math operators
    switch (operation) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
    }// changing the values of my global variable
    dataObj = { // before I push it to my array.
        firstNumber: x,
        operator: operation,
        secondNumber: y,
        result: result
    }
    console.log('the result is...', result);
    mathArray.push(dataObj); // pushing result to my solution array to send back to the client
    return result;
}





// telling server which port to listen on
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});