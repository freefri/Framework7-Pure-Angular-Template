/*jslint browser: true*/
/*global console, Framework7, MyApp, $document*/

MyApp.angular.factory('InitService', function ($document) {
  'use strict';

  var pub = {},
    eventListeners = {
      'ready' : []
    };

  pub.addEventListener = function (eventName, listener) {
    eventListeners[eventName].push(listener);
  };

  function onReady() {
    var fw7 = MyApp.fw7,
      i;

    fw7.views.push(fw7.app.addView('.view-main', fw7.options));
    
    for (i = 0; i < eventListeners.ready.length; i = i + 1) {
      eventListeners.ready[i]();
    }
  }

  pub.initFramework7 = function () {
    onReady();
  };

  return pub;
  
});