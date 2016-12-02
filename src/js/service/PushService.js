/*jslint browser: true*/
/*global console, Framework7, MyApp, $document*/
MyApp.angular.factory('PushService', function ($rootScope, CFG) {
  'use strict';

  var pub = {};

  // get senderId from https://console.firebase.google.com
  function setupPush() {
    var push = PushNotification.init({
      "android": {
        "senderID": CFG.push.senderId
      },
      "ios": {
        "sound": true,
        "alert": true,
        "badge": true
      },
      "windows": {}
    });

    push.on('registration', function(data) {
      console.log('registration event: ' + data.registrationId);
      $rootScope.$broadcast('push:registration', data);
      var oldRegId = localStorage.getItem('push:registrationId');
      if (oldRegId !== data.registrationId) {
        localStorage.setItem('push:registrationId', data.registrationId);
      }
    });

    push.on('error', function(e) {
      console.error('push error = ' + e.message);
      $rootScope.$broadcast('push:error', e);
    });

    push.on('notification', function(data) {
      console.log('notification event');
      $rootScope.$broadcast('push:notification', data);
    });
  }

  pub.init = function () {
    if (typeof PushNotification === 'undefined') {
      console.log('PushNotification is undefined, waiting deviceready event');
      document.addEventListener('deviceready', function() {
        setupPush();
      });
    } else {
      setupPush();
    }
  };

  return pub;
});
