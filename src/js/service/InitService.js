/*jslint browser: true*/
/*global console, Framework7, MyApp, $document*/

MyApp.angular.factory('InitService', function ($rootScope, $timeout, PushService, Router) {
  'use strict';

  var pub = {},
    eventListeners = {
      'ready' : []
    };

  pub.addEventListener = function (eventName, listener) {
    eventListeners[eventName].push(listener);
  };

  function onReady() {
    PushService.init();
    var fw7 = MyApp.fw7,
      i;

    fw7.app = new Framework7({
      material: false,//!MyApp.config.isIos
      template7Pages: false,
      swipePanel: 'left',
      swipePanelNoFollow: true,
      swipePanelActiveArea: '30',
      swipeBackPage: true,
      pushState: false,
      animateNavBackIcon: true
    });
    fw7.views.push(fw7.app.addView('.view-main', fw7.options));
    $rootScope.$broadcast('f7:mainInit');

    for (i = 0; i < eventListeners.ready.length; i = i + 1) {
      eventListeners.ready[i]();
    }

    var pageEvents = [
      'pageBeforeInit', 'pageInit', 'pageReinit',
      'pageBeforeAnimation', 'pageAfterAnimation', 'pageBeforeRemove',
      'pageBack', 'pageAfterBack'
    ];
    var currentHash;
    window.addEventListener('popstate', function(e){
      var t = e.currentTarget;
      var h = '#' + currentHash;
      if (currentHash && h != t.location.hash) {
        history.pushState({}, t.document.title +h, h);
        Router.back();
      }
    });
    pageEvents.forEach(function (event) {
      Dom7(document).on(event, function (e) {
        if (['pageReinit', 'pageInit'].indexOf(event) !== -1) {
          currentHash = Dom7(e.target).data('page');
          if (currentHash) {
            location.hash = currentHash;
          }
        }
        $timeout(function () {
          $rootScope.$apply(function () {
            $rootScope.$broadcast('f7:'+event, e);
          });
        });
      });
    });
  }

  pub.initFramework7 = function () {
    onReady();

    if (navigator.splashscreen && navigator.splashscreen.hide) {
      navigator.splashscreen.hide();
    }
  };

  return pub;

});