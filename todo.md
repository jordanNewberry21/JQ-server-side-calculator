- [x] INITIAL SETUP
    - [x] create file structure
        - [x] index.html
        - [x] style.css
        - [x] server.js
        - [x] client.js
        - [x] npm init
        - [x] install express
        - [x] install jQuery
        - [x] source all relevant files to index.html

- [x] HTML
    - [x] header with title
    - [x] 2 inputs for number values
    - [x] a way to select the mathematical operator
    - [x] a submit / `=` button
    - [x] also a C / clear button to clear inputs


- [x] CSS
    - [x] style the buttons / inputs to make it look like a calculator


- [x] SERVER
    - [x] might need to have the delete request over here too
    - [x] Keep a record of all math operations and solutions on the server
    - [x] The server must do the calculations
    - [x] it should handle addition, subtraction, multiplication, and division.
    - [x] once the calculation is complete, send back the OK
    - [x] do a GET request after the POST to send back the result of the calculation.


- [] CLIENT
    - [] figure out how to allow the user to click on an old calculation to re-run it in the calculator -- ??????
    - [x] create a delete button that deletes the servers calculation data
    - [x] add a 'Clear' button that clears the inputs
    - [x] When the `=` button is clicked capture the inputs
    - [x] store inputs in an object to send to the server via POST
    - [x] Display a list of all the previous calculations
    - [x] update display list when a new calculation is made