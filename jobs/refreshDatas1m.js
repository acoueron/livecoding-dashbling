const moment = require('moment');
const fetch = require('node-fetch');

// Rafraichissement des donnees à chaque minute
module.exports = function () {
  return async (sendEvent) => {

    // Données pour l'horloge
    sendEvent("time", { value: moment().format("HH:mm") });

  }

}