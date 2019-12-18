let request = require('request'),
  config = require('../config');

let initialTime = null;

const handleTokenTime = (initialTime) => {
  let currentTime = new Date();
  if (currentTime.getTime() - initialTime.getTime() > config.expiringTokenMilisec) {
    console.log('Token time has exceeded!')
    return true;
  } else {
    console.log('Token time is ok!')
    return false;
  }
}

let tokenOptions = {
  method: 'POST',
  url: 'http://travellogix.api.test.conceptsol.com/Token',
  body: config.grant_type
};

exports.checkForToken = (req, res, next) => {

  function setToken(error, response, body) {

    if (!error && response.statusCode == 200) {
      let info = JSON.parse(body);
      initialTime = new Date();
      // set access_token to token
      config.setToken(info.access_token);
      return next();
    } else {
      return res.status(502).send({ error: error, message: 'It was not possible to authenticate with the Service API.' });
    }
  }

  if (config.getToken() == null || handleTokenTime(initialTime)) {
    request(tokenOptions, setToken);
  } else {
    next();
  }
};

exports.getToken = function () {
  return config.getToken();
};