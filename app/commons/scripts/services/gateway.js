'use strict';

/**
 * @ngdoc service
 * @name myProjectApp.service:gatewayService
 * @description
 * This service is the base service which is used to make various http calls to the Kosei backend server.
 * This service is used by various services across the application which needs to make http calls with the Kosei backend server.
 * @requires myProjectApp.constant:SERVICE_URLS
 * @requires myProjectApp.constant:OP_TYPE
 * @requires $http
 * @requires $q
 * # gatewayService
 * Service of the myProjectApp
 */

/*TODO explore does the name fits - security ext.*/

angular.module('myProjectApp').factory('gatewayService', ['$http', 'SERVICE_URLS', '$q', 'OP_TYPE',  function ($http, SERVICE_URLS, $q, OP_TYPE){

	var instance = {};

	/**
     * @ngdoc method
     * @name operation
     * @methodOf myProjectApp.service:gatewayService
     * @description
     * This method is used to perform an operation against Entity by making http calls to the Kosei back end.
     * @param {object} obj Entity Object upon which we perform an operation.
     * @param {string} operationType Type of the operation like `create`, `update`, `read` or `delete`.
     * @param {object} params (optional) Object with data that needs to sent as `data` against http call. By default
     * @param {object} params (optional) Object with data that needs to sent as `data` against http call. By default
     * `obj` parameter is used as `data` for http calls.
     * @returns {promise} Future Object.
     */


//TODO handle url better (string ext.)
	instance.operation = function (obj, operationType, params, objectParameter){
		var deferred = $q.defer();
		setTimeout(function(){
			var serviceUrl;
			if(typeof objectParameter !== 'undefined'){
				serviceUrl = SERVICE_URLS.apiUrl + objectParameter.links.self;
			}else{
				serviceUrl = SERVICE_URLS.apiUrl + obj.links.self;
			}

			$http({
				method: operationType,
				url: serviceUrl,
				data: params || obj,
				headers: {
					"Content-Type": "application/json"
				}
			}).success(function (data, status, headers, config){
				deferred.resolve(data);
			}).error(function (data, status, headers, config){
				deferred.resolve(data);
			});
		},0);
		return deferred.promise;
	};
	return instance;


}])