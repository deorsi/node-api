Welcome to API Node Version - test project

# Instructions

a) Header:

 * Content-Type  application/json
b) Body (request payload):


End Goal
You will make a request to Your API using the following payload (JSON):

 * Raw json example:
 
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

Your API will get and transform the Service API response and return the following JSON response.


[
  {
    "Destination": "MCO",
    "Code": "WDWBASENXT",
    "Classification": "Theme & Aquatic Parks",
    "Name": "Disney Magic Your Way Base Ticket with No Expiration Option",
    "Description": "The Walt Disney World Resort is the place where fun reigns
                    supreme and dreams come true every day. With four Theme Parks, two Water Parks plus
                    Downtown Disney Area - where the most amazing shopping, dining and entertainment
                    imaginable can be found. Discover an entire world of enchantment and wonder around
                    every corner with one of Disney's Magic Your Way Tickets. Disney’s Magic Your Way Base
                    Ticket offers admission to one of the following theme parks for each day of the
                    ticket",
    "ImageThumb": "http://www.hotelbeds.com/giata/extras/small/ds/28917/28917_3.jpg",
    "ImageFull":  "http://www.hotelbeds.com/giata/extras/big/ds/28917/28917_3.jpg",
    "AvailableModality": [
        {
            "Code": "0#CNX09/19",
            "Name": "3 Days",
            "Contract": "2015WDWEURTO",
            "ServicePrice": 656.08,
            "OperationDateList": [
                {
                    "From": "11/26/2015", // Date
                    "To": "11/29/2015" // Date + MaximumDuration
                },
                {
                    "From": "11/27/2015", // Date
                    "To": "11/30/2015" // Date + MaximumDuration
                }
            ]
         },
          // ... (loop)
    ]
  },
  // ... (loop)
]

The payload sent to Your API is the same that the Service API expects. Make a POST request to http://travellogix.api.test.conceptsol.com/api/Ti
cket/Search
You will provide the request JSON mentioned above, so don't forget to add the application/json as the Content-Type in the request headers.
Another required parameter in the request header is an Authorization token. The Service API is protected by login, so before the first call you
will need to ensure that you are authorized to that.
The token is valid for 24 hours after created.

Request Header Example:

Content-Type: application/json
Authorization: Bearer
xf5XWHv01N5CDRFBCzC9bUc5fb-a4-wiTxQHzjhJyMi4jt5ZzqbXZw0TCOIVjT59yReLdV-BXmWlnvAvjd_ny_
brH2PA6E7BF6fHeAj0PMkALN8ncEbgbZB3Vw5NssaM0nnlacjZuPTh2Wdn_8IEsPeYTQx1_8pTU_vw3pUOtLed
JY87BifhWa_2A3zLYOt3uboDVTN-peO5yAF_x5uRFyJbUZN_c2Hosk7Qmfn7NSCN47Gbb4FacTodIlmpmjYjjI
98rpQeaSM8b5_foJrjAFmiob-P-V1cJij2AG1T7FsTzz4FbXGuoSbrdq2LqOft9W25A7IjVZBKqz-UBL_Fltnl
c1f_fiMvOfszNLWbO87PYaqW7ova8fdj2p5KyHDo2jB6F2trLPLBalKKN-5OuMHUp_v-lPXk6b64F3vMwINDgp
zSQa-80_wln_1blE2MChwb3nbSfA2_9dR1XKDFtehWLWP03lxwGIiM2vS_MuU

To get this Authorization token, make a POST request to: http://travellogix.api.test.conceptsol.com/Token passing this RAW data (no headers
needed):

grant_type=password&username=test1%40test2.com&password=Aa234567%21

Notice the token_type in response, this will be joined with the access_token to form the Authorization parameters in the header of the next
requests. (edited)

{
"access_token":
"xf5XWHv01N5CDRFBCzC9bUc5fb-a4-wiTxQHzjhJyMi4jt5ZzqbXZw0TCOIVjT59yReLdV-BXmWlnvAvjd_ny
_brH2PA6E7BF6fHeAj0PMkALN8ncEbgbZB3Vw5NssaM0nnlacjZuPTh2Wdn_8IEsPeYTQx1_8pTU_vw3pUOtLe
dJY87BifhWa_2A3zLYOt3uboDVTN-peO5yAF_x5uRFyJbUZN_c2Hosk7Qmfn7NSCN47Gbb4FacTodIlmpmjYjj
I98rpQeaSM8b5_foJrjAFmiob-P-V1cJij2AG1T7FsTzz4FbXGuoSbrdq2LqOft9W25A7IjVZBKqz-UBL_Fltn
lc1f_fiMvOfszNLWbO87PYaqW7ova8fdj2p5KyHDo2jB6F2trLPLBalKKN-5OuMHUp_v-lPXk6b64F3vMwINDg
pzSQa-80_wln_1blE2MChwb3nbSfA2_9dR1XKDFtehWLWP03lxwGIiM2vS_MuU",
"token_type": "bearer",
"expires_in": 86399,
"userName": "test@test.com",
".issued": "Mon, 02 Feb 2015 23:19:05 GMT",
".expires": "Tue, 03 Feb 2015 23:19:05 GMT"
}