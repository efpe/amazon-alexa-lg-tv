lgtv = require("lgtv");

var retry_timeout = 10; // seconds
lgtv.discover_ip(retry_timeout, function(err, ipaddr) {
  if (err) {
    console.log("Failed to find TV IP address on the LAN. Verify that TV is on, and that you are on the same LAN/Wifi.");
    exit(1);

  } else {
    lgtv.connect(ipaddr, function(err, response){
      if (!err) {
        lgtv.show_float("Alexa turns the tv off!", function(err, response){
	  lgtv.turn_off();
          if (!err) {
            lgtv.disconnect();
          }
        }); // show float
      }
    }); // connect
  }
});
