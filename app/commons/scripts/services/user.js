'use strict';

angular./**
* myProjep Modulefac
*
* Description
*/
angular.module('myProjectApp').factory('userService', ['$http', 'authService', 'gatewayService', 'OP_TYPE', '$q', 'SERVICE_URLS', function ($http, authService, gatewayService, OP_TYPE, $q, SERVICE_URLS){


	var instance = {};

	instance.users = function(offset, limit){
		var deferred = $q.defer();
		setTimeout(function (){
			var currentUser = authService.currentUser();
			var user = angular.copy(currentUser);
			var link = user.links.self;
			user.links.self = link.substring(0, link.lastIndexOf("/")+1)+"?offset="+offset+"?limit="+limit;
			gatewayService.operation(user, OP_TYPE.read).then(function (data, status, headers, config){
				deferred.resolve(data);
			}, function (data, status, headers, config){
				deferred.resolve(status);
			});
		},0);

		return deferred.promise;
	}




	return function name(){
		
	};
}])