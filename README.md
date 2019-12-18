Welcome to API Node Version - test project

# Testing

In your terminal:

1) Clone this repo with ```git clone https://github.com/deorsi/node-api```;
2) Run ```npm install``` on command line to install dependencies;
3) Then run ```npm start``` on the command line to start the server and follow the step 4.

On Heroku:

4) Using postman you can send a POST request to ```https://api-node-info.herokuapp.com/``` (or localhost:5000 if you are running the express.js on your terminal) with the following instructions:

    a) Header:

    * Content-Type  application/json
    
    b) Body (request payload RAW):
    ```
    {
        "Language": "ENG",
        "Currency": "USD",
        "Destination": "MCO",
        "DateFrom": "11/26/2019",
        "DateTO": "11/29/2019",
        "Occupancy": {
            "AdultCount": "1",
            "ChildCount": "1",
            "ChildAges": ["10"]
        }
    }
    ```
5) You should see the tranformed data from the Service API on the postman body.

