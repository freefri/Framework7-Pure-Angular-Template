MyApp.angular.factory('ItemsService', function ($q, $timeout) {
  'use strict';

  var ItemsService = {},
      storeKey = 'ItemsServiceCollection',
      collection = [];

  ItemsService.getAll = function () {
    var q = $q.defer();
    $timeout(function () {
      collection = JSON.parse(localStorage.getItem(storeKey));
      if (!collection) {
        collection = [];
      }
      q.resolve(collection);
    }, 222);
    return q.promise;
  };

  ItemsService.add = function (item) {
    var q = $q.defer();
    item.timestamp = Date.now();
    $timeout(function () {
      collection.push(item);
      localStorage.setItem(storeKey, JSON.stringify(collection));
      q.resolve('ok');
    }, 222);
    return q.promise;
  };

  return ItemsService;

});