/*jslint browser: true*/
/*jslint evil: true*/
/*global console, Framework7*/

MyApp.config = {
    isIos: (Framework7.prototype.device.ios === true)
};

MyApp.fw7 = {
  app : new Framework7({
    material: false,//!MyApp.config.isIos
    template7Pages: false,
    swipePanel: 'left',
    swipePanelActiveArea: '30',
    swipeBackPage: true,
    pushState: false,
    animateNavBackIcon: true
  }),
  options : {
    dynamicNavbar: true,
    domCache: true
  },
  views : []
};