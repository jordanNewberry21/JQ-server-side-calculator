// bringing in express and body parser
// getting local server set up
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
// array to store my solutions
const solutionArray = [];
const mathArray = [];
// static file locations
app.use(express.static('server/public'));
// setting up bodyParser for data transfer
app.use(bodyParser.urlencoded({extended: true}));

// GET and POST routes go here
app.get('/calculation', (req, res) => {
    console.log('Sending calculation data...');
    res.send(mathArray);
})

app.post('/calculation', (req, res) => {
    let calcData = req.body
    console.log('Getting calc data from client...', calcData);
    mathArray.push(calcData);
    let solution = doTheMath(calcData);
    res.sendStatus(200);
})







// telling server which port to listen on
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});