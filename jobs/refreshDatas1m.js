const moment = require('moment');
const fetch = require('node-fetch');

// Rafraichissement des donnees à chaque minute
module.exports = function () {
  return async (sendEvent) => {

    // Données pour l'horloge
    sendEvent("time", { value: moment().format("HH:mm") });

    // Données pour le bitcoin
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(json => json.bpi.EUR.rate_float)
      .then(change => change.toFixed(2))
      .then(bc => sendEvent("change", { value: bc }));

  }

}