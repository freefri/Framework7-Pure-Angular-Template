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
      if (item.title) {
        item.errors = {};
        collection.push(item);
        localStorage.setItem(storeKey, JSON.stringify(collection));
        q.resolve('ok');
      } else {
        item.errors = {
          title: {_required: 'Mandatory'},
          price: {_required: 'Mandatory'}
        };
        q.reject('validation errors');
      }
    }, 222);
    return q.promise;
  };

  return ItemsService;

});