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


- [] CSS
    - [] style the buttons / inputs to make it look like a calculator


- [] SERVER
    - [] Keep a record of all math operations and solutions on the server
    - [] The server must do the calculations
    - [] it should handle addition, subtraction, multiplication, and division.
    - [] once the calculation is complete, send back the OK
    - [] do a GET request after the POST to send back the result of the calculation.


- [] CLIENT
    - [] When the `=` button is clicked capture the inputs
    - [] store inputs in an object to send to the server via POST
    - [] Display a list of all the previous calculations
    - [] update display list when a new calculation is made