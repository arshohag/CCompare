var request = require('request');
var fs = require('fs');
var path = require('path');
module.exports = function(app) {
  //Bitcoin Details Page Calls
  app.get('/coin/:coin', (req, res) => {
    var options = {
      method: 'GET',
      url: 'https://coincheckup.com/data/prod/201806070554/assets/' + req.params.coin + '.json',
    }
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      res.send(JSON.parse(body));
    });
  })

  app.get('/timeline/:coin', (req, res) => {
    var options = {
      method: 'GET',
      url: 'https://api.coincheckup.com/1.0/timeline/' + req.params.coin,
    }
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      res.send(JSON.parse(body));
    });
  })


  app.get('/ticker/:coin', (req, res) => {
    var options = {
      method: 'GET',
      url: 'https://api.coinmarketcap.com/v1/ticker/' + req.params.coin + '/?convert=BTC',
    }
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      res.send(JSON.parse(body));
    });
  })

  app.get('/news/:symbol/:page', (req, res) => {
    var options = {
      method: 'GET',
      url: 'https://cryptopanic.com/api/posts/?auth_token=af3bace149bb5483beedf9c154c4b78d288eb2e5&currencies=' + req.params.symbol + '&page=' + req.params.page + '',
    }
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      res.send(JSON.parse(body));
    });
  })


  //Home Page Calls


  app.get('/converBTC', (req, res) => {
    var options = {
      method: 'GET',
      url: 'https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=BTC',
    }
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      res.send(JSON.parse(body));
    });
  })

  app.get('/global', (req, res) => {
    var options = {
      method: 'GET',
      url: 'https://api.coinmarketcap.com/v1/global/',
    }
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      res.send(JSON.parse(body));
    });
  })

  app.get('/getforex', (req, res) => {
    var options = {
      method: 'GET',
      url: 'https://coincheckup.com/data/prod/201806070554/forex.json',
    }
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      res.send(JSON.parse(body));
    });
  })


  app.get('/coins', (req, res) => {
    fs.readFile(path.join(__dirname, './data') + '/coins.json', 'utf8', function(err, data) {
      if (err) throw err;
      res.send(JSON.parse(data));
    });
  })

  app.get('/categorytags', (req, res) => {
    var options = {
      method: 'GET',
      url: 'https://coincheckup.com/data/prod/201806070554/categories-tags.json',
    }
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      res.send(JSON.parse(body));
    });
  })

  app.get('/coinfirst', (req, res) => {
    var options = {
      method: 'GET',
      url: 'https://coincheckup.com/data/prod/201806070554/coins-first.json',
    }
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      res.send(JSON.parse(body));
    });
  })

  app.get('/avgscore', (req, res) => {
    var options = {
      method: 'GET',
      url: 'https://coincheckup.com/data/prod/201806070554/screener-ranges.json',
    }
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      res.send(JSON.parse(body));
    });
  })

}
