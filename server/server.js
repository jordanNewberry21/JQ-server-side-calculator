// bringing in express and body parser
// getting local server set up
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
// array to store my solutions and operations
const solutionArray = [];
const mathArray = [];
// static file locations
app.use(express.static('server/public'));
// setting up bodyParser for data transfer
app.use(bodyParser.urlencoded({extended: true}));

// GET and POST routes go here
app.get('/calculation', (req, res) => { // get route to send the calculations
    console.log('Sending calculation data...');
    res.send(mathArray);
})

app.get('/solution', (req, res) => { // get route to send the calculations
    console.log('Sending calculation data...');
    res.send(solutionArray);
})

app.post('/calculation', (req, res) => { // post route to receive the calculations
    let calcData = req.body
    console.log('Getting calc data from client...', calcData);
    mathArray.push(calcData);
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
    }
    console.log('the result is...', result);
    solutionArray.push(result);
    return result;
}





// telling server which port to listen on
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});