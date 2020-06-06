var ping = require("ping");
var dns = require("dns");
var colors = require("colors");

var hosts = [
  "192.168.1.1",
  "google.com",
  "yahoo.com",
  "gmail.com",
  "facebook.com",
  "youtube.com",
  "stackoverflow.com",
  "192.168.1.22",
];

hosts.forEach((item, index) => {
  ping.sys.probe(item, (isAlive) => {
    dns.lookup(item, (err, addr) => {
      isAlive
        ? console.log("host : " + item + " ip : " + addr + " Alive".green)
        : console.log("host : " + item + " ip : " + addr + " Dead".red);
    });
  });
});
