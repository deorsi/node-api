Welcome to API Node Version - test project

# Testing

1) Clone this repo with ```git clone https://github.com/deorsi/node-api```;
2) Run ```npm install``` on command line to install dependencies;
3) Then run ```npm start``` on the command line to start the server.

    3.1) Using postman you can send a POST request to localhost:3003 with the following instructions:

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
4) You'll see the tranformed data from the Service API on the postman body.

