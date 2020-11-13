// bringing in express and body parser
// getting local server set up
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));







// telling server which port to listen on
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});