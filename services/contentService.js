let request = require('request'),
  config = require('../config'),
  moment = require('moment'),
  _ = require('lodash')


function getOptions(req) {
  let token = config.getToken();
  let options = {
    method: 'POST',
    url: 'http://travellogix.api.test.conceptsol.com/api/Ticket/Search',
    body: JSON.stringify(req.body),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  };
  return options;
}

exports.getContentAndTransform = function (req, res) {
  let token = config.getToken();
  let options = getOptions(req);
  // console.log('getContentOptions', options);
  request(options, function (error, response, body) {
    // console.log('status', response.statusCode);
    if (!error && (response.statusCode == 200 || response.statusCode == 201)) {
      let data = [];
      let b = JSON.parse(body);
      let result = b.Result;
      // iterate over body
      for (let r of result) {
        let ticketInfo = r.TicketInfo;
        let imageThumb = _.find(ticketInfo.ImageList, ['Type', 'S']);
        // console.log(imageThumb);
        let imageFull = _.find(ticketInfo.ImageList, ['Type', 'L']);
        let availableModality = r.AvailableModality;
        let modalities = [];

        // iterate over availableModality
        for (let a of availableModality) {
          let price = _.find(a.PriceList, ['Description', 'SERVICE PRICE']);
          let dates = [];

          // iterate over operation date list
          for (let date of a.OperationDateList) {
            let operationDate = moment(date.Date, 'YYYYMMDD');
            let from = operationDate.format('MM/DD/YYYY');
            let to = operationDate.add(date.MaximumDuration, 'days').format('MM/DD/YYYY');
            let days = {
              From: from,
              To: to
            };
            dates.push(days);
          }

          let modality = {
            Code: a.Code,
            Name: a.Name,
            Contract: a.Contract.Name,
            PriceList: parseFloat(price.Amount.toFixed(2)),
            OperationDateList: dates
          }
          modalities.push(modality);
        }

        // (T)ransformed result
        let resultT = {
          Destination: ticketInfo.Destination.Code,
          Code: ticketInfo.Code,
          Classification: ticketInfo.Classification.Value,
          Name: ticketInfo.Name,
          Description: ticketInfo.DescriptionList[0].Value,
          ImageThumb: imageThumb.Url,
          ImageFull: imageFull.Url,
          AvailableModality: modalities
        }
        data.push(resultT)
      }
      res.send(data);
    } else {
      return res.status(502).send({ error: error, message: 'There was an error during Service API request.' });
    }
  });
}