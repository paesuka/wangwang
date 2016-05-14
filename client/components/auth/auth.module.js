'use strict';

angular.module('wangwangApp.auth', [
  'wangwangApp.constants',
  'wangwangApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
