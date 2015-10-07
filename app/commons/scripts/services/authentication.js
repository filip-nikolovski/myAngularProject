'use strict';

angular./**
* myProjectApp'* Description
*/
angular.module('myProjectApp').factory('authenticationService', ['$http', '$cookieStore', '$q', 'session', 'SERVICE_URLS', 'USER_ROLES', function($http, $cookieStore, $q, session, SERVICE_URLS, USER_ROLES){

	function authenticate(user){
		var deferred = $q.defer();
		setTimeout(function(){
			$http({
				method: 'POST',
				url: SERVICE_URLS.apiUrl + SERVICE_URLS.loginService;
				data: user
			}).success(function (data, status, headers, config){
				session.create(data);
				deferred.resolve(data);
			}).error(function (data, status, headers, config){
				deferred.reject(status);
			});
		},0);
		return deferred.promise;
	}


	function logoutUser(){
		var deferred = $q.defer();
		setTimeout(function(){
			$http({
				method: 'POST',
				url: SERVICE_URLS.apiUrl + SERVICE_URLS.logoutService
			}).success(function (data, status, headers, config){
				var tempCookie = $cookieStore.get('locale');
				session.destroy();
				$cookieStore.put('locale', tempCookie);
				deferred.resolve(data);
			}).error(function (data, status, headers, config){
				deferred.reject(status);
			});
		},0);
		return deferred.promise;
	}	

	function isAuthenticated(){
		return !!session.user();
	}


	var instance = {};

	instance.isAuthenticated = function(){
		return isAuthenticated();
	};

	instance.currentUser = function (user){
		session.create(user);
	};

	instance.logout = function(){
		return logout();
	}




}]);