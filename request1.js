var req = require('request');

req("http://www.google.com", function (err, resp, bod)
{
    console.log("resp===",resp);
    console.log("body===",bod);
    console.log("response headerz",resp.headers);
    console.log("response body",resp.body);
});