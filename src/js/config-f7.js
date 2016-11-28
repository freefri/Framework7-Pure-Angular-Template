/*jslint browser: true*/
/*jslint evil: true*/
/*global console, Framework7*/

MyApp.config = {
    isIos: (Framework7.prototype.device.ios === true)
};

MyApp.fw7 = {
  app : null,
  options : {
    dynamicNavbar: true,
    domCache: true
  },
  views : []
};