module['exports'] = function Logs (client) {

  var self = this;

  self.get = function (url, cb) {
    client.request('/' + url + '/logs', { json: true, method: "GET" }, function (err, res, body){
      if (err) {
        return cb(err);
      }
      cb(null, body);
    });
  };

  self.stream = function (url, output) {
    var stream = client.request('/' + url + '/logs?s=true', { stream: true, method: "GET" });
    stream.pipe(output);
  };

  // TODO: write logs
  return self;

};